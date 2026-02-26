import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer';

export interface HomePage_strapi {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hero: Hero_strapi;
  aboutMe: AboutMe_strapi;
  skills: Skills_strapi;
  projects: Projects_strapi;
  works: Works_strapi;
}

export interface Hero_strapi {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  statisticList: StatisticList_strapi[];
}

export interface StatisticList_strapi {
  id: number;
  value: string;
  title: string;
}

export interface AboutMe_strapi {
  id: number;
  description: BlocksContent;
  sectionTitle: SectionTitle_strapi;
}

export interface Description_strapi {
  type: string;
  children: Children_strapi[];
}

export interface Children_strapi {
  type: string;
  text: string;
}

export interface SectionTitle_strapi {
  id: number;
  title: string;
  icon: any;
}

export interface Skills_strapi {
  id: number;
  skillsBlock: SkillsBlock_strapi[];
}

export interface SkillsBlock_strapi {
  id: number;
  title: string;
  description?: string;
  isSkillGraph?: boolean;
  skillList: SkillList_strapi[];
}

export interface SkillList_strapi {
  id: number;
  title: string;
}

export interface Projects_strapi {
  id: number;
  projectBlocks: ProjectBlock_strapi[];
}

export interface ProjectBlock_strapi {
  id: number;
  title: string;
  description: string;
}

export interface Works_strapi {
  id: number;
  works: Work_strapi[];
}

export interface Work_strapi {
  id: number;
  agency: string;
  date: string;
}
