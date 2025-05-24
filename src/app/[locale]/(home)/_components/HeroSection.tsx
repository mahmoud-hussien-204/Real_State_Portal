"use client";

import Image from "next/image";

import ImageHero from "@/app/assets/hero.png";

import IconHome from "@/icons/IconHome";

import Container from "@/components/Container";

import {useTranslations} from "next-intl";

import IconResidential from "@/icons/IconResidential";

import {AppHelper} from "@/helpers/appHelper";

import {useState} from "react";

import IconLand from "@/icons/IconLand";

import IconCommercial from "@/icons/IconCommercial";

import FilterHeroSection from "./FilterHeroSection";
import {FormProvider, useForm} from "react-hook-form";
import useCategories from "../hooks/useCategories";
import {useRouter} from "next/navigation";

export enum EnumTabs {
  RESIDENTIAL = "residential",
  COMMERCIAL = "commercial",
  LAND = "land",
}

const HeroSection = () => {
  // routing
  const router = useRouter();
  const t = useTranslations();
  const {categories} = useCategories();
  const [tab, setTab] = useState<EnumTabs>(EnumTabs.RESIDENTIAL);

  const form = useForm<IBaseFilterForm>({
    defaultValues: {
      country_id: undefined,
      city_id: undefined,
      area_id: undefined,
      category_id: undefined,
    },
  });

  function handleCategoryChange(value: EnumTabs) {
    const category = categories.find(
      (category) => category.name_en.toLowerCase() === value.toLowerCase()
    );
    form.setValue("category_id", category?.id);
    setTab(value);
  }

  function handleSubmit() {
    // redirect to projects page with appending the query params
    const params = new URLSearchParams();

    form.getValues("country_id")?.toString() &&
      params.append("country_id", form.getValues("country_id")?.toString() || "");
    form.getValues("city_id")?.toString() &&
      params.append("city_id", form.getValues("city_id")?.toString() || "");
    form.getValues("area_id")?.toString() &&
      params.append("area_id", form.getValues("area_id")?.toString() || "");
    form.getValues("category_id")?.toString() &&
      params.append("category_id", form.getValues("category_id")?.toString() || "");

    router.push(`en/projects?${params.toString()}`);
  }

  return (
    <FormProvider {...form}>
      <section className='flex flex-col' onSubmit={form.handleSubmit(handleSubmit)}>
        <form>
          <div className='bg-grid bg-half-gradient flex h-full flex-1 items-end pt-9rem'>
            <Container className='relative z-10'>
              <div className='grid h-full items-end gap-0.5rem xl:grid-cols-2'>
                <div className='flex h-full items-center justify-center text-center xl:justify-start xl:text-start'>
                  <div>
                    <span className='mb-1.88rem inline-flex h-[4.4375rem] items-center justify-center gap-0.5rem rounded-full bg-colors-primary-colors-50 px-1.75rem text-18 font-bold text-colors-grey-colors-2000'>
                      <IconHome />
                      Welcome to{" "}
                      <span className='text-colors-primary-colors-600'>Real Estate Portal!</span>
                      👋
                    </span>
                    <h1 className='mb-1.5rem text-44 font-bold leading-[4.125rem] tracking-[0.00625rem] text-colors-grey-colors-1000'>
                      {t.rich("home.hero_title", {
                        span: (text) => (
                          <>
                            <br />
                            <span className='text-colors-primary-colors-600'>{text}</span>
                          </>
                        ),
                      })}
                    </h1>
                    <p className='mb-4.5rem text-20 font-semibold text-colors-grey-colors-800'>
                      {t("home.hero_description")}
                    </p>
                    <div className='flex justify-center rounded-se-[1.75rem] rounded-ss-[1.75rem] bg-white px-1.75rem py-1rem'>
                      <div className='flex h-4rem items-center gap-0.75rem rounded-full bg-[#F3F3F3]'>
                        <TabButton
                          activeTab={tab}
                          onClick={() => handleCategoryChange(EnumTabs.RESIDENTIAL)}
                          tab={EnumTabs.RESIDENTIAL}
                          icon={<IconResidential />}
                          title={t("home.residental")}
                        />

                        <TabButton
                          activeTab={tab}
                          onClick={() => handleCategoryChange(EnumTabs.COMMERCIAL)}
                          tab={EnumTabs.COMMERCIAL}
                          icon={<IconCommercial />}
                          title={t("home.commercial")}
                        />

                        <TabButton
                          activeTab={tab}
                          onClick={() => handleCategoryChange(EnumTabs.LAND)}
                          tab={EnumTabs.LAND}
                          icon={<IconLand />}
                          title={t("home.land")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='hidden justify-end xl:flex'>
                  <Image src={ImageHero} alt='hero' className='object-cover' priority={true} />
                </div>
              </div>
            </Container>
          </div>
          <div className='h-[10.75rem] bg-white'>
            <FilterHeroSection />
          </div>
        </form>
      </section>
    </FormProvider>
  );
};

export default HeroSection;

const TabButton = ({
  activeTab,
  tab,
  icon,
  title,
  onClick,
}: {
  activeTab: EnumTabs;
  tab: EnumTabs;
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}) => (
  <button
    type='button'
    onClick={onClick}
    className={AppHelper.className(
      "rounded-inherit text-colors-grey-colors-600 group flex h-full items-center gap-0.5rem px-2rem font-medium font-16 hover:bg-colors-primary-colors-600 hover:text-white",
      {
        "bg-colors-primary-colors-600 font-bold text-white": tab === activeTab,
      }
    )}
  >
    {icon}
    {title}
  </button>
);
