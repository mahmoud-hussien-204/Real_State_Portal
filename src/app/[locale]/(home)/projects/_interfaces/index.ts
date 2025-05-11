export interface IProjectsFiltersForm {
  search?: string;
  country_ids?: number[];
  city_ids?: number[];
  developer_ids?: number[];
  unit_types?: number[];
  category_ids?: number[];
  price_from?: number;
  price_to?: number;
}
