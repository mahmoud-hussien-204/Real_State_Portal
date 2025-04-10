type ILocalesArray = typeof import("@/constants").locales;

type ILocales = ILocalesArray[number];

type IEnMessages = typeof import("../messages/en.json");

type IArMessages = typeof import("../messages/ar.json");

declare interface IntlMessages extends IEnMessages, IArMessages {}

interface ISVGProps {
  svgProps?: import("react").SVGProps<SVGSVGElement>;
  pathProps?: import("react").SVGProps<SVGPathElement>;
}

type ISwiperRef = import("swiper").Swiper;

interface ILoginForm {
  username: string;
  password: string;
}

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  type: "investor" | "agent";
  country_id: number;
  phone: string;
}
type IPagination = {
  meta: {
    per_page: number;
    total: number;
    current_page: number;
    last_page: number;
    from: number | null;
    to: number | null;
    last_page: number;
    sortBy: [string, "ASC" | "DESC"][];
  };
};

interface IResponse<T> extends IPagination {
  data: T;
}

interface IError extends Error {
  message: string;
  statusCode: number;
}


type IQueryParams = {
  page?: string | number;
  limit?: string | number;
  search?: string;
};

interface ICountry {
  id: number;
  name_ar: string;
  name_en: string;
  iso: string;
  iso3: string;
  code: string;
  content: string;
  color: string;
  is_active: string;
}

interface IUser {
  accessToken: string;
  email: string;
  id: number;
  name: string;
  phone: string;
}

interface ICategory {
  id: number;
  name_ar: string;
  name_en: string;
  content: string;
  country_id: string | null;
  color: string;
  is_active: boolean;
}

interface IUnit {
  id: number;
  name_ar: string;
  name_en: string;
  color: string;
}

interface IAmenity {
  id: number;
  name_ar: string;
  name_en: string;
  color: string;
}

interface IDeveloper {
  id: number;
  name_ar: string;
  name_en: string;
  color: string;
}

interface IDownTown {
  id: number;
  name_ar: string;
  name_en: string;
  color: string;
}
