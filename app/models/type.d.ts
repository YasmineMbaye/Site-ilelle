import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type NavigationProps={
    name:string;
    url:string
}

type Buttons={
    text:ReactNode,
    actionpath:string,
     background?:string,
      color?:string,
       showArrow?:boolean
       taille?:string,
       px?:string,
       py?:string
       showPhone?:boolean
       tailletext?:string
       

}

type IconTextProps= {
  text: ReactNode;
  icon: LucideIcon;
    border?:boolean
}

type SectionTitleProps={
    label:string;
     title:string;
    highlight:string;
    description:string
    color?:string
    colortitle?:string
     colorlabel?:string
     colordescription?:string
}
type ServiceCardProps = {
  number?: string;
  title?: string;
  description?: string;
  image?: string;
  icon?: ReactNode
   fleche?: ReactNode
   bgIcon:string
}

type SolutionCardProps={
    number?:string
    title?:string,
  description? :string,
  image? :stirng,
  buttonText?:string,
  colortext?:string,
}