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
