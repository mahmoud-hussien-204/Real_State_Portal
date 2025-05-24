"use client";

import Swiper, {useSwiperRef} from "@/components/Swiper";

import {Grid, Navigation} from "swiper/modules";

import Container from "@/components/Container";

import SectionTitle from "@/components/SectionTitle";

import {useTranslations} from "next-intl";

import ProjectItem from "@/components/ProjectItem";

import SwiperNavigation from "@/components/SwiperNavigation";

import useIsSmallScreen from "@/hooks/useIsSmallScreen";

import ExploreMoreButton from "@/components/ExploreMoreButton";

import "swiper/css/grid";
import useQuery from "@/hooks/useQuery";
import {apiGetFeaturedProjects} from "../_api";
import Spinner from "@/components/ui/spinner";
import FilterTopRatedSection from "./FilterTopRatedSection";
import {FormProvider, useForm} from "react-hook-form";
import {ITopRatedForm} from "../_interfaces";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
  country_id: Yup.number().min(1, "country does not exist"),
  city_id: Yup.number().min(1, "city does not exist"),
  area_id: Yup.number().min(1, "area does not exist"),
});

const FeaturedProjects = () => {
  const t = useTranslations();
  const {refSwiper, setRefSwiper} = useSwiperRef();
  const form = useForm<ITopRatedForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      country_id: 0,
      city_id: undefined,
      area_id: undefined,
    },
  });
  const isSmallScreen = useIsSmallScreen();

  const {
    data,
    isFetching: isFetchingProjects,
    refetch,
  } = useQuery({
    queryKey: ["featured-projects"],
    queryFn: () =>
      apiGetFeaturedProjects({
        country_id: form.getValues("country_id"),
        city_id: form.getValues("city_id"),
        area_id: form.getValues("area_id"),
      }),
  });

  const projects = data?.data || [];

  return (
    <FormProvider {...form}>
      <section className='bg-grid bg-full-gradient py-4.5rem'>
        <Container>
          <SectionTitle
            subtitle={t("home.featured_projects")}
            title={t.rich("home.top_rated_projects", {
              span: (text) => <span>{text}</span>,
            })}
          />
          <FilterTopRatedSection refetch={refetch} />

          {isFetchingProjects ? (
            <Spinner />
          ) : projects.length === 0 ? (
            <div>
              <h2 className='text-center text-3xl font-bold text-colors-grey-colors-900'>
                {t("home.no_top_rated_projects")}
              </h2>
            </div>
          ) : (
            <div className=''>
              <Swiper
                className='xl:h-[40.5rem]'
                options={{
                  slidesPerView: 1,
                  spaceBetween: 24,
                  grabCursor: true,
                  modules: [Grid, Navigation],
                  navigation: true,
                  onSwiper: setRefSwiper,
                  onSlideChange: setRefSwiper,
                  breakpoints: {
                    768: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                    },
                    1280: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                      grid: {
                        rows: 2,
                      },
                    },
                  },
                }}
                slides={projects}
                render={(project) => (
                  <ProjectItem
                    key={project.id}
                    direction={isSmallScreen ? "vertical" : "horizontal"}
                    project={{
                      id: project.id,
                      name_ar: project.name_ar,
                      name_en: project.name_en,
                      image: project.images,
                      offer: project.offer,
                      sale_status: project.sale_status,
                      city: project.city,
                      country: project.country,
                      area: project.area,
                      starting_price: project.starting_price,
                    }}
                  />
                )}
                slideOptions={{
                  className: "w-full max-w-[25.2rem] xl:max-w-none",
                }}
              />
              <div className='mt-4.75rem flex items-center justify-between gap-1rem'>
                <div className='hidden lg:block'></div>
                <ExploreMoreButton href='/projects' />
                <SwiperNavigation refSwiper={refSwiper} />
              </div>
            </div>
          )}
        </Container>
      </section>
    </FormProvider>
  );
};

export default FeaturedProjects;
