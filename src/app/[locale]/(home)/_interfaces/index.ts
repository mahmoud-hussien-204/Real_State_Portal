export type ITopRatedForm = Omit<IBaseFilterForm, "category_id">;

export enum EnumTabs {
  RESIDENTIAL = "residential",
  COMMERCIAL = "commercial",
  LAND = "land",
}

export interface IBlog {
  id: number;
  category: IBlogCategory;
  name_ar: string;
  name_en: string;
  slug: string;
  content_en: string;
  content_ar: string;
  meta: any;
  is_active: number;
  images: IBlogImage[];
}

export interface IBlogCategory {
  id: number;
  name_ar: string;
  name_en: string;
  color: string;
}

export interface IBlogImage {
  url: string;
  properties: IBlogProperties;
}

export interface IBlogProperties {
  alt: string;
}
