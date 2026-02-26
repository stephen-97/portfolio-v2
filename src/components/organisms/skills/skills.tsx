import React from 'react';
import styles from './skills.module.scss';
import Layout from '@/src/components/atoms/layout/layout';
import BackgroundBlocks from '@/src/components/atoms/backgrounds/backgroundBlocks/backgroundBlocks';
import { SkillsGraphSVG2 } from '@/src/lib/svg';
import Title from '@/src/components/atoms/title/title';
import { SectionProps } from 'react-html-props';
import { Skills_strapi } from '@/src/lib/api-types/home-page';
import SkillBlock from '@/src/components/molecules/skillBlock/skillBlock';

type SkillsProps = SectionProps & {
  skills: Skills_strapi;
};

const Services = ({ id, skills }: SkillsProps) => {
  const { skillsBlock } = skills;

  if (!skillsBlock?.length) return null;

  const leftBlock = skillsBlock[0];
  const rightBlocks = skillsBlock.slice(1, 5);
  const bottomBlocks = skillsBlock.slice(5);

  return (
    <Layout
      variant="sm"
      backgroundChildren={<BackgroundBlocks />}
      className={styles.service}
      id={id}
    >
      <Title index="02">Skills</Title>

      <div className={styles.grid}>
        <div className={styles.left}>
          {leftBlock && <SkillBlock {...leftBlock} />}
        </div>

        <ul className={styles.right}>
          {rightBlocks.map((block) => (
            <li key={block.id}>
              <SkillBlock {...block} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

/**
 * <div className={styles.bottom}>
 *           {bottomBlocks.map((block) => (
 *             <SkillBlock
 *               key={block.id}
 *               {...block}
 *               color="white"
 *               graphSVG={<SkillsGraphSVG2 />}
 *               titlePosition="center"
 *               svg={<></>}
 *             />
 *           ))}
 *         </div>
 */
export default Services;
