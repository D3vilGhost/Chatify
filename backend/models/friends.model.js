import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique:true,
    },
    friends:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:[],
      },
    ]
});

const Friend=mongoose.model("Friend",friendSchema);
export default Friend; 