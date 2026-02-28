/* ================= NAVIGATION ================= */

export interface Navigation_strapi {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  links: Link_strapi[];
  mediaLinks: MediaLink_strapi[];
}

/* ================= BASIC LINKS ================= */

export interface Link_strapi {
  id: number;
  href: string;
  title: string;
}

/* ================= MEDIA LINKS ================= */

export interface MediaLink_strapi {
  id: number;
  href: string;
  label: string;
  icon: Icon_strapi;
}

/* ================= ICON ================= */

export interface Icon_strapi {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
