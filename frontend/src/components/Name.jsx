
export default function FriendName({name}){
    return(
        <div className="flex pt-16 ">
            <div className="border-2 w-9 h-9 text-center rounded-full text-lg bg-green-500 font-semibold text-slate-100 p-1">{name[0]}</div>
            <div className="text-lg font-semibold p-1" >{name}</div>
        </div>
    )
}