"use client";

import Swiper, {useSwiperRef} from "@/components/Swiper";

import {fakeDataProjects} from "@/constants";

import {Navigation} from "swiper/modules";

import Container from "@/components/Container";

import SectionTitle from "@/components/SectionTitle";

import {useTranslations} from "next-intl";

// import ProjectItem from "@/components/ProjectItem";

import SwiperNavigation from "@/components/SwiperNavigation";

import ExploreMoreButton from "@/components/ExploreMoreButton";

const LatestProjects = () => {
  const t = useTranslations();

  const {refSwiper, setRefSwiper} = useSwiperRef();

  return (
    <section className='overflow-x-hidden bg-colors-grey-colors-150 py-4.5rem'>
      <Container>
        <SectionTitle
          subtitle={t("home.featured_projects")}
          title={t.rich("home.discover_the_latest_projects", {
            span: (text) => <span>{text}</span>,
          })}
        />

        <div className=''>
          <Swiper
            options={{
              slidesPerView: "auto",
              spaceBetween: 24,
              modules: [Navigation],
              navigation: true,
              grabCursor: true,
              onSwiper: setRefSwiper,
              onSlideChange: setRefSwiper,
            }}
            slides={fakeDataProjects}
            // render={() => <ProjectItem direction='vertical' />}
            render={() => <div>test</div>}
            className='!overflow-visible'
            slideOptions={{
              className: "w-full max-w-[25.2rem]",
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

export default LatestProjects;
