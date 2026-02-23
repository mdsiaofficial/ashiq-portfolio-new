export interface BasicInfo {
  nickname: string;
  fullName: string;
  email: string;
  about: string;
}

export interface Education {
  uni: string;
  program: string;
  year: string;
  result?: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  link: string;
  github: string;
  techStack: string[];
  image: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  responsibilities: string;
  image: string;
}

export interface Contest {
  title: string;
  date: string;
  location: string;
  description: string;
  logo: string;
  certificate: string;
}

export interface Skills {
  programmingLanguages: string[];
  WebDev: string[];
  "developmentTools:": string[];
  "coreCompetencies:": string[];
  operatingSystems: string[];
  problemSolvingPlatforms: string[];
}

export interface PortfolioData {
  basicInfo: BasicInfo;
  basicTitles: string[];
  education: Education[];
  skills: Skills;
  projects: { [key: string]: Project };
  experiences: Experience[];
  contests: Contest[];
}
