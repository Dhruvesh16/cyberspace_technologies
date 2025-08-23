import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  inquiry: z.string().min(1, "Inquiry type is required"),
  message: z.string().min(1, "Message is required")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real implementation, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Possibly send autoresponder email
      
      console.log("Contact form submission:", validatedData);
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
