"use client";

import Container from "@/components/Container";

import ExploreMoreButton from "@/components/ExploreMoreButton";

// import ProjectItem from "@/components/ProjectItem";

import SectionTitle from "@/components/SectionTitle";

import Swiper, {useSwiperRef} from "@/components/Swiper";

import SwiperNavigation from "@/components/SwiperNavigation";

import useQuery from "@/hooks/useQuery";

import {useTranslations} from "next-intl";

import {Grid, Navigation} from "swiper/modules";
import {apiGetOffers} from "../offers/_api";
import ProjectItem from "@/components/ProjectItem";
import Spinner from "@/components/ui/spinner";
import useIsSmallScreen from "@/hooks/useIsSmallScreen";

const ExclusiveProjectOffers = () => {
  const t = useTranslations();

  const {refSwiper, setRefSwiper} = useSwiperRef();
  const isSmallScreen = useIsSmallScreen();

  const {data, isFetching: isFetchingProjects} = useQuery({
    queryKey: ["offers"],
    queryFn: () => apiGetOffers(),
  });

  const projects = data?.data || [];

  return (
    <section className='bg-grid bg-full-gradient py-4.5rem'>
      <Container>
        <SectionTitle
          subtitle={t("home.project_offers")}
          title={t.rich("home.explore_exclusive_project_offers", {
            span: (text) => <span>{text}</span>,
          })}
        />
        {isFetchingProjects ? (
          <Spinner />
        ) : projects.length === 0 ? (
          <div>
            <h2 className='text-center text-3xl font-bold text-colors-grey-colors-900'>
              {t("home.no_projects_available")}
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
  );
};

export default ExclusiveProjectOffers;
