import { Link, useNavigate } from "react-router-dom"
import AppBar from "../components/AppBar"
import Users from "../components/Users"

export default function Dashboard(){
    const navigate=useNavigate();
    return(
        <div className="pt-10">
            <AppBar></AppBar>
            <div className="text-right px-6 pt-2">
                <button onClick={()=>{
                    localStorage.removeItem("token");
                    navigate("/");
                }
                }  className="border-2 rounded-md bg-slate-700 text-white p-1 text-sm w-24">Log Out</button>
            </div>
            <Users></Users>
        </div>
    )
}