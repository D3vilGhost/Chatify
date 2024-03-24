import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import User from "../models/user.model.js";

const router=express.Router();

router.get("/:username",protectRoute,getSearchResult);

async function getSearchResult(req, res){
	
	try {
		const searchInput = req.params.username;
        // "-password" means remove all fields excpet password
		
		const searchResult = await User.find({username:searchInput}).select("-password");
		
		res.status(200).json(searchResult);

	} catch (error) {
		console.error("Error in getSearchResult: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export default router;