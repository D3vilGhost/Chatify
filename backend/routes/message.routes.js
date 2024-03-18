import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import {io,getReceiverSocketId} from "../socket/socket.js";

const router=express.Router();

router.get("/:id",protectRoute,getMessage);
router.post("/send/:id",protectRoute,sendMessage);

async function sendMessage(req,res){
    try {
        const message=req.body.message;
        const receiverId=req.params.id;
        const senderId=req.user._id;

        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},
        });

        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId],
            });
        }

        const newMessage=new Message({
            senderId,receiverId,message,
        });

        
        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        await Promise.all([conversation.save(),newMessage.save()]);

        //socket
        const receiverSocketId=getReceiverSocketId(receiverId);

        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage);
        }

        res.status(201).json(newMessage);
    } 
    catch (error) {
        console.log("Error in sendMessage :",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

async function getMessage(req,res){
    try {

        const userToChatId=req.params.id;
        const senderId=req.user._id;

        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChatId],}
        }).populate("messages");
        
        if(!conversation){
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.messages);
    } 
    catch (error) {
        console.log("Error in getMessage :",error.message);
        res.status(500).json({error:"Internal Server Error"});

    }
}

export default router;