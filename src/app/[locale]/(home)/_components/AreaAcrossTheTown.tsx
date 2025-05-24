"use client";

import AreaCard from "@/components/AreaCard";

import Container from "@/components/Container";

import SectionTitle from "@/components/SectionTitle";

import {AppHelper} from "@/helpers/appHelper";
import useAppProvider from "@/hooks/useAppProvider";
import useQuery from "@/hooks/useQuery";

import {useTranslations} from "next-intl";

import {useMemo, useState} from "react";
import {apiGetGalleryProjects} from "../_api";
import Spinner from "@/components/ui/spinner";

const AreaAcrossTheTown = () => {
  const t = useTranslations();
  const {countries} = useAppProvider();
  const uaeData = useMemo(
    () => countries.find((c) => c.name_en === "united arab emirates"),
    [countries]
  );

  const georgiaData = useMemo(() => countries.find((c) => c.name_en === "georgia"), [countries]);

  const [tab, setTab] = useState(uaeData?.id || 3);

  const {data, isFetching} = useQuery({
    queryKey: ["gallery", tab],
    queryFn: () => apiGetGalleryProjects({country_id: tab}),
  });

  const projects = data?.data || [];
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
            onClick={() => setTab(uaeData?.id || 3)}
            className={AppHelper.className(
              "rounded-inherit h-full flex-1 font-medium text-[#E9E9E9] transition-colors duration-200 font-22 hover:bg-colors-primary-colors-700",
              {
                "bg-colors-primary-colors-700 font-bold text-white": tab === uaeData?.id,
              }
            )}
          >
            {t("home.uae")}
          </button>
          <button
            type='button'
            onClick={() => setTab(georgiaData?.id || 78)}
            className={AppHelper.className(
              "rounded-inherit h-full flex-1 font-medium text-[#E9E9E9] transition-colors duration-200 font-22 hover:bg-colors-primary-colors-700",
              {
                "bg-colors-primary-colors-700 font-bold text-white": tab === georgiaData?.id,
              }
            )}
          >
            {t("home.GEORGIA")}
          </button>
        </div>

        <div className='grid grid-cols-1 gap-1.25rem md:grid-cols-2 lg:grid-cols-3'>
          {isFetching ? (
            <div className='col-span-full mx-auto'>
              <Spinner />
            </div>
          ) : projects.length === 0 ? (
            <div className='col-span-full mx-auto text-center text-white'>
              <h2 className='text-3xl font-bold text-colors-grey-colors-900'>
                {t("home.no_projects_found")}
              </h2>
            </div>
          ) : (
            projects.map((project, index) => (
              <div
                key={`gallery-${project.id}`}
                className={`col-span-1 ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <AreaCard
                  count={project.id}
                  id={project.id}
                  title={project.name_en}
                  image={project.images[0]}
                />
              </div>
            ))
          )}
        </div>
      </Container>
    </section>
  );
};

export default AreaAcrossTheTown;
