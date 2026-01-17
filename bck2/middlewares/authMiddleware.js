import jwt from "jsonwebtoken";
import User from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "./catchAsyncError.js";

export const isAuthenticatedUser = catchAsyncError(
  async (req, res, next) => {
    // Token nikalna header se
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      throw new ErrorHandler("Please login to access this resource", 401);
    }

    const token = authHeader.split(" ")[1];

    //Token verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //User fetch
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      throw new ErrorHandler("User not found", 401);
    }

    // Next middleware / controller
    next();
  }
);
