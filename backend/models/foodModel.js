import mongoose from "mongoose";

const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

//making above schema as a model
const foodModel=mongoose.models.food || mongoose.model("food",foodSchema) // if model is already there it is user or else it will create new model
export default foodModel;