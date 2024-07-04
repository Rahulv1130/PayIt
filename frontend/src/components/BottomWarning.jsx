import { Link } from "react-router-dom";

export default function BottomWarning({label,buttonText,to}){
    return(
        <div className="flex justify-center text-gray-600 font-medium text-sm">
            <div className="px-1">
                {label}
            </div>
            <Link className="underline hover:font-bold" to={to}>{buttonText}</Link> 
        </div>
    )
}