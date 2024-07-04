
export default function InputBox({label,placeholder,onchange,type}){
    return(
        <div className="pt-3 ">
            <div className="font-semibold">
                {label}
            </div>
            <input type={type} onChange={onchange} className="border-2 border-gray-100 rounded-md w-64 text-sm p-1 hover:border-blue-300" placeholder={placeholder}></input>
        </div>
    )
}