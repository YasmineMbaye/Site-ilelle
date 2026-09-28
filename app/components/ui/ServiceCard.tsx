import type { ServiceCardProps } from "~/models/type";

export default function ServiceCard ({number, title, description,image,icon,fleche,bgIcon}:ServiceCardProps){
    return(
        <div className=" overflow-hidden rounded-2xl bg-[#FFF9F2] shadow-sm ">
            <img src={image} alt="" className="h-60 w-full object-cover "/>
            <div className="flex gap-3 p-4">
                <div className=""><div className={` p-2 rounded-full text-white ${bgIcon||"bg-[#8F0D25]"}`}>{icon}</div></div>
                <div>
                    <div className="text-[#B65C12] font-bold" >{number}</div>
                    <div className="font-semibold text-[#2B1A16]" >{title}</div>
                    <div className="mt-1 text-sm text-gray-600">{description}</div>
                </div>
                <div className="flex items-center  "><div className="bg-[#8F0D25] p-2 rounded-full text-white">{fleche}</div></div>
            </div>
        </div>
    )
}