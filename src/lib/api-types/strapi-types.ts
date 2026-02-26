export interface Navigation_strapi {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  links: Link_strapi[];
  mediaLinks: MediaLink_strapi[];
}

export interface Link_strapi {
  id: number;
  href: string;
  title: string;
}

export interface MediaLink_strapi {
  id: number;
  href: string;
  label: string;
  icon: Icon_strapi;
}

export interface Icon_strapi {
  id: number;
  documentId: string;
  title: string;
  SVG: Svg_strapi[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Svg_strapi {
  type: string;
  children: Children_strapi[];
}

export interface Children_strapi {
  type: string;
  text: string;
}
