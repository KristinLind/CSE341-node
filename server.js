console.log("ENV CHECK:", process.env.MONGO_URI);
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import contactsRoutes from "./routes/contacts.js";
import { connectDB } from "./database/connection.js";

import swaggerUi from "swagger-ui-express";
import fs from "fs";

const swaggerDocument = JSON.parse(
  fs.readFileSync(new URL("./swagger.json", import.meta.url))
);
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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Professional API endpoint
const professionalData = {
  professionalName: "Kristin Lind",
  base64Image: "",
  nameLink: {
    firstName: "Kristin",
    url: "https://kristinlind.github.io/"
  },
  primaryDescription: " Kristin is a full-stack web development student who is currently learning backend API development with MongoDB. Her birthdate is April 2, 1969 and her favorite color is agua-green.",
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

// Connect database
connectDB()
  .then(() => {
    console.log("MongoDB connected");

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
    
})
  .catch ((err) => {
  console.error("MongoDB connection error:", err);
});