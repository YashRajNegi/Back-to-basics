import { body, param } from "express-validator";

// User create validation
export const createUserValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),

  body("role")
    .optional()
    .isString()
    .withMessage("Role must be a string")
];

// User ID validation
export const userIdValidation = [
  param("id")
    .isMongoId()
    .withMessage("Invalid user ID")
];
