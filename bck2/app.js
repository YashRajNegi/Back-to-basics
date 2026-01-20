import express from "express";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import limiter from "./middlewares/rateLimit.js";
import helmet from "helmet";
import MongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";

const app = express();

// security middleware
app.use(helmet());
app.use(limiter);
app.use(MongoSanitize());


// body parser middleware
app.use(express.json({ limit: "10kb" }));
app.use(xss());


//routes

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", uploadRoutes);


//error handler middleware
app.use(errorMiddleware);

export default app;
