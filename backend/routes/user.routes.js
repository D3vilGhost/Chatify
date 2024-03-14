import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import User from "../models/user.model.js";

const router=express.Router();

router.get("/",protectRoute,getUsersForSidebar);


async function getUsersForSidebar(req, res){
	
	try {
		const loggedInUserId = req.user._id;
        // $ne means select those fields where the value is not equal to given value import User from "../models/user.model.js";
        // this is so that all documents accept the one with users are selected
        // "-password" means remove all fields excpet password
		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
		
		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default router;