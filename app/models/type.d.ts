type NavigationProps={
    name:string;
    url:string
}

type Buttons={
    text:string,
    actionpath:string,
     background?:string,
      color?:string,
       showArrow?:boolean
       taille?:string,
       px?:string,
       py?:string
       showPhone?:boolean
       
       

}

type IconTextProps= {
  text: ReactNode;
  icon: LucideIcon;
    border?:boolean
}