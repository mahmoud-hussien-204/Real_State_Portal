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

type IconfigParams = {
  page?: number;
  per_page?: number;
  search?: string;
  id?: string;
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

interface ICity {
  id: number;
  name_ar: string;
  name_en: string;
  content: string;
  country_id: number;
  color: string;
  is_active: boolean;
}
interface IArea {
  id: number;
  name_ar: string;
  name_en: string;
  content: string;
  city_id: number;
  color: string;
  is_active: boolean;
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
  sub: {
    id: string;
    name_ar: string;
    name_en: string;
    color: string;
    parent_id: number;
  }[];
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

interface IOffer {
  id: number;
  name_ar: string;
  name_en: string;
  sale_status: string;
  status: string;
  slug: string;
  name_developer_ar: string;
  name_developer_en: string;
  phone: string;
  starting_price: string;
  images: string;
  country: ICountry;
  offer: string;
  city: ICity;
  area: IArea;
}

interface IProject {
  id: number;
  name_ar: string;
  name_en: string;
  slug: string;
  category: ICategory;
  about_developer: IAboutDeveloper;
  card_developer: ICardDeveloper;
  development_achievements: IDevelopmentAchievements;
  about_project: IAboutProject;
  project_key_position: IProjectKeyPosition[];
  project_view: string;
  project_plan: IProjectPlan[];
  units_layouts: any;
  amenities: IAmenity[];
  payment_plan: IPaymentPlan;
  constructed: string;
  total_area: string;
  service_charge: number;
  project_brochure: string;
  main_service_providers: IMainServiceProviders;
  discount_policy: IDiscountPolicy;
  purchasing_procedures: IPurchasingProcedures;
  visa_based_investment: IVisaBasedInvestment;
  project_documentation: IProjectDocumentation[];
  bank_account_details: IBankAccountDetails;
  google_map_location: IGoogleMapLocation;
  starting_price: string;
  offer: any;
  views_count: number;
  sale_status: string;
  furniture: any;
  project_type: string;
  user_id: number;
  is_active: number;
  images: string[];
}

interface IAboutDeveloper {
  about_en: string;
  about_ar: string;
}

interface ICardDeveloper {
  name_ar: string;
  name_en: string;
  phone: string;
  website: string;
  address: string;
}

interface IDevelopmentAchievements {
  project_number: number;
  project_ongoing: number;
  project_delivered: number;
}

interface IAboutProject {
  about_en: string;
  about_ar: string;
  units: number;
  project_status: string;
  expected_completion_date: string;
  avail: string;
}

interface IProjectKeyPosition {
  id: number;
  name_ar: string;
  name_en: string;
  color: string;
  pivot: IPivot;
}

interface IPivot {
  project_id: number;
  down_town_id: number;
  min: number;
}

interface IProjectPlan {
  url: string;
  properties: IProperties;
}

interface IProperties {
  name_en: string;
  name_ar: string;
}

interface IAmenity {
  id: number;
  name_ar: string;
  name_en: string;
  color: string;
  pivot: IPivot2;
}

interface IPivot2 {
  project_id: number;
  amenity_id: number;
}

interface IPaymentPlan {
  down_payment: number;
  during_construction: number;
  on_handover: number;
}

interface IMainServiceProviders {
  gas: IGas;
  water: IWater;
  electric: IElectric;
  chiller: IChiller;
}

interface IGas {
  id: number;
  name_ar: string;
  name_en: string;
  color: string;
}

interface IWater {
  id: number;
  name_ar: string;
  name_en: string;
  color: string;
}

interface IElectric {
  id: number;
  name_ar: string;
  name_en: string;
  color: string;
}

interface IChiller {
  id: number;
  name_ar: string;
  name_en: string;
  color: string;
}

interface IDiscountPolicy {
  full_cash: number;
  payment_plan: number;
}

interface IPurchasingProcedures {
  booking_account: number;
  down_Payment: number;
  registration_fees: number;
  admin_Fees: number;
  extra_fees: number;
  furniture_package: string;
}

interface IVisaBasedInvestment {
  investor_visa: string[];
  golden_visa: string[];
}

interface IProjectDocumentation {
  url: string;
  properties: IProperties2;
}

interface IProperties2 {
  name_en: string;
  name_ar: string;
}

interface IBankAccountDetails {
  bank_name: string;
  bank_name_account: string;
  account_number: number;
  iban: string;
  swift_code: string;
  routing_number: string;
}

interface IGoogleMapLocation {
  latitude: number;
  longitude: number;
  country: ICountry;
  city: ICity;
  area: IArea;
}

interface IBaseFilterForm {
  country_id?: number;
  city_id?: number;
  area_id?: number;
  category_id?: number;
}

interface IBanner {
  banner: string;
  sort: number;
  section: number;
}
