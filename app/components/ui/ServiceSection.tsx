import { services } from "~/utils/constantes";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

export default function (){
    return(
        
         <div className="">
            <div className="flex justify-center">  <SectionTitle label="Nos services" title="Des solution sur mesure" highlight="pour votre marque" description="Des solution d'impressions de personnalisation pour tout vos besoins mettre notre créativité et notre savoir-faire au service de vos projets"/>
              </div>
             <div className=" flex justify-center">
                 <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
                {services.map((service)=>(
                <ServiceCard key={service.number} {...service} />
              ))}
              </div>
             </div>
         </div>
        
    )
}