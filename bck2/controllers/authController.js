import User from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../middlewares/catchAsyncError.js";

// REGISTER
export const register = catchAsyncError(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    token
  });
});

// LOGIN
export const login = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ErrorHandler("Email and password required", 400);
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new ErrorHandler("Invalid credentials", 401);
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new ErrorHandler("Invalid credentials", 401);
  }

  const token = user.getJWTToken();

  res.status(200).json({
    success: true,
    token
  });
});
