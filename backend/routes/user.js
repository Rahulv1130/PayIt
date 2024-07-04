const express=require("express");
const zod=require("zod");
const {User, Account} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET=require("../config");
const { authMiddleware } = require("../middleware");
const router=express.Router();

const signupSchema=zod.object({
    username: zod.string().min(2),
    password: zod.string().min(2),
    firstName: zod.string().min(2),
    lastName: zod.string().min(2),
});

const updateBody = zod.object({
    passowrd: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
});

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})


router.post("/signup", async(req,res)=>{             // SignUp for User
    const body=req.body;
    const {success} = signupSchema.safeParse(body);
    console.log(success);
    if(!success){
         return res.status(401).json({
            message: "Incorrect Inputs. Cannot proceed furthur"
         });
    }

    const existingUser = await User.findOne({ username: body.username });

    if(existingUser){
        return res.status(400).json({
            message: "User already Exists"
        });
    }



    const dbUser = await User.create(body);

    await Account.create({
        userId: dbUser._id,
        balance: Math.floor(Math.random()*10000)+1
    });

    const token=jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET);
    res.json({
        message: "User Created Successfully",
        token: token
    });

});




router.post("/signin", async (req, res) => {            //Signin for User
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})



router.put("/",authMiddleware, async (req,res)=> {          // Updating User Data
    const {success} = updateBody.safeParse(req.body);
    if(!success){
        res.status(41).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({_id: req.userId},req.body);

    res.json({
        messsage: "Updated Successfully"
    })
});



router.get("/bulk", async (req,res)=> {            // Getting users from backend with the name in query
    const filter= req.query.filter || "";
    const users= await User.find({
        $or: [ {  firstName: { "$regex": filter } } , { lastName: { "$regex": filter } } ]
    });

    res.json({
        users: users.map( user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    });
});               

module.exports=router;