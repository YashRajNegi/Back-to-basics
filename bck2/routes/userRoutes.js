// express import
import express from "express";

// router create
const router = express.Router();

// controller functions import
import {getUsers, createUsers, updateUser, deleteUser} from "../controllers/userController.js";


router.get("/", getUsers);

router.post("/", createUsers);

router.put("/:id",updateUser);

router.delete("/:id",deleteUser);


export default router;
