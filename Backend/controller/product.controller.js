import Product from "../models/product.model.js";
import asyncHandler from "express-async-handler";

// Create Product
const createProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product(req.body);
  const product = newProduct.save();
  if (product) {
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } else {
    res.status(400);
    throw new Error("Product not created");
  }
});

// update Product
const updateProduct = asyncHandler(async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    {
      new: true,
    }
  );
  if (!updatedProduct) {
    res.status(400);
    throw new Error("Product not found");
  } else {
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      updatedProduct,
    });
  }
});

// delete Product
const deleteProduct = asyncHandler(async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  if (!deletedProduct) {
    res.status(400);
    throw new Error("Product not found");
  } else {
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  }
});

// get product
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  } else {
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      product,
    });
  }
});

// get all products
const getAllProducts = asyncHandler(async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  const qSearch = req.query.search;
  let products;
  if (qNew) {
    products = await Product.find().sort({ createdAt: -1 });
  } else if (qCategory) {
    products = await Product.find({
      categories: {
        $in: [qCategory],
      },
    });
  } else if (qSearch) {
    products = await Product.find({
      $text: {
        $search: qSearch,
        $caseSensitive: false,
        $diacriticSensitive: false,
      },
    });
  } else {
    products = await Product.find().sort({ createdAt: -1 });
  }
  if (!products) {
    res.status(400);
    throw new Error("Products not found");
  } else {
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  }
});

// rating product
const ratingProduct = asyncHandler(async (req, res) => {
  const { star, comment, name, postedBy } = req.body;
  if (star && comment && name && postedBy) {
    const postedBy = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $push: { ratings: { star, comment, name, postedBy } },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Product rated successfully",
      postedBy,
    });
  } else {
    res.status(400);
    throw new Error("All fields are required");
  }
});

export {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
  ratingProduct,
};
