import express from "express";
import {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
} from "../controllers/contactsController.js";

const router = express.Router();

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Get all contacts'
 */
router.get("/", getAllContacts);

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Get a single contact by ID'
 */
router.get("/:id", getSingleContact);

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Create a new contact'
 * #swagger.parameters['obj'] = {
 *   in: 'body',
 *   required: true,
 *   schema: {
 *     firstName: "Kristin",
 *     lastName: "Lind",
 *     email: "kristin@email.com",
 *     favoriteColor: "Aqua Green",
 *     birthday: "1969-04-02"
 *   }
 * }
 */
router.post("/", createContact);

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Update a contact'
 */
router.put("/:id", updateContact);

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Delete a contact'
 */
router.delete("/:id", deleteContact);

export default router;