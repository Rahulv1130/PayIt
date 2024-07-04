import axios from 'axios'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    return(
        <div className="grid place-items-center pt-4 bg-slate-300  h-screen">
            <div className="border-2 w-72 p-3.5 rounded-lg bg-white h-fit">
                <Heading label="Sign up"></Heading>
                <SubHeading label="Enter your account information to create an account"></SubHeading>
                <InputBox onchange={ (e) => { setFirstName(e.target.value) }} label="First Name" placeholder="John"></InputBox>
                <InputBox onchange={ (e) => { setLastName(e.target.value) }} label="Last Name" placeholder="Doe"></InputBox>
                <InputBox onchange={ (e) => { setUsername(e.target.value) }} label="Email" placeholder="rahul@gmail.com"></InputBox>
                <InputBox onchange={ (e) => { setPassword(e.target.value) }} label="Password" placeholder="123456" type="password"></InputBox>
                <Button label="Sign Up" onclick={ async ()=> { 
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup" , { 
                        username,
                        firstName, 
                        lastName, 
                        password 
                    })
                    localStorage.setItem("token",response.data.token);
                    navigate("/dashboard");
                } } ></Button>
                <BottomWarning label="Already have an account?" to="/signin" buttonText="Sign in"></BottomWarning>
            </div>
        </div>
    )
}