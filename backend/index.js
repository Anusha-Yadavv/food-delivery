import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json()); //whenever we will get the req from the frontend to backend that will be parsed using this json()
// app.use(cors()); //using this we can access the backend from any frontend

app.use(cors({ origin: true, credentials: true }));

//db connection

connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads")); //we can access the images in uploads folder
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.get("/", (req, res) => {
  res.send("API IS WORKING");
}); //get() is HTTP method using this we can request the data from the server

//starting the server

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
