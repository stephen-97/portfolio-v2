import React from 'react';
import cn from 'classnames';
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
  MailSVG,
  CogSVG,
} from '@/src/lib/svg';
import styles from './icon.module.scss';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'npm'
  | 'external'
  | 'accessibility'
  | 'background'
  | 'code'
  | 'plus'
  | 'team'
  | 'mail'
  | 'devops';

type IconProps = {
  name: string;
  className?: string;
};

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const ICON_MAP: Record<IconName, IconComponent> = {
  github: GitHubSVG,
  linkedin: LinkedinSVG,
  npm: NpmSVG,
  external: ExternalLinkSVG,
  accessibility: MagnifyingGlassSVG,
  background: BookSVG,
  code: CodeSVG,
  plus: PlusCircleSVG,
  team: TeamSVG,
  mail: MailSVG,
  devops: CogSVG,
};

const Icon = ({ name, className }: IconProps) => {
  const normalized = name.trim().toLowerCase() as IconName;
  const Component = ICON_MAP[normalized];

  if (!Component) return null;

  return <Component className={cn(styles.icon, className)} />;
};

export default Icon;
