// express import
const express = require("express");

// router create
const router = express.Router();

// controller functions import
const {getUsers, createUsers, updateUser,deleteUser} = require("../controllers/userController");


router.get("/", getUsers);

router.post("/", createUsers);

router.put("/:id",updateUser);

router.delete("/:id",deleteUser);


module.exports = router;
