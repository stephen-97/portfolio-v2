import React from 'react';
import Hero from '@/src/components/organisms/hero/hero';
import Skills from '@/src/components/organisms/skills/skills';
import Projects from '@/src/components/organisms/projects/projects';
import AboutMe from '@/src/components/organisms/aboutMe/aboutMe';
import Works from '@/src/components/organisms/works/works';
import { HomePage_strapi } from '@/src/lib/api-types/home-page';
import { Link_strapi } from '@/src/lib/api-types/strapi-types';
import { ReactNode } from 'react';

type SectionId = 'about' | 'skills' | 'projects' | 'works';

type HomeContentProps = {
  homePage: HomePage_strapi;
  quickLinks: Link_strapi[];
};

const SECTION_COMPONENTS: Record<
  SectionId,
  (homePage: HomePage_strapi, id: string) => ReactNode
> = {
  about: (homePage, id) => <AboutMe id={id} aboutMeData={homePage.aboutMe} />,
  skills: (homePage, id) => <Skills id={id} skills={homePage.skills} />,
  projects: (homePage, id) => <Projects id={id} projects={homePage.projects} />,
  works: (homePage, id) => <Works id={id} works={homePage.works} />,
};

const HomeContent = ({ homePage, quickLinks }: HomeContentProps) => {
  return (
    <>
      <Hero heroData={homePage.hero} />

      {quickLinks.map((link) => {
        const sectionId = link.href.replace('#', '') as SectionId;
        const render = SECTION_COMPONENTS[sectionId];
        if (!render) return null;

        return (
          <React.Fragment key={sectionId}>
            {render(homePage, sectionId)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default HomeContent;
