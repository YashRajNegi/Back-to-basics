import User from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../middlewares/catchAsyncError.js";

export const getUsers = catchAsyncError(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ success: true, users });
});

export const createUser = catchAsyncError(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ success: true, user });
});

export const updateUser = catchAsyncError(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new ErrorHandler("User not found", 404);
  }

  user.name = req.body.name || user.name;
  user.role = req.body.role || user.role;

  await user.save();

  res.status(200).json({ success: true, user });
});

export const deleteUser = catchAsyncError(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new ErrorHandler("User not found", 404);
  }

  await user.deleteOne();

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});
