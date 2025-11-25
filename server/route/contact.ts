import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    const { name, email, phone, projectType, message } = req.body;

    if (!name || !email || !projectType || !message) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });


        await transporter.sendMail({
            from: `"${name}" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `New Contact Form — ${projectType}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || "N/A"}</p>
                <p><strong>Project Type:</strong> ${projectType}</p>
                <h3>Message</h3>
                <p>${message.replace(/\n/g, "<br/>")}</p>
            `,
        });

        return res.json({ success: true, message: "Email sent successfully!" });

    } catch (err) {
        console.error("Email Error:", err);
        return res.status(500).json({ message: "Failed to send email" });
    }
});

export default router;
