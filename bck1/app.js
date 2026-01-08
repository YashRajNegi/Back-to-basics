const express = require("express");
const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(logger);

app.use("/api/users", userRoutes);

// error middleware (LAST)
app.use(errorHandler);

module.exports = app;
