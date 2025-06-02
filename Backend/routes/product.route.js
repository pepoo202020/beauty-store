import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
  ratingProduct,
} from "../controller/product.controller.js";

import express from "express";

const router = express.Router();

// rating product route
router.put("/rating/:productId", ratingProduct);
// get all products route
router.get("/", getAllProducts);
// get a product route
router.get("/find/:id", getProduct);
// create a product route
router.post("/", createProduct);
// update a product route
router.put("/:id", updateProduct);
// delete a product route
router.delete("/:id", deleteProduct);

export default router;
