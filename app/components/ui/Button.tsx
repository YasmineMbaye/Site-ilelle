import { ArrowRight, Phone } from "lucide-react";
import { NavLink } from "react-router";
import type { Buttons } from "~/models/type";



export default function Button({text,actionpath, background, color, showArrow=false,taille, px, py, showPhone=false}:Buttons){
    return(
        
            <NavLink to={actionpath} className={({isActive})=>
            `  rounded-xl   flex items-center gap-1 w-fit  border border-[#8F0D25] ${px || "px-4"} ${py || "py-2"} ${taille || "text-sm"} ${background || "bg-[#8F0D25]"} ${color || "text-[#FFF9F2]"}`
            }>    {showPhone && <Phone size={20}/>}   {text} {showArrow && < ArrowRight size={20}/>} </NavLink>
      
    )
}