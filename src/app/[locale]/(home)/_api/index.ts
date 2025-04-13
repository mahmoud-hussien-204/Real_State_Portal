import {AppHelper} from "@/helpers/appHelper";
import InterceptorHelper from "@/helpers/interceptorHelper";
import {IOffersForm} from "../offers/types";

export const apiGetFooterData = () => {
  return InterceptorHelper.intercept<IResponse<{key: string; value: string}[]>>("home/footer", {
    method: "GET",
  });
};

export const apiGetCitiesOfCountry = (country_id: number) => {
  return InterceptorHelper.intercept<IResponse<ICity[]>>(`home/filters/cities/${country_id}`);
};

export const apiGetAreasOfCity = (city_id: number) => {
  return InterceptorHelper.intercept<IResponse<IArea[]>>(`home/filters/areas/${city_id}`);
};

export const apiGetCategoryTypes = () => {
  return InterceptorHelper.intercept<IResponse<ICategory[]>>("home/filters/categories");
};

export const apiGetTopRatedProjects = (params?: IOffersForm) => {
  const {country_id, city_id, category_id} = params || {};
  const paramsString = AppHelper.urlSearchParams({
    country_id,
    city_id,
    category_id,
    per_page: 100,
  });
  return InterceptorHelper.intercept<IResponse<IOffer[]>>(`home/popular?${paramsString}`);
};
