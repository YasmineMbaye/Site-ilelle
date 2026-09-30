import { solutions } from "~/utils/constantes";
import SectionTitle from "./SectionTitle";
import SolutionCard from "./SolutionCard";



export default function SolutionSection(){
    return(
        <div >
             <div className="flex justify-center ">  <SectionTitle
  label="Votre besoin, notre solution"
  title="Votre besoin,"
  highlight="notre solution"
  description="Que vous ayez un besoin précis, un projet complet ou une idée unique, nous vous accompagnons avec des solutions adaptées et de qualité."
  colorlabel="text-[#E9A15B]"
  colortitle="text-white"
  colordescription="text-white"/> 
    </div>
    <div className=" flex justify-center ">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full px-4 ">
        {solutions.map((solution)=>(
            <SolutionCard key={solution.number} {...solution}/>
        ))}
    </div>
    </div>

        </div>
    )
}