// express import
const express = require("express");

// router create
const router = express.Router();

// controller functions import
const {getUsers, createUsers} = require("../controllers/userController");


router.get("/", getUsers);

router.post("/", createUsers);


module.exports = router;
