import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controller/auth.controller.js";
const router = express.Router();

// register user router
router.post("/register", registerUser);
// login user router
router.post("/login", loginUser);
// logout user router
router.get("/logout", logoutUser);

export default router;
