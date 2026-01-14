import express from "express";
import userRoutes from "./routes/userRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

// error middleware LAST
app.use(errorMiddleware);

export default app;
