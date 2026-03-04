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

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// Allow JSON in requests (keep this)
app.use(express.json());

// Routes
app.use("/professional", contactsRoutes);

// Connect to MongoDB
await connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});