import { BadgeCheck, Headset, Pencil, Truck } from "lucide-react";
import Button from "~/components/ui/Button";
import Icontext from "~/components/ui/Icontext";
import SectionTitle from "~/components/ui/SectionTitle";
import ServiceSection from "~/components/ui/ServiceSection";

export default function HOME() {
  return (
    <div>
      <section>
        <div
          className=" flex justify-center min-h-150 bg-cover bg-center bg-no-repeat  px-2 
    pt-12 md:pt-20 "
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url('${import.meta.env.BASE_URL}images/background.png')`,
          }}
        >
          <div className="w-full flex flex-col items-center text-center md:items-start md:text-left max-w-7xl ">
            <div className="mb-4 w-fit font-['Playfair_Display'] text-4xl font-semibold leading-[0.95]  md:text-6xl lg:text-7xl text-[#FFF9F2] ">
              Votre marque, <br />{" "}
              <span className="text-[#E9A15B]">notre expertise</span>
            </div>
            <div className=" font-['Poppins'] text-[17px] md:text-[21px] font-medium leading-[1.6] mb-2 text-[#FFF9F2]">
              Nous créons, personnalisons et donnons vie a vos idées{" "}
              <br className="hidden md:block" /> a travers des solutions sur
              mesure, de haute qualité
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button text="Découvrir nos services" actionpath="/" showArrow />
              <Button
                text="Commander sur whatsapp"
                actionpath="/"
                showPhone
                background="bg-[#FFF9F2]"
                color="text-[#8F0D25]"
              />
            </div>

            <div className="w-fit grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Icontext
                text={
                  <>
                    Qualité
                    <br />
                    garantie
                  </>
                }
                icon={BadgeCheck}
                border
              />

              <Icontext
                text={
                  <>
                    Personnalisation
                    <br />
                    sur mesure
                  </>
                }
                icon={Pencil}
                border
              />

              <Icontext
                text={
                  <>
                    Livraison
                    <br />
                    rapide
                  </>
                }
                icon={Truck}
                border
              />

              <Icontext
                text={
                  <>
                    Accompagnement
                    <br />
                    dédie
                  </>
                }
                icon={Headset}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9F2]  pt-10">
        <ServiceSection />
      </section>
      
      <section className="  pt-10  min-h-100 bg-cover  bg-center bg-no-repeat" style={{
            backgroundImage: ` url('${import.meta.env.BASE_URL}images/bgsolution.png')`,
          }}>
        
      </section>
    </div>
  );
}
