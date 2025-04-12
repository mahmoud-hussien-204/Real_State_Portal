import InterceptorHelper from "@/helpers/interceptorHelper"

export const apiGetFooterData = () => {
    return InterceptorHelper.intercept<IResponse<{key: string; value: string}[]>>('home/footer', {method: 'GET'});
}

export const apiGetCitiesOfCountry = (country_id: number) => {
    return InterceptorHelper.intercept<IResponse<ICity[]>>(`home/filters/cities/${country_id}`);
}

export const apiGetAreasOfCity = (city_id: number) => {
    return InterceptorHelper.intercept<IResponse<IArea[]>>(`home/filters/areas/${city_id}`);
}

export const apiGetCategoryTypes = () => {
    return InterceptorHelper.intercept<IResponse<ICategory[]>>('home/filters/categories');
}
