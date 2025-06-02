import mongoose from "mongoose";
const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    subTitle: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
