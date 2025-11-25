import { Express } from "express";
import http from "http";

import contactRoute from "./contact";

export async function registerRoutes(app: Express) {

    // Register API routes here
    app.use("/api/contact", contactRoute);

    // Create and return server
    const server = http.createServer(app);
    return server;
}
