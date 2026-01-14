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

router.get("/", getUsers);

router.post("/", createUserValidation, validate, createUser);

router.put("/:id", userIdValidation, validate, updateUser);

router.delete("/:id", userIdValidation, validate, deleteUser);

export default router;
