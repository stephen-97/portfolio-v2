import React from 'react';
import Layout from '@/src/components/atoms/layout/layout';
import Title from '@/src/components/atoms/title/title';
import ContentSlider, {
  WorkItem,
} from '@/src/components/molecules/contentSlider/contentSlider';

type WorkKey = 'actency-coexya' | 'actency' | 'gendarmerie';

const ITEMS: WorkItem<WorkKey>[] = [
  {
    key: 'actency-coexya',
    label: 'Actency - Coexya',
    title: 'Actency × Coexya',
    period: '2022 — 2023',
    highlights: [
      'Développement de features front complexes',
      'Intégration pixel-perfect depuis Figma',
      'Maintien et évolution d’une base scalable',
    ],
  },
  {
    key: 'actency',
    label: 'Actency',
    title: 'Actency',
    period: '2021 — 2022',
    highlights: [
      'Architecture UI modulaire',
      'Création de composants réutilisables',
      'Optimisation performance & DX',
    ],
  },
  {
    key: 'gendarmerie',
    label: 'Gendarmerie',
    title: 'Gendarmerie',
    period: '2020 — 2021',
    highlights: [
      'Respect des standards d’accessibilité',
      'Implémentation robuste orientée long-terme',
      'Rédaction de spécifications techniques',
    ],
  },
];

const Works = () => {
  return (
    <Layout variant="xs">
      <Title index="04">Where I worked</Title>
      <ContentSlider duration={450} items={ITEMS} />
    </Layout>
  );
};

export default Works;
