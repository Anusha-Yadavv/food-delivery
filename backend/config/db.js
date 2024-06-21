import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://anusha:Anusha468@cluster0.zhncoh7.mongodb.net/food-delivery')
    .then(()=>console.log("DB connected Successfully"))
    .catch((err)=>console.log(err))
}