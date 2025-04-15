import { AppHelper } from "@/helpers/appHelper"
import InterceptorHelper from "@/helpers/interceptHelper";
import { IOffersForm } from "../types";

export const apiGetOffers = (offersParams:  IOffersForm, config?: IconfigParams) => {
    const params = AppHelper.urlSearchParams({
      per_page: config?.per_page || 100,
      page: config?.page || 1,
      ...(offersParams.country_id && {country_id: offersParams.country_id}),
      ...(offersParams.city_id && {city_id: offersParams.city_id}),
      ...(offersParams.area_id && {area_id: offersParams.area_id}),
      ...(offersParams.category_id && {category_id: offersParams.category_id}),
      search: config?.search || undefined,
      id: config?.id || undefined,
    });

    return InterceptorHelper.intercept<IResponse<IOffer[]>>(`home/offer?${params}`, {
        method: 'GET'});
}
