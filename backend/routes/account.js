const express=require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const mongoose = require("mongoose");
const router = express.Router();



router.get("/balance",authMiddleware, async (req,res) => {          // Get Balance
    const id = req.userId;
    const userAccount = await Account.findOne({userId: id});
    res.json({balance: userAccount.balance});
});




router.post("/transfer", authMiddleware ,async (req,res) => {           // Transfer Money
    const session = await mongoose.startSession();

    session.startTransaction();
    const {amount,to} = req.body;

    const fromAccount = await Account.findOne({ userId: req.userId }).session(session);
    if(!fromAccount || fromAccount.balance<amount ){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient Balance" 
        });
    }


    const toAccount = await Account.findOne({ userId: to }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne( {userId: req.userId} , {$inc: {balance: -amount} } ).session(session);
    await Account.updateOne( {userId: to} , {$inc: {balance: amount} } ).session(session);

    await session.commitTransaction();
    res.json({
        message: "Transfer Successful"
    })
});


module.exports=router;