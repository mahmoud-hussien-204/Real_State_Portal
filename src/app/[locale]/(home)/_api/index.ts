import InterceptorHelper from "@/helpers/interceptorHelper"

export const apiGetFooterData = () => {
    return InterceptorHelper.intercept<IResponse<{key: string; value: string}[]>>('/home/footer', {method: 'GET'});
}