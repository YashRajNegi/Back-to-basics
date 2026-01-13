import User from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../middlewares/catchAsyncError.js";

const getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({ success: true, users });
};

const createUsers = async (req, res) => {
  if (!req.body.name) {
    throw new ErrorHandler("Name is required", 400);
  }

  const user = await User.create(req.body);

  res.status(201).json({ success: true, user });
};

const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new ErrorHandler("User not found", 404);
  }

  user.name = req.body.name || user.name;
  user.role = req.body.role || user.role;

  await user.save();

  res.status(200).json({ success: true, user });
};

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new ErrorHandler("User not found", 404);
  }

  await user.deleteOne();

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
};

export { getUsers, createUsers, updateUser, deleteUser };
