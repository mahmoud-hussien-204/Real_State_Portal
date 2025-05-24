import InterceptorHelper from "@/helpers/interceptorHelper";
import {IProjectsFiltersForm} from "../_interfaces";

export const apiGetProjectDetails = async (id: string) => {
  return InterceptorHelper.intercept<
    Omit<IResponse<{project: IProject; similar_projects: IOffer[]}>, "meta">
  >(`home/project/${id}`);
};

export const apiGetProjects = async (params: IProjectsFiltersForm) => {
  const searchParams = new URLSearchParams({
    per_page: "100",
    page: "1",
    ...(params.search && {search: params.search}),
    ...(params.country_id && {country_id: params.country_id.toString()}),
    ...(params.city_id && {city_id: params.city_id.toString()}),
    ...(params.developer_id && {developer_id: params.developer_id.toString()}),
    ...(params.unit_type && {unit_type: params.unit_type.toString()}),
    ...(params.category_id && {category_id: params.category_id.toString()}),
    ...(params.sub_category_id && {sub_category_id: params.sub_category_id.toString()}),
    ...(params.price_from && {price_from: params.price_from.toString()}),
    ...(params.price_to && {price_to: params.price_to.toString()}),
  });

  return InterceptorHelper.intercept<IResponse<IOffer[]>>(
    `home/explore?${searchParams.toString()}`
  );
};
