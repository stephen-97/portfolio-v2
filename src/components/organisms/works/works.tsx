import React from 'react';
import Layout from '@/src/components/atoms/layout/layout';
import Title from '@/src/components/atoms/title/title';
import ContentSlider, {
  ItemSliderProps,
} from '@/src/components/molecules/contentSlider/contentSlider';
import { SectionProps } from 'react-html-props';
import { WorksSection_strapi } from '@/src/lib/api-types/home-page';

type WorksProps = SectionProps & {
  works: WorksSection_strapi;
};
const Works = ({ id, works }: WorksProps) => {
  const itemsForSlider: ItemSliderProps[] = works.workBlock.map((work) => ({
    title: work.agency,
    date: work.date,
    strapiBlockContent: work.description,
  }));

  return (
    <Layout id={id} variant="xs">
      <Title index="04">Where I worked</Title>
      <ContentSlider duration={450} items={itemsForSlider} />
    </Layout>
  );
};

export default Works;
