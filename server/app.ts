import { Server } from "node:http";
import express, { Express, Request, Response, NextFunction } from "express";

import { registerRoutes } from "./routes";

export const app = express();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJson: Record<string, any> | undefined = undefined;

  const originalJson = res.json;
  res.json = function (body, ...args) {
    capturedJson = body;
    return originalJson.apply(res, [body, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJson) logLine += ` :: ${JSON.stringify(capturedJson)}`;
      console.log(logLine);
    }
  });

  next();
});

export default async function runApp(
  setup: (app: Express, server: Server) => Promise<void>,
) {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    res.status(err.status || 500).json({ message: err.message });
  });

  await setup(app, server);

  const port = parseInt(process.env.PORT || "5000", 10);

  server.listen({ port, host: "127.0.0.1" }, () => {
    log(`➜ Local:   http://localhost:${port}`);
    log(`➜ Network: http://127.0.0.1:${port}`);
  });
}
