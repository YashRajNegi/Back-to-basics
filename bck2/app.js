import userRoutes from "./routes/userRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

import express from "express";
const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use(errorMiddleware);


export default app;
