import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import Friend from "../models/friends.model.js";

const router=express.Router();
router.get("/",protectRoute,getFriends);
router.patch("/add",protectRoute,addFriend);
router.delete("/remove",protectRoute,removeFriend);

async function getFriends(req,res){
    try{
        const userId=req.user._id;

        let friendList=await Friend.findOne({userId}).populate("friends");

        if(!friendList || friendList.friends.length==0){
            return res.status(201).json([]);
        }
        res.status(201).json(friendList.friends);
    }
    catch(error){
        console.log("Error in getFriends :",error.message);
        res.status(500).json({error:"Internal Server Error"});        
    }
}

async function addFriend(req,res){
    try{
        const newFriendId=req.body._id;
        const userId=req.user._id;

        let friendList=await Friend.findOne({userId});

        if(!friendList){
            friendList=await Friend.create({userId});
        }
        friendList.friends.push(newFriendId);

        await Promise.all([friendList.save()]);
        await friendList.populate("friends")
        res.status(201).json(friendList.friends);
    }
    catch(error){
        console.log("Error in addFriend :",error.message);
        res.status(500).json({error:"Internal Server Error"});        
    }

}

async function removeFriend(req,res){
    try{
        const friendToRemove=req.body._id;
        const userId=req.user._id;

        let friendList=await Friend.findOne({userId});
        
        friendList.friends.pull(friendToRemove);

        await Promise.all([friendList.save()]);

        if(friendList.friends.length==0){
            return res.status(201).json([]);
        }

        await friendList.populate("friends");

        res.status(201).json(friendList.friends);
    }
    catch(error){
        console.log("Error in removeFriend :",error.message);
        res.status(500).json({error:"Internal Server Error"});        
    }
}


export default router;