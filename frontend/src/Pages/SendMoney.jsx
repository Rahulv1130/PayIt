import Heading from "../components/Heading"
import FriendName from "../components/Name"
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from 'axios'
import { useState } from "react";

export default function SendMoney(){
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount,setAmount] = useState(0);
    const navigate = useNavigate();

    return(
        <div className="grid place-items-center pt-4 bg-slate-300  h-screen">
            <div className="border-2 w-72 p-3.5 rounded-lg bg-white h-fit">
                <Heading label="Send Money"></Heading>
                <FriendName name={name}></FriendName>
                
                <div className="pt-3 ">
                    <div className="font-semibold text-sm">Amount (in Rs)</div>
                    <input onChange={(e)=> setAmount(e.target.value)} className="border-2 border-gray-100 rounded-md w-64 text-sm p-1 hover:border-blue-300" type="number" placeholder="Enter amount"></input>
                </div>

                <div className="pt-2">
                    <button type="button" className=" w-full focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={
                        async ()=> {
                            await axios.post("http://localhost:3000/api/v1/account/transfer",{
                                to: id,
                                amount: amount
                            },{
                                headers: {
                                    authorization: "Bearer " + localStorage.getItem("token")
                                }
                            }); 
                            navigate("/dashboard");
                        }
                    }>Initiate Transfer</button>
                </div>
            </div>
        </div>
    )
}