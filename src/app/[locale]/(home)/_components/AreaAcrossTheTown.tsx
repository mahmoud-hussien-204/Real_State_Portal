"use client";

import AreaCard from "@/components/AreaCard";

import Container from "@/components/Container";

import SectionTitle from "@/components/SectionTitle";

import {fakeDataAreas} from "@/constants";

import {AppHelper} from "@/helpers/appHelper";

import {useTranslations} from "next-intl";

import {useState} from "react";

enum EnumTab {
  UAE = "uae",
  GEORGIA = "Georgia",
}

const AreaAcrossTheTown = () => {
  const t = useTranslations();

  const [tab, setTab] = useState<EnumTab>(EnumTab.UAE);

  return (
    <section className='bg-grid !bg-[#1A1A1A] py-4.5rem'>
      <Container>
        <SectionTitle
          subtitle={t("home.popular_cities")}
          title={t.rich("home.area_across_the_town", {
            span: (text) => <span>{text}</span>,
          })}
          className='text-white'
        />

        <div className='mx-auto mb-2.25rem flex h-4rem w-full max-w-[23.375rem] items-center justify-between gap-0.75rem rounded-full bg-[#3C3C3C]'>
          <button
            type='button'
            onClick={() => setTab(EnumTab.UAE)}
            className={AppHelper.className(
              "rounded-inherit h-full flex-1 font-medium text-[#E9E9E9] transition-colors duration-200 font-22 hover:bg-colors-primary-colors-700",
              {
                "bg-colors-primary-colors-700 font-bold text-white": tab === EnumTab.UAE,
              }
            )}
          >
            {t("home.uae")}
          </button>
          <button
            type='button'
            onClick={() => setTab(EnumTab.GEORGIA)}
            className={AppHelper.className(
              "rounded-inherit h-full flex-1 font-medium text-[#E9E9E9] transition-colors duration-200 font-22 hover:bg-colors-primary-colors-700",
              {
                "bg-colors-primary-colors-700 font-bold text-white": tab === EnumTab.GEORGIA,
              }
            )}
          >
            {t("home.GEORGIA")}
          </button>
        </div>

        <div className='grid grid-cols-1 gap-1.25rem md:grid-cols-2 lg:grid-cols-3'>
          <div className='col-span-1 lg:col-span-2'>
            <AreaCard data={fakeDataAreas[0]} />
          </div>
          <div className='col-span-1'>
            <AreaCard data={fakeDataAreas[1]} />
          </div>
          <div className='col-span-1'>
            <AreaCard data={fakeDataAreas[2]} />
          </div>
          <div className='lg:col-span-2'>
            <AreaCard data={fakeDataAreas[3]} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AreaAcrossTheTown;
