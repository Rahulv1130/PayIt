const mainRouter = require("./routes/index");
const express=require("express");
const app=express();
const cors=require("cors");
const userRouter = require("./routes/user");
const accountRouter = require("./routes/account");
const port=3000;

app.use(cors());
app.use(express.json());

// app.use("/api/v1",mainRouter);

app.use("/api/v1/user",userRouter);
app.use("/api/v1/account",accountRouter);

app.listen(port,()=>{
    console.log(`Listening to port :- ${port}`)
});