import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, data: submission });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid submission data" 
      });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch submissions" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
