import type { SolutionCardProps } from "~/models/type";
import Button from "./Button";

export default function SolutionCard({ number,
  title,
  description,
  image,
  buttonText,
  colortext
}: SolutionCardProps){
   console.log("IMAGE =", image);
    return(
        <div  className=" group overflow-hidden shadow-sm min-h-[200px] rounded-2xl bg-cover bg-center bg-no-repeat p-6 hover:-translate-y-2 hover:bg-[length:120%] transition-all duration-500 hover:shadow-xl cursor-pointer  "
      style={{
        backgroundImage: `url('${image}')` ,
      }} >
        <div className="  flex flex-col gap-2 max-w-45 sm:max-w-45 h-full">
                    <div className=" font-bold bg-amber-600 w-fit p-2 rounded-full text-white transition-transform duration-300 group-hover:scale-110" >{number}</div>
                    <div className={`font-semibold  text-2xl font-['Playfair_Display'] ${colortext || "text-[#8F0D25]" }`} >{title}</div>
                    <div className="h-px w-8 sm:w-8 bg-[#E9A15B]"></div>
                    <div className={`text-sm font-['Playfair_Display'] ${colortext || "text-[black]" } `}>{description}</div>
                    <div>< Button text={buttonText} actionpath={"/"} showArrow taille="text-xs"/></div>
                </div>
        
            
        </div>
    )
}