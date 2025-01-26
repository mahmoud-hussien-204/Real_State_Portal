"use client";

import Swiper, {useSwiperRef} from "@/components/Swiper";

import {fakeDataProjects} from "@/constants";

import {Grid, Navigation} from "swiper/modules";

import Container from "@/components/Container";

import SectionTitle from "@/components/SectionTitle";

import {useTranslations} from "next-intl";

import ProjectItem from "@/components/ProjectItem";

import SwiperNavigation from "@/components/SwiperNavigation";

import useIsSmallScreen from "@/hooks/useIsSmallScreen";

import ExploreMoreButton from "@/components/ExploreMoreButton";

import "swiper/css/grid";

const TopRelatedProjects = () => {
  const t = useTranslations();

  const {refSwiper, setRefSwiper} = useSwiperRef();

  const isSmallScreen = useIsSmallScreen();

  return (
    <section className='bg-grid bg-full-gradient py-4.5rem'>
      <Container>
        <SectionTitle
          subtitle={t("home.featured_projects")}
          title={t.rich("home.top_rated_projects", {
            span: (text) => <span>{text}</span>,
          })}
        />

        <div className=''>
          <Swiper
            className='xl:h-[40.5rem]'
            options={{
              slidesPerView: "auto",
              spaceBetween: 24,
              grabCursor: true,
              modules: [Grid, Navigation],
              navigation: true,
              onSwiper: setRefSwiper,
              onSlideChange: setRefSwiper,
              breakpoints: {
                1280: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  grid: {
                    rows: 2,
                  },
                },
              },
            }}
            slides={fakeDataProjects}
            render={() => <ProjectItem direction={isSmallScreen ? "vertical" : "horizontal"} />}
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
      </Container>
    </section>
  );
};

export default TopRelatedProjects;
