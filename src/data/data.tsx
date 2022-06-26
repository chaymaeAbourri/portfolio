import Image from "../assets/social.jpg";
import {
  ContactProps,
  FormationCardProps,
  ImageType,
  MenuProps,
  ProjectCardProps,
  SkillsProps,
  TimelineProps,
} from "../types/types";
export const URL = "https://chaymae-abourri.github.io/portfolio";
export const NAME = "Chaymae ABOURRI";

export const SECTIONS = ["Accueil", "Expériences", "Projets", "Formations", "Compétences", "Contact"];
export const HERO_IMAGE = "https://picsum.photos/id/1005/1600/1400";
export const CTA_TEXT = "Voir plus";
export const MENU: MenuProps[] = [
  { key: 1, route: "Accueil", name: SECTIONS[0] },
  { key: 2, route: "Expériences", name: SECTIONS[1] },
  { key: 3, route: "Projets", name: SECTIONS[2] },
  { key: 4, route: "Formations", name: SECTIONS[3] },
  { key: 5, route: "Compétences", name: SECTIONS[4] },
  { key: 6, route: "Contact", name: SECTIONS[5] },
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
    description: "Maintenance et evolution applicative d'une application de Gestion de stock. Conception et developpement d'une application Calendrier. Aider dans les choix d'architectures et les technologies des applications développées. Technologies: Dot net, Vba, Javascript, Html, Css, SQL, Git.",
  },
  {
    key: 2,
    company: "ASTEELFLASH FRANCE",
    position: "Consultante Technique",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2019-04-01",
    end: "2019-07-01",
    description: "Une étude de l'existant, du besoins et une étude fonctionnelle du système d’analyse de données. Rédaction du cahier des charges à destination de la maîtrise d’oeuvre. La conception et la réalisation de la solution qui répond aux besoins. Technologies: JAVA/JEE, Spring, JPA, Hibernete, ReactJs, Git, Maven, Junit, Mockito.",
  },
  {
    key: 3,
    company: "l'UMI-Branche Informatique",
    position: "Stagaire",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2017-04",
    end: "2017-05",
    description: "Définir les besoins de la scolarité et des professeurs. Composition de l'équipe projet menée par notre chef de projet. Etablir la planification du projet à l'aide de GanttProject qui se base sur le réseau de Gant. Rédiger le cahier des charges, choisir les meilleurs outils. conception et la réalisation. Technologies: JAVA/JEE, EJB, Hibernte, JBoss, Git, AngularJs.",
  },
  {
    key: 4,
    company: "l’OCP-Branche Informatique (Service Desc)",
    position: "Stagaire",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2016-07",
    end: "2016-08",
    description: "Realisation d'une application de gestion des incidents informatiques. Technologies: PHP, Symfony, Javascript, HTML5, CSS, jQuery.",
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
      "Réalisation d’une application Android de reconnaissance faciale  avec Backend Java et OpenCV",
    projectImageLogo: `https://picsum.photos/id/2/600/314`,
    link: "https://github.com/chaymaeAbourri",
    buttonText: "Voir plus détails",
    tech: ["Java", "Android", "IA", "OpenCV"],
  },
  {
    id: 2,
    projectName: "Projet PFE",
    projectDescription:
      "Jeu Télé en temps réel en JavaScript, Socket.io, et PHP",
    projectImageLogo: `https://picsum.photos/id/2/600/314`,
    link: "https://github.com/chaymaeAbourri",
    buttonText: "Voir plus détails",
    tech: ["Javascript", "PHP", "Jeux", "Temps réel"],
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
    skill: "Dev Backend, Java/JEE, Spring, JPA, Hibernete, SQL, PL/SQL, Junit, Mockito, Dot Net",
    level: 85,
  },
  {
    id: 3,
    skill: "Dev FrontEnd, Javascript, HTML, CSS, AngularJs, ReactJs",
    level: 80,
  },
  {
    id: 4,
    skill: "Gestion de base de données SGBD, Mysql et Oracle",
    level: 80,
  },
  {
    id: 5,
    skill: "Modélisation des systèmes d'information",
    level: 90,
  },
  {
    id: 6,
    skill: "Méthode adaptative agile",
    level: 95,
  },
  {
    id: 7,
    skill: "Gestion de projet",
    level: 90,
  },
  {
    id: 8,
    skill: "Analyse de Données",
    level: 80,
  },
  {
    id: 9,
    skill: "Dev Mobile, Android Native",
    level: 80,
  },
];

export const contactInfo: ContactProps[] = [
  {
    fullName: "Chaymae ABOURRI",
    email: "chaymae.abourri@gmail.com",
    tel: "06 63 37 61 52",
    address: "",
    img: "https://avatars.githubusercontent.com/u/49748669?v=4",
  },
];

export const FORMATIONS: FormationCardProps[] = [
  {
    key: 1,
    num: 1,
    school: "Université de Picardie Jules Verne",
    address: "Amiens, France",
    title: "M 2 : Méthodes Informatiques Appliquées à la Gestion des Entreprises",
    start: "2021",
    end: "2022",
    styling: "",
  },
  {
    key: 2,
    num: 2,
    school: "Université de Picardie Jules Verne",
    address: "Amiens, France",
    title: "M 1 : Méthodes Informatiques Appliquée à la Gestion des Entreprises",
    start: "2020",
    end: "2021",
    styling: "",
  },
  {
    key: 3,
    num: 3,
    school: "Université de Picardie Jules Verne",
    address: "Amiens, France",
    title: "Licence Méthodes Informatiques Appliquées à la Gestion des Entreprise",
    start: "2019",
    end: "2020",
    styling: "",
  },
  {
    key: 4,
    num: 4,
    school: "Université de Picardie Jules Verne",
    address: "Amiens, France",
    title: "Licence Informatique",
    start: "2018",
    end: "2019",
    styling: "",
  },
  {
    key: 5,
    num: 5,
    school: "Ecole Supérieur de Technologie",
    address: "Maroc",
    title: "LP en Développement des Systèmes d'Information et de Communication",
    start: "2017",
    end: "2018",
    styling: "",
  },
  {
    key: 6,
    num: 6,
    school: "Ecole Supérieur de Technologie",
    address: "Maroc",
    title: "DUT en Informatique, Service et Reseau",
    start: "2015",
    end: "2017",
    styling: "",
  },
];