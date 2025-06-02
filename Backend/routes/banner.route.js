import {
  createBanner,
  deleteBanner,
  getAllBanners,
  getRandomBanner,
} from "../controller/banner.controller.js";
import express from "express";

const router = express.Router();

// create banner
router.post("/", createBanner);
// get all banners
router.get("/", getAllBanners);

// get random banner
router.get("/random", getRandomBanner);

// delete banner
router.delete("/:id", deleteBanner);

export default router;
