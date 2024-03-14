import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"],
    },
    profilePic:{
        type:String,
        default:"",
    },
},{timestamps:true});

// Mongoose schemas support a timestamps option. 
// If you set timestamps: true, 
// Mongoose will add two properties of type Date to your schema:

// createdAt: a date representing when this document was created
// updatedAt: a date representing when this document was last updated

const User=mongoose.model("User",userSchema);
export default User;