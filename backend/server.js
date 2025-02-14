require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON data

// Check if environment variables are loaded
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
    console.error("❌ Missing required environment variables!");
    process.exit(1); // Exit if required variables are missing
}

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Test if email transporter works
transporter.verify((error, success) => {
    if (error) {
        console.error("❌ Email transporter error:", error);
    } else {
        console.log("✅ Email transporter is ready!");
    }
});

// Test route (to check if the backend is running)
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Route to handle contact form submission
app.post("/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation: Check if required fields are present
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required!" });
        }

        console.log("📩 Sending emails...");

        // Email to Website Owner (You)
        const ownerMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL, // Your email
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Email to User (Confirmation)
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email, // Send to the user who filled the form
            subject: "Thank you for contacting us!",
            text: `Hi ${name},\n\nThank you for reaching out. We have received your message:\n\n"${message}"\n\nWe will get back to you shortly.\n\nBest Regards,\nYour Company Name`,
        };

        // Send emails asynchronously
        await Promise.all([
            transporter.sendMail(ownerMailOptions),
            transporter.sendMail(userMailOptions),
        ]);

        console.log("✅ Emails sent successfully!");

        res.status(200).json({ success: "Message sent successfully!" });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

// Set the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
