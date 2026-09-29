import type { ServiceCardProps } from "~/models/type";

export default function ServiceCard ({number, title, description,image,icon,fleche,bgIcon}:ServiceCardProps){
    return(
        <div className="group overflow-hidden rounded-2xl bg-[#FFF9F2] shadow-sm hover:-translate-y-2 transition-all duration-500 hover:shadow-xl cursor-pointer">
            <img src={image} alt="" className="h-60 w-full object-cover transition-transform duration-300
             group-hover:scale-110"/>
            <div className="flex gap-3 p-4">
                <div className=""><div className={` p-2 rounded-full transition-transform duration-300 group-hover:scale-110 text-white ${bgIcon||"bg-[#8F0D25]"}`}>{icon}</div></div>
                <div>
                    <div className="text-[#B65C12] font-bold" >{number}</div>
                    <div className="font-semibold text-[#2B1A16]" >{title}</div>
                    <div className="mt-1 text-sm text-gray-600">{description}</div>
                </div>
                <div className="flex items-center group-hover:translate-x-4 transition-transform duration-1000"><div className="bg-[#8F0D25] p-2 rounded-full  text-white">{fleche}</div></div>
            </div>
        </div>
    )
}