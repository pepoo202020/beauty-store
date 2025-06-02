import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    whatInBox: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    video: {
      type: String,
    },
    wholeSalePrice: {
      type: Number,
    },
    wholeSaleMinimumQuantity: {
      type: Number,
    },
    categories: {
      type: Array,
    },
    concern: {
      type: Array,
    },
    brand: {
      type: String,
    },
    skinType: {
      type: Array,
    },
    originalPrice: {
      type: Number,
    },
    discountPrice: {
      type: Number,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    ratings: [
      {
        star: { type: String },
        name: { type: String },
        comment: { type: String },
        postedBy: { type: String },
      },
    ],
  },
  { timestamps: true }
);

productSchema.index({ "$**": "text" });

const Product = mongoose.model("Product", productSchema);
export default Product;
