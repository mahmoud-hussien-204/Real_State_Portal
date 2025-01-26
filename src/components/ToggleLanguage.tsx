"use client";

import {useLocale} from "next-intl";

import Image from "next/image";

import {usePathname} from "@/i18n/routing";

import LinkButton from "./LinkButton";

const reversedLanguages = {
  en: {
    title: "عربى",
    link: "/ar",
    locale: "ar",
    flag: "/flag_ar.svg",
  },
  ar: {
    title: "English",
    link: "/en",
    locale: "en",
    flag: "/flag_ar.svg",
  },
};

const ToggleLanguage = () => {
  const locale = useLocale();

  const pathname = usePathname();

  return (
    <LinkButton
      className='rounded-0.625rem border-colors-neutral-250 h-3.5rem border font-semibold leading-1.25rem font-14'
      variant='neutral'
      href={pathname}
      locale={reversedLanguages[locale as ILocales].locale}
    >
      {reversedLanguages[locale as ILocales].title}
      <Image
        src={reversedLanguages[locale as ILocales].flag}
        alt='flag'
        width={42}
        height={28}
        className='rounded-0.5rem'
      />
    </LinkButton>
  );
};

export default ToggleLanguage;
