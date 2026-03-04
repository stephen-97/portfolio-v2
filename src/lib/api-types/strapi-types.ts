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
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
