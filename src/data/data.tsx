import Image from "../assets/social.jpg";
import {
  ContactProps,
  ImageType,
  MenuProps,
  ProjectCardProps,
  SkillsProps,
  TimelineProps,
} from "../types/types";
export const URL = "https://chaymae-abourri.github.io/portfolio";
export const NAME = "Chaymae ABOURRI";

export const SECTIONS = ["Accueil", "Expériences", "Projets", "Compétences", "Contact"];
export const HERO_IMAGE = "https://picsum.photos/id/1005/1600/1400";
export const CTA_TEXT = "Voir plus";
export const MENU: MenuProps[] = [
  { key: 1, route: "Accueil", name: SECTIONS[0] },
  { key: 2, route: "Expériences", name: SECTIONS[1] },
  { key: 3, route: "Projets", name: SECTIONS[2] },
  { key: 4, route: "Compétences", name: SECTIONS[3] },
  { key: 5, route: "Contact", name: SECTIONS[4] },
];

export const GREETING_TEXT = "Bonjour";
export const GREETING_DESCRIPTION =
  "JE SUIS CONSULTANTE ET DÉVELOPPEUSE TECHNIQUE EN ALTERNANCE CHEZ ARIUM CONSULTING";

export const EXPERIENCE: TimelineProps[] = [
  {
    key: 1,
    company: "Arium Consulting",
    position: "Consultante Technique",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2020",
    end: "2022",
    description: "Maintenance d'une application de Gestion de stock en VB.NET en interaction avec l'ERP SAGE",
  },
  {
    key: 2,
    company: "ASTEELFLASH FRANCE",
    position: "Consultante Technique",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2019-04-01",
    end: "2019-07-01",
    description: "Une étude de l'existant, du besoins et une étude fonctionnelle du système d’analyse de données. Rédaction du cahier des charges à destination de la maîtrise d’oeuvre. La conception et la réalisation de la solution qui répond aux besoins.",
  },
  {
    key: 3,
    company: "l'UMI-Branche Informatique",
    position: "Stagaire",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2017-04",
    end: "2017-05",
    description: "Définir les besoins de la scolarité et des professeurs. Composition de l'équipe projet menée par notre chef de projet. Etablir la planification du projet à l'aide de GanttProject qui se base sur le réseau de Gant. Rédiger le cahier des charges, choisir les meilleurs outils. conception et la réalisation.",
  },
  {
    key: 4,
    company: "l’OCP-Branche Informatique (Service Desc)",
    position: "Stagaire",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2016-07",
    end: "2016-08",
    description: "Gestion des incidents en PHP",
  },
];
export const KEYWORDS = [
  "Developer",
  "DevOps",
  "Portfolio",
];
export const IMAGE: ImageType = {
  src: Image,
  height: "600",
  width: "314",
};

export const projects: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "Projet PFE : Face recognition",
    projectDescription:
      "Réalisation d’une application de reconnaissance faciale de fin d’étude (PFE) en Android",
    projectImageLogo: `https://picsum.photos/id/2/600/314`,
    link: "https://github.com/chaymaeAbourri",
    buttonText: "Voir plus détails",
    tech: ["Java", "Android", "IA", "OpenCV"],
  },
  {
    id: 2,
    projectName: "Projet PFE",
    projectDescription:
      "Jeu Télé en temps réel en JavaScript et PHP",
    projectImageLogo: `https://picsum.photos/id/2/600/314`,
    link: "https://github.com/chaymaeAbourri",
    buttonText: "Voir plus détails",
    tech: ["Javascript", "PHP", "Jeux"],
  },
];
/**
 *  @type {SkillsProps}
 * skills
 * Kept level as random but you can hard code it if you want
 */
export const skills: SkillsProps[] = [
  {
    id: 1,
    skill: "Langage de modélisation de données UML, Merise",
    level: 80,
  },
  {
    id: 2,
    skill: "Programmation Java, C#,C, PL/SQL, Symfony, Dot Net, Web",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 3,
    skill: "Gestion de base de données SGBD",
    level: 80,
  },
  {
    id: 4,
    skill: "Modélisation des systèmes d'information",
    level: 90,
  },
  {
    id: 5,
    skill: "Méthode adaptative agile",
    level: 95,
  },
  {
    id: 6,
    skill: "Gestion de projet",
    level: 90,
  },
  {
    id: 7,
    skill: "Analyse de Data",
    level: 80,
  },
];

export const contactInfo: ContactProps[] = [
  {
    fullName: "Chaymae ABOURRI",
    email: "chaymae.abourri@gmail.com",
    tel: "06 63 37 61 52",
    address: "122 Rue de Clermont, Beauvais",
    img: "https://avatars.githubusercontent.com/u/49748669?v=4",
  },
];