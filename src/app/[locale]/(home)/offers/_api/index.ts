import { AppHelper } from "@/helpers/appHelper"
import InterceptorHelper from "@/helpers/interceptHelper";
import { IOffersForm } from "../types";

export const apiGetOffers = (offersParams:  IOffersForm, config?: IconfigParams) => {
    const params = AppHelper.urlSearchParams({
        limit: config?.limit || 100,
        page: config?.page || 1,
        country_id: offersParams.country_id,
        city_id: offersParams.city_id,
        area_id: offersParams.area_id,
        category_id: offersParams.category_id,
        search: config?.search || undefined,
        id: config?.id || undefined,
    });

    return InterceptorHelper.intercept<IResponse<IOffer[]>>(`home/offer?${params}`, {
        method: 'GET'});
}