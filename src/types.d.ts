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

interface IError extends Error {
  message: string;
}

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
