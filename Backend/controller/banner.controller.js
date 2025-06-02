import Banner from "../models/banner.model.js";
import asyncHandler from "express-async-handler";

// create banner
export const createBanner = asyncHandler(async (req, res) => {
  const newBanner = await Banner(req.body);
  const savedBanner = newBanner.save();

  if (!savedBanner) {
    res.status(400);
    throw new Error("Banner not created");
  } else {
    res.status(200).json({
      success: true,
      message: "Banner created successfully",
      savedBanner,
    });
  }
});

// delete banner
export const deleteBanner = asyncHandler(async (req, res) => {
  const banner = await Banner.findByIdAndDelete(req.params.id);

  if (!banner) {
    res.status(400);
    throw new Error("Banner not deleted");
  } else {
    res.status(200).json({
      success: true,
      message: "Banner deleted successfully",
    });
  }
});

// get all banners
export const getAllBanners = asyncHandler(async (req, res) => {
  const banners = await Banner.find();

  if (!banners) {
    res.status(400);
    throw new Error("Banners not found");
  } else {
    res.status(200).json({
      success: true,
      message: "Banners found successfully",
      banners,
    });
  }
});

// get random banner
export const getRandomBanner = asyncHandler(async (req, res) => {
  const banners = await Banner.find();

  if (!banners) {
    res.status(400);
    throw new Error("Banners not found");
  } else {
    const randomBanner = banners[Math.floor(Math.random() * banners.length)];
    res.status(200).json({
      success: true,
      message: "Banner found successfully",
      randomBanner,
    });
  }
});
