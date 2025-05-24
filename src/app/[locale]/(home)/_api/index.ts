import {AppHelper} from "@/helpers/appHelper";
import InterceptorHelper from "@/helpers/interceptorHelper";
import {IOffersForm} from "../offers/types";

export const apiGetFooterData = () => {
  return InterceptorHelper.intercept<IResponse<{key: string; value: string}[]>>("home/footer", {
    method: "GET",
  });
};

/** Filters APIs */
export const apiGetCitiesOfCountry = (country_id: number) => {
  return InterceptorHelper.intercept<IResponse<ICity[]>>(`home/filters/cities/${country_id}`);
};

export const apiGetAreasOfCity = (city_id: number) => {
  return InterceptorHelper.intercept<IResponse<IArea[]>>(`home/filters/areas/${city_id}`);
};

export const apiGetCategoryTypes = () => {
  return InterceptorHelper.intercept<IResponse<ICategory[]>>("home/filters/categories");
};

export const apiGetDevelopersFilters = () => {
  return InterceptorHelper.intercept<IResponse<{data: IDeveloper[]}>>(
    "home/filters/multi/developers"
  );
};

export const apiGetUnitsFilters = () => {
  return InterceptorHelper.intercept<IResponse<{data: IUnit[]}>>("home/filters/multi/units");
};

/** Projects APIs */
export const apiGetPopularProjects = (params?: IOffersForm) => {
  const {country_id, city_id, area_id} = params || {};
  const paramsString = AppHelper.urlSearchParams({
    country_id,
    city_id,
    area_id,
    per_page: 100,
  });
  return InterceptorHelper.intercept<IResponse<IOffer[]>>(`home/popular?${paramsString}`);
};

export const apiGetFeaturedProjects = (params?: IOffersForm) => {
  const {country_id, city_id, area_id} = params || {};
  const paramsString = AppHelper.urlSearchParams({
    country_id,
    city_id,
    area_id,
    per_page: 100,
  });
  return InterceptorHelper.intercept<IResponse<IOffer[]>>(`home/featured?${paramsString}`);
};

export const apiGetGalleryProjects = (params?: IOffersForm) => {
  const {country_id, city_id, area_id} = params || {};
  const paramsString = AppHelper.urlSearchParams({
    country_id,
    city_id,
    area_id,
    per_page: 100,
  });
  return InterceptorHelper.intercept<IResponse<IOffer[]>>(`home/project/gallery?${paramsString}`);
};

/** Banners APIs */
export const apiGetHomeBanners = () => {
  return InterceptorHelper.intercept<IResponse<Record<string, IBanner[]>>>(
    "home/banners/home_page"
  );
};

export const apiGetProjectDetailsBanners = () => {
  return InterceptorHelper.intercept<IResponse<Record<string, IBanner[]>>>(
    "home/banners/project_details"
  );
};

export const apiGetProjectsBanners = () => {
  return InterceptorHelper.intercept<IResponse<Record<string, IBanner[]>>>("home/banners/products");
};

export const apiGetOffersPageBanners = () => {
  return InterceptorHelper.intercept<IResponse<Record<string, IBanner[]>>>("home/banners/offers");
};

export const apiGetExplorePageBanners = () => {
  return InterceptorHelper.intercept<IResponse<Record<string, IBanner[]>>>(
    "home/banners/explore_page"
  );
};

export const apiGetContactUsBanners = () => {
  return InterceptorHelper.intercept<IResponse<Record<string, IBanner[]>>>(
    "home/banners/contact_us"
  );
};
