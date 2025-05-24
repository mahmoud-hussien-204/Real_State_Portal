import InterceptorHelper from "./helpers/interceptorHelper";

interface IAuthResponse {
  data: {user: IUser};
}

export const apiLogin = (body: ILoginForm) =>
  InterceptorHelper.intercept<IAuthResponse>("auth/login", {
    method: "POST",
    body: JSON.stringify(body),
  });

export const apiRegister = (body: IRegisterForm) =>
  InterceptorHelper.intercept<IAuthResponse>("auth/register", {
    method: "POST",
    body: JSON.stringify(body),
  });

export const apiGetCountries = () =>
  InterceptorHelper.intercept<{data: ICountry[]}>("home/filters/countries?per_page=244");
