import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config();

// server
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running on port " + port);
  connectDB();
});
