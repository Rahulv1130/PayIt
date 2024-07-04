import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Signin(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    return(
        <div className="grid place-items-center pt-4 bg-slate-300  h-screen">
            <div className="border-2 w-72 p-3.5 rounded-lg bg-white h-fit">
                <Heading label="Sign in"></Heading>
                <SubHeading label="Enter your credentials to access your account"></SubHeading>
                <InputBox label="Email" placeholder="rahul@gmail.com" onchange={(e)=> {setUsername(e.target.value)}}></InputBox>
                <InputBox label="Password" placeholder="123456" type="password" onchange={(e)=> {setPassword(e.target.value)}}></InputBox>
                <Button label="Sign in" onclick={
                    async ()=>{
                        let res = await axios.post("http://localhost:3000/api/v1/user/signin",{
                            username,
                            password,
                        });
                        console.log(res.data.token)
                        localStorage.setItem("token",res.data.token);
                        navigate("/dashboard");
                    }
                }></Button>
                <BottomWarning label="Dont't have an account?" to="/signup" buttonText="Sign up"></BottomWarning>
            </div>
        </div>
    )
}