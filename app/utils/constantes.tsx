import { ArrowRight, Box, FileText, Gift, PenLine, Shirt, Tag, Truck } from "lucide-react";
import type { NavigationProps, ServiceCardProps, SolutionCardProps } from "~/models/type";

export const SITE_MAP:NavigationProps[]=[
    {
        name:"Accueil",
        url:"/"
    },
    {
        name: "A propos",
        url:"/about"
    },
    {
        name:"Services",
        url:"/service"
    },

    
    {
        name:"Realisations",
        url:"/realisation"
    },
    {
        name:"Portfolio",
        url:"portfolio"
    },
    
]



export const services:ServiceCardProps[] = [
  {
    number: "01",
    title: "Impression & Papeterie",
    description:
      "Carte de visite, flyers, affiches, brochures, menus, invitations...",
    image: `${import.meta.env.BASE_URL}images/service1.png`,
    icon:<FileText/>,
    fleche:<ArrowRight/>,
    bgIcon:"bg-[#8F0D25]"
  },
  {
    number: "02",
    title: "Étiquettes & Stickers",
    description:
      "Étiquettes produits, autocollants, stickers personnalisés...",
    image: `${import.meta.env.BASE_URL}images/service2.png`,
    icon:<Tag />,
    fleche:<ArrowRight/>,
    bgIcon:"bg-[#E9A15B]"
  },
  {
    number: "03",
    title: "Packaging & Emballages",
    description:
      "Conception et impression de cartons, boîtes et packagings...",
    image: `${import.meta.env.BASE_URL}images/service3.png`,
    icon:<Box/>,
    fleche:<ArrowRight/>,
    bgIcon:"bg-[#8F0D25]"
  },
  {
    number: "04",
    title: "Textile personnalisé",
    description:
      "T-shirts, polos, casquettes, sacs et tenues professionnelles...",
    image: `${import.meta.env.BASE_URL}images/service4.png`,
    icon:<Shirt/>,
    fleche:<ArrowRight/>,
    bgIcon:"bg-[#E9A15B]"
  },
  {
    number: "05",
    title: "Supports & Événementiels",
    description:
      "Bâches, roll-up, kakémonos, panneaux et signalétique...",
    image: `${import.meta.env.BASE_URL}images/service5.png`,
    icon:<Gift/>,
    fleche:<ArrowRight/>,
    bgIcon:"bg-[#8F0D25]"
  },
  {
    number: "06",
    title: "Conception graphique",
    description:
      "Création de visuels sur mesure pour vos supports et votre communication.",
    image: `${import.meta.env.BASE_URL}images/service6.png`,
    icon:<PenLine/>,
    fleche:<ArrowRight/>,
    bgIcon:"bg-[#E9A15B]"
  },
];



export const solutions: SolutionCardProps[] = [
  {
    number: "01",
    title: "Service à la carte",
    description:
      "Un besoin précis ? Choisissez parmi nos services selon vos envies.",
    image: `${import.meta.env.BASE_URL}images/solution1.png`,
    buttonText: "Découvrir les services",

  },
  {
    number: "02",
    title: "Package",
    description:
      "Des solutions complètes et avantageuses pour vos différents projets.",
    image: `${import.meta.env.BASE_URL}images/solution2.png`,
    buttonText: "Voir nos packages",
  },
  {
    number: "03",
    title: "Sur mesure",
    description:
      "Une idée unique ? Nous la créons sur mesure pour donner vie à votre projet.",
    image: `${import.meta.env.BASE_URL}images/solution3.png`,
    buttonText: "Demander un devis",
    colortext:"text-white"
  },
];