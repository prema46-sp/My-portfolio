import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({ origin: "http://localhost:3000" })); 

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/portfolio")
  .then(() => console.log("✅ MongoDB Connected to Portfolio DB"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  });

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactSchema, "information"); 

app.post("/contact", async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;
    if (!fullName || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    const newContact = new Contact({ fullName, email, phone, message });
    await newContact.save();
    
    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ success: false, message: "Server error!" });
  }
});

app.get("/api/information", async (req, res) => {
  try {
    const contacts = await Contact.find(); 
    res.status(200).json(contacts);
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ success: false, message: "Server error!" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
