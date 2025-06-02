import express from "express";
import cors from "cors";
import { errorHandler, notFound } from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import productRouter from "./routes/product.route.js";
import bannerRouter from "./routes/banner.route.js";
import userRouter from "./routes/user.route.js";

const app = express();

// cors
app.use(cors());

// Json body
app.use(express.json());

// cookie-parser
app.use(cookieParser());

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/banners", bannerRouter);
app.use("/api/v1/users", userRouter);

// middleware
app.use(notFound);
app.use(errorHandler);

export default app;
