import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

// update user
export const updateUser = asyncHandler(async (req, res) => {
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
  }
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  if (!updatedUser) {
    res.status(404);
    throw new Error("User not found");
  } else {
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  }
});

// delete user
export const deleteUser = asyncHandler(async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deletedUser) {
    res.status(404);
    throw new Error("User not found");
  } else {
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  }
});

// get user
export const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  } else {
    res.status(200).json({
      success: true,
      message: "User found",
      data: user,
    });
  }
});

// get all users
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  if (!users) {
    res.status(404);
    throw new Error("Users not found");
  } else {
    res.status(200).json({
      success: true,
      message: "Users found",
      data: users,
    });
  }
});
