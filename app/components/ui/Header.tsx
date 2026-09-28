import { SITE_MAP } from "~/utils/constantes";
import Navitems from "./Navitems"
import { Menu, X} from "lucide-react";
import Button from "./Button";
import { useState } from "react";
import type { NavigationProps } from "~/models/type";

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className="bg-[#FFF9F2] flex justify-center p-2 border-b border-[#B65C12] ">
            <div className="flex justify-between w-full max-w-7xl  ">
            <div><img src={`${import.meta.env.BASE_URL}images/logo.png`} className="h-auto w-24 md:w-30"/></div>
            <div className="  hidden md:flex gap-8  items-center  text-gray-700 font-bold  ">
        {SITE_MAP.map((page: NavigationProps, index) => (
          <Navitems key={index} pageProps={page} border="border-b-[#8F0D25] " borderbold="border-3" />
        ))}
        
        <Button text="Contactez-nous" actionpath="/" showArrow />

      </div>
<button className="md:hidden" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu size={28} className="text-[#8F0D25]"/>}</button>

{menuOpen && (
        <div className="md:hidden flex flex-col gap-4 p-4">

          {SITE_MAP.map((page, index) => (
            <Navitems
              key={index}
              pageProps={page} border={""} borderbold={""}  color="text-black"   />
          ))}

          <Button
            text="Contactez-nous"
            actionpath="/"
            showArrow
          />

        </div>
      )}


{/**  <div className="md:hidden  flex items-center">
          <Menu size={28} className="text-[#8F0D25]" />
        </div> */ }

        </div>
        </div>
    )
}