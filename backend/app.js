const express = require("express");

const app = express();

// middleware
app.use(express.json());

// routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

module.exports = app;
