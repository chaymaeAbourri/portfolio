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

export const GREETING_TEXT = "Consultante chez Aruim consulting";
export const GREETING_DESCRIPTION = "Rigoureuse - Empathique - Dynamique - Polyvalente - Sens de l’écoute";

export const EXPERIENCE: TimelineProps[] = [
  {
    key: 1,
    position: "Chef de projet Symfony",
    company: "",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2022",
    end: "2023",
    description: "Chef de projet d'application de gestion des des devis prealable en interaction avec l'Erp Sage chez Arium Consulting: chargée de l'aspect fonctionnel et developpement (etude de l'existant et redaction du cahier des charges, conception, architecture et developpement) ",
    tech: ["Framwork Symfoy", "UML","ERP Sage", "Gestion de projet Agile", "trello"],
  },
  {
    key: 2,
    position: "Chef de projet web",
    company: "",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2022",
    end: "2023",
    description: "Chef de projet d'application de gestion des interventions chez Arium Consulting en interaction avec l'erp Sage : chargée de l'aspect fonctionnel et developpement (etude de l'existant et redaction du cahier des charges, conception, architecture et developpement) ",
    tech: ["VB.net", "UML","ERP Sage","Gestion de projet", "jira"],
  },
  {
    key: 3,
    position: "Responsable Cloud Eperius Storage",
    company: "",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2021",
    end: "2022",
    description: "Mise en place et suivie de la solution cloud Eperius pour la sauvegarde des Backup d'Arium consulting: recherche et comparaison des solutions cloud existantes, construction du dossier d'etudes, et choix de la meilleure solution qualité-prix",
    tech: ["Eperius", "Server Windows"],
  },
  {
    key: 4,
    position: "CONSULTANTE ET DÉVELOPPEUSE CHEZ ARIUM CONSULTING",
    company: "",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2020",
    end: "2021",
    description: "Maintenance et evolution applicative d'une application de Gestion de stock. Correction des bugs et developpement des fonctionnalités manquantes",
    tech: ["VB.net", "Sql Server","Windows server","ERP Sage"],
  },
  {
    key: 5,
    company: "ASTEELFLASH FRANCE",
    position: "Consultante Technique et developpeuse",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2019-04-01",
    end: "2019-07-01",
    description: " Application d'amelioration de la traçabilité process des cartes electroniques d'Arium Consulting: developpement et etude fonctionnelle (etude de l'existant, analyse du besoins, rédaction du cahier des charges à destination de la maîtrise d’oeuvre. La conception et la réalisation de la solution qui répond aux besoins",
    tech: ["C#", "Sql Server","ERP MFG Pro","Gestion de projet"],
  },
  {
    key: 6,
    company: "l'UMI-Branche Informatique",
    position: "Stagaire Developpeuse JEE",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2017-04",
    end: "2017-05",
    description: "Définir les besoins de la scolarité et des professeurs. Composition de l'équipe projet menée par notre chef de projet. Etablir la planification du projet à l'aide de GanttProject qui se base sur le réseau de Gant. Rédiger le cahier des charges, choisir les meilleurs outils,conception et réalisation.",
    tech: ["JAVA/JEE", "EJB","Hibernte","JBoss","Git","AngularJs"],
  },
  {
    key: 7,
    company: "l’OCP-Branche Informatique (Service Desc)",
    position: "Stagaire Developpeuse Php",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2016-07",
    end: "2016-08",
    description: "Realisation d'une application de gestion des incidents informatiques. Technologies: PHP, Symfony, Javascript, HTML5, CSS, jQuery.",
    tech: ["PHP", "Symfony","Javascript","HTML5","CSS","jQuery"],
  },
];
export const KEYWORDS = [
  "Developer",
  "DevOps",
  "Portfolio",
  "Agile"
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
    skill: "Gestion de projet Agile",
    level: 90,
  },
  {
    id: 2,
    skill: "DATA : PowerBI,Tableau",
    level: 80,
  },
  {
    id: 3,
    skill: "Analyse de Données, talend, Table",
    level: 80,
  },
  {
    id: 4,
    skill: "Langage de modélisation de données UML, Merise",
    level: 80,
  },
  {
    id: 5,
    skill: "Dev Backend, Java/JEE, Spring, SQL, PL/SQL, Dot Net",
    level: 85,
  },
  {
    id: 6,
    skill: "Dev front-end reactjs ",
    level: 80,
  },
  {
    id: 7,
    skill: "SGBD Mysql et Oracle",
    level: 80,
  },
  {
    id: 8,
    skill: "Dev Mobile",
    level: 80,
  }
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
    end: "2023",
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
