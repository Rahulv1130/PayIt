import { useEffect, useState } from "react"
import Balance from "./Balance"
import axios from 'axios'
import User from "./User"


export default function Users(){
    const [users,setUsers] = useState([]);
    const [filter,setFilter] = useState("");
    const [balance,setBalance] = useState(0);

    useEffect( () => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
            .then(res => setUsers(res.data.users))
    },[filter]);

    useEffect( () => {
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers: {
                authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(res => setBalance(res.data.balance))
    },[balance]);
    

    return(
        <div className="p-9">
            <Balance value={balance}></Balance>
            <div className="font-bold">Users</div>
            <input onChange={(e)=> setFilter(e.target.value) } placeholder="Search Users.." className="border-2 w-full rounded-md text-sm p-1"></input>
            <User arr={users}></User>
        </div>
    )
}