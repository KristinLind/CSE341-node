import express from "express";
import {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
} from "../controllers/contactsController.js";
import {
  contactValidationRules,
  validate
} from "../middleware/validateContact.js";

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
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   description: 'Contact object',
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
router.post(
  "/",
  contactValidationRules(),
  validate,
  createContact
);
/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Update a contact'
 */
router.put(
  "/:id",
  contactValidationRules(),
  validate,
  updateContact
);
/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Delete a contact'
 */
router.delete("/:id", deleteContact);

export default router;