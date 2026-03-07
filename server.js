import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import contactsRoutes from "./routes/contacts.js";
import { connectDB } from "./database.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/contacts", contactsRoutes);


// Professional API endpoint
const professionalData = {
  professionalName: "Kristin Lind",
  base64Image: "",
  nameLink: {
    firstName: "Kristin",
    url: "https://kristinlind.github.io/"
  },
  primaryDescription: " Kristin is a full-stack web development student who is currently learning backend API development with MongoDB.",
  linkTitleText: "Professional Links",
  linkedInLink: {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/kristin-lind-0281572ba/"
  },
  githubLink: {
    text: "GitHub",
    link: "https://github.com/KristinLind"
  }
};

app.get("/professional", (req, res) => {
  res.json(professionalData);
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect database
connectDB()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));