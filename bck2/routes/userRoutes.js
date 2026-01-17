import express from "express";
const router = express.Router();

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

import {
  createUserValidation,
  userIdValidation,
} from "../middlewares/userValidation.js";

import validate from "../middlewares/validate.js";

import { isAuthenticatedUser } from "../middlewares/authMiddleware.js";

router.get("/", isAuthenticatedUser, getUsers);

router.post("/", isAuthenticatedUser,createUserValidation, validate, createUser);

router.put("/:id", isAuthenticatedUser,userIdValidation, validate, updateUser);

router.delete("/:id", isAuthenticatedUser,userIdValidation, validate, deleteUser);

export default router;

