import { useNavigate } from "react-router-dom"

export default function Button({label,onclick}){
    const navigate=useNavigate();
    return(
        <div className="pt-3">
            <button onClick={onclick} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ">{label}</button>
        </div>
    )
}