import { body, validationResult } from "express-validator";

// Validation rules
export const contactValidationRules = () => {
  return [
    body("firstName")
      .notEmpty()
      .withMessage("First name is required"),

    body("lastName")
      .notEmpty()
      .withMessage("Last name is required"),

    body("email")
      .isEmail()
      .withMessage("Valid email is required"),

    body("favoriteColor")
      .optional()
      .isString()
      .withMessage("Favorite color must be a string"),

    body("birthday")
      .optional()
      .isISO8601()
      .withMessage("Birthday must be a valid date (YYYY-MM-DD)")
  ];
};

// Middleware to check validation results
export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const extractedErrors = errors.array().map(err => err.msg);

    return res.status(400).json({
      errors: extractedErrors
    });
  }

  next();
};