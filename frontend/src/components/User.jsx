import {useNavigate} from 'react-router-dom'
export default function User({arr}){
    const navigate = useNavigate();
    return(
        <div>
           { arr.map( (user) => 
                <div className="flex justify-between pt-4">
                    <div className="flex">
                        <div className="border-2 w-9 h-9 text-center rounded-full text-lg bg-slate-300 font-medium p-1">{user.firstName[0]}</div>
                        <div className="text-lg font-semibold p-1" >{user.firstName} {user.lastName}</div>
                    </div>
                    <div>
                        <button onClick={() => navigate("/send?id=" + user._id + "&name=" + user.firstName)} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send Money</button>
                    </div>
                </div>
           )}
        </div>
    )
}