import express from "express";
import { connectDB } from "../database.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// GET all contacts
router.get("/", async (req, res) => {
  const db = await connectDB();
  const contacts = await db.collection("contacts").find().toArray();
  res.json(contacts);
});

// GET single contact
router.get("/:id", async (req, res) => {
  const db = await connectDB();

  try {
    const contact = await db.collection("contacts").findOne({
      _id: new ObjectId(req.params.id)
    });

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(contact);
  } catch {
    res.status(400).json({ message: "Invalid ID format" });
  }
});

// POST
router.post("/", async (req, res) => {
  const db = await connectDB();
  const result = await db.collection("contacts").insertOne(req.body);
  res.status(201).json(result);
});

// PUT
router.put("/:id", async (req, res) => {
  const db = await connectDB();

  try {
    const result = await db.collection("contacts").updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ message: "Contact updated" });
  } catch {
    res.status(400).json({ message: "Invalid ID format" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const db = await connectDB();

  try {
    const result = await db.collection("contacts").deleteOne({
      _id: new ObjectId(req.params.id)
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ message: "Contact deleted" });
  } catch {
    res.status(400).json({ message: "Invalid ID format" });
  }
});

export default router;