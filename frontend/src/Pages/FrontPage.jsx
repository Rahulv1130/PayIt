
import {useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function FrontPage(){
    const navigate=useNavigate();
    return(
        
        <div className="grid grid-rows-7 place-items-center h-screen bg-slate-300">
            <div className="text-center row-span-3">
                <h1 className="font-black text-5xl">Welcome to Paytm</h1>
            </div>
            <div className="size-60 row-span-2">
                <Button label="Sign up" onclick={ ()=> navigate("/signup") } ></Button>
                <Button label="Sign in" onclick={ ()=> navigate("/signin") }></Button>
            </div>
        </div>
        
    )
}