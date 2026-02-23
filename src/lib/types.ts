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
  featured?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  responsibilities: string;
  image: string;
}

export interface Achievement {
  title: string;
  date: string;
  location?: string;
  description: string;
  logo?: string;
  certificate?: string;
  icon?: string;
}

export interface Featured {
  company: string;
  tagline: string;
  description: string;
  website: string;
  role: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  medium: string;
  email: string;
  leetcode?: string;
  codeforces?: string;
}

export interface Skills {
  programmingLanguages: string[];
  WebDev: string[];
  cloud?: string[];
  tools?: string[];
  domains?: string[];
}

export interface PortfolioData {
  basicInfo: BasicInfo;
  basicTitles: string[];
  featured?: Featured;
  education: Education[];
  skills: Skills;
  projects: { [key: string]: Project };
  experiences: Experience[];
  achievements?: Achievement[];
  socialLinks?: SocialLinks;
}
