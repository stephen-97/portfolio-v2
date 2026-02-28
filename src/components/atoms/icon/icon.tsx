import React from 'react';
import { GitHubSVG, LinkedinSVG, NpmSVG, ExternalLinkSVG } from '@/src/lib/svg';

export type IconName = 'github' | 'linkedin' | 'npm' | 'external';

type IconProps = {
  name: string;
  className?: string;
};

const ICON_MAP: Record<IconName, React.ReactNode> = {
  github: <GitHubSVG />,
  linkedin: <LinkedinSVG />,
  npm: <NpmSVG />,
  external: <ExternalLinkSVG />,
};

const Icon = ({ name, className }: IconProps) => {
  const normalized = name.trim().toLowerCase() as IconName;
  const icon = ICON_MAP[normalized];

  if (!icon) return null;

  return <>{icon}</>;
};

export default Icon;
