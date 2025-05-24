export type ITopRatedForm = Omit<IBaseFilterForm, "category_id">;

export enum EnumTabs {
  RESIDENTIAL = "residential",
  COMMERCIAL = "commercial",
  LAND = "land",
}
