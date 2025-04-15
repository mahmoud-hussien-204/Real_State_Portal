import {AppHelper} from "@/helpers/appHelper";
import InterceptorHelper from "@/helpers/interceptHelper";
import {IExploreResponse} from "../_interfaces";

export const apiGetExplore = async (exploreParams: IBaseFilterForm, config?: IconfigParams) => {
  const params = AppHelper.urlSearchParams({
    per_page: config?.per_page || 100,
    page: config?.page || 1,
    ...(exploreParams.country_id && {country_id: exploreParams.country_id}),
    ...(exploreParams.city_id && {city_id: exploreParams.city_id}),
    ...(exploreParams.area_id && {area_id: exploreParams.area_id}),
    ...(exploreParams.category_id && {category_id: exploreParams.category_id}),
    id: config?.id || undefined,
  });

  return InterceptorHelper.intercept<IResponse<IExploreResponse[]>>(`home/explore?${params}`);
};
