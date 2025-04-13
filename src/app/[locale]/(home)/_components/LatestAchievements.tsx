"use client";

import Container from "@/components/Container";

import ExploreMoreButton from "@/components/ExploreMoreButton";

import ProjectItem from "@/components/ProjectItem";

import SectionTitle from "@/components/SectionTitle";

import Swiper, {useSwiperRef} from "@/components/Swiper";

import SwiperNavigation from "@/components/SwiperNavigation";

import {fakeDataProjects} from "@/constants";

import useIsSmallScreen from "@/hooks/useIsSmallScreen";

import {useTranslations} from "next-intl";

import {Grid, Navigation} from "swiper/modules";

import "swiper/css/grid";

const LatestAchievements = () => {
  const t = useTranslations();

  const {refSwiper, setRefSwiper} = useSwiperRef();

  const isSmallScreen = useIsSmallScreen();

  return (
    <section className='bg-[url("./assets/achievements-bg.png")] bg-cover py-4.5rem'>
      <Container>
        <SectionTitle
          subtitle={t("home.recent_projects")}
          title={t.rich("home.discover_the_latest_achievements", {
            span: (text) => <span>{text}</span>,
          })}
          className='text-white'
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
            slideOptions={{
              className: "w-full max-w-[25.2rem] xl:max-w-none",
            }}
            render={() => (
              // <ProjectItem variant='dark' direction={isSmallScreen ? "vertical" : "horizontal"} />
              <div>tst</div>
            )}
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

export default LatestAchievements;
