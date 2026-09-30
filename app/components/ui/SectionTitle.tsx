import type { SectionTitleProps } from "~/models/type";

export default function SectionTitle({label, title, highlight, description, color, colortitle, colorlabel, colordescription}:SectionTitleProps){
    return(
        <div className=" max-w-xl flex flex-col gap-2  mb-4  px-4 ">
            <div className="flex justify-center gap-2 ">
                <div className=" flex items-center"><div className=" h-px w-8 sm:w-12 bg-[#E9A15B] flex items-center"></div></div>
                <div className={`font-semibold uppercase text-sm  ${colorlabel || "text-black"} `}>{label}</div>
                 <div className=" flex items-center"><div className=" h-px w-8 sm:w-12 bg-[#E9A15B] flex items-center"></div></div>
               
                <div></div>
            </div>
            <div>
                <div className={`text-center font-['Playfair_Display'] font-semibold text-3xl md:text-4xl lg:text-5xl ${colortitle ||"text-black"}`}>{title}</div>
                <div className={`text-center font-['Playfair_Display'] font-semibold text-3xl md:text-4xl lg:text-5xl  ${color ||"text-[#E9A15B]"}`}>{highlight}</div>
            </div>
            <div className={`text-center font-['Poppins'] font-medium  ${colordescription ||"text-black"}`}>{description}</div>
        </div>
    )
}