import {
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
} from "../controller/user.controller.js";
import express from "express";

const router = express.Router();

// update user
router.put("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

// get all users
router.get("/", getAllUsers);

// get user
router.get("/find/:userId", getUser);

export default router;
