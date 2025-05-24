"use client";

import {useTranslations} from "next-intl";
import {GoChevronRight} from "react-icons/go";
import {IoMdHome} from "react-icons/io";
import Container from "./Container";
import {Paths, useTranslate} from "@/helpers/translate";

type PageHeroSectionProps = {
  title: Paths<IntlMessages>;
  pageName: Paths<IntlMessages>;
};
const PageHeroSection = ({title, pageName}: PageHeroSectionProps) => {
  const t = useTranslations();
  const translate = useTranslate();
  return (
    <section className='relative flex flex-col bg-colors-primary-colors-50'>
      <div className='bg-grid absolute inset-0 h-full' />

      <Container className='relative z-10 pb-[4.5rem] pt-[12rem]'>
        <h1 className='mx-auto mb-1.5rem w-fit text-44 font-bold tracking-[0.00625rem] text-colors-grey-colors-2000'>
          {translate(title, {
            span: (text: string) => <span className='text-colors-primary-colors-600'>{text}</span>,
          })}
        </h1>
        <div className='mt-[2rem] flex items-center gap-2 font-medium'>
          <IoMdHome />
          <span>{t("page_title.home")}</span>
          <GoChevronRight />

          <span>{translate(pageName)}</span>
        </div>
      </Container>
    </section>
  );
};

export default PageHeroSection;
