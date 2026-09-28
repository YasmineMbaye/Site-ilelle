import type { LucideIcon } from "lucide-react";
import type { IconTextProps } from "~/models/type";


export default function Icontext({text, icon: Icon, border=false}:IconTextProps){
    return(
        <div className={`px-1 ${border ? "lg:border-r lg:border-[#B65C12]":""}`}>
            <div className="   flex justify-center mb-2"><Icon size={24} className="text-[#FFF9F2]"/></div>
            <div className="font-['Poppins'] leading-4 text-center text-[#FFF9F2]"> {text}</div>
        </div>
    )
}