import React from 'react';
import {
  GitHubSVG,
  NpmSVG,
  ExternalLinkSVG,
  LinkedinSVG,
  MagnifyingGlassSVG,
  CodeSVG,
  BookSVG,
  PlusCircleSVG,
  TeamSVG,
} from '@/src/lib/svg';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'npm'
  | 'external'
  | 'accessibility'
  | 'background'
  | 'code'
  | 'plus'
  | 'team';

type IconProps = {
  name: string;
};

const ICON_MAP: Record<IconName, React.ReactNode> = {
  github: <GitHubSVG />,
  linkedin: <LinkedinSVG />,
  npm: <NpmSVG />,
  external: <ExternalLinkSVG />,
  accessibility: <MagnifyingGlassSVG />,
  background: <BookSVG />,
  code: <CodeSVG />,
  plus: <PlusCircleSVG />,
  team: <TeamSVG />,
};

const Icon = ({ name }: IconProps) => {
  const normalized = name.trim().toLowerCase() as IconName;
  const icon = ICON_MAP[normalized];

  if (!icon) return null;

  return <>{icon}</>;
};

export default Icon;
