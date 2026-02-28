import type { BlocksContent } from '@strapi/blocks-react-renderer';

/* ================= ROOT ================= */

export interface HomePage_strapi {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  heroSection: HeroSection_strapi;
  aboutMeSection: AboutMeSection_strapi;
  skillsSection: SkillsSection_strapi;
  projectsSection: ProjectsSection_strapi;
  worksSection: WorksSection_strapi;
}

/* ================= HERO ================= */

export interface HeroSection_strapi {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  statistic: Statistic_strapi[];
}

export interface Statistic_strapi {
  id: number;
  value: string;
  title: string;
}

/* ================= ABOUT ME ================= */

export interface AboutMeSection_strapi {
  id: number;
  description: BlocksContent;
  sectionTitle: SectionTitle_strapi;
}

export interface SectionTitle_strapi {
  id: number;
  title: string;
  icon: any;
}

/* ================= SKILLS ================= */

export interface SkillsSection_strapi {
  id: number;
  skillsBlock: SkillsBlock_strapi[];
}

export interface SkillsBlock_strapi {
  id: number;
  title: string;
  description?: string;
  isSkillGraph?: boolean;
  skill: Skill_strapi[];
  icon_skill?: SkillIcon_strapi;
}

export interface Skill_strapi {
  id: number;
  title: string;
}

export interface SkillIcon_strapi {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/* ================= PROJECTS ================= */

export interface ProjectsSection_strapi {
  id: number;
  projectBlock: ProjectBlock_strapi[];
}

export interface ProjectBlock_strapi {
  id: number;
  title: string;
  description: string;
  skills: Skill_strapi[];
  links: ProjectLink_strapi[];
}

export interface ProjectLink_strapi {
  id: number;
  href: string;
  label: string;
  icon?: ProjectIcon_strapi;
}

export interface ProjectIcon_strapi {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/* ================= WORKS ================= */

export interface WorksSection_strapi {
  id: number;
  workBlock: WorkBlock_strapi[];
}

export interface WorkBlock_strapi {
  id: number;
  agency: string;
  date: string;
  description: BlocksContent;
}
