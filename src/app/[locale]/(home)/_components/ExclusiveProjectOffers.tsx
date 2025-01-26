"use client";

import Container from "@/components/Container";

import ExploreMoreButton from "@/components/ExploreMoreButton";

import ProjectItem from "@/components/ProjectItem";

import SectionTitle from "@/components/SectionTitle";

import Swiper, {useSwiperRef} from "@/components/Swiper";

import SwiperNavigation from "@/components/SwiperNavigation";

import {fakeDataProjects} from "@/constants";

import {useTranslations} from "next-intl";

import {Navigation} from "swiper/modules";

const ExclusiveProjectOffers = () => {
  const t = useTranslations();

  const {refSwiper, setRefSwiper} = useSwiperRef();

  return (
    <section className='bg-grid bg-full-gradient py-4.5rem'>
      <Container>
        <SectionTitle
          subtitle={t("home.project_offers")}
          title={t.rich("home.explore_exclusive_project_offers", {
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
            render={() => <ProjectItem direction='vertical' />}
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

export default ExclusiveProjectOffers;
