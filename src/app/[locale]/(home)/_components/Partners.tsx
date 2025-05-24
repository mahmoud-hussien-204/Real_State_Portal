"use client";

import Container from "@/components/Container";

import SectionTitle from "@/components/SectionTitle";

import Swiper, {useSwiperRef} from "@/components/Swiper";

import SwiperNavigation from "@/components/SwiperNavigation";

import {fakeDataPartners} from "@/constants";

import {useTranslations} from "next-intl";

import {Autoplay, FreeMode, Navigation} from "swiper/modules";

import "swiper/css/free-mode";
import Image from "next/image";

const Partners = () => {
  const t = useTranslations();

  const {refSwiper, setRefSwiper} = useSwiperRef();

  return (
    <section className='overflow-x-hidden·bg-colors-grey-colors-150'>
      <Container>
        <SectionTitle
          subtitle={t("home.our_partners")}
          title={t.rich("home.meet_our_partners", {
            span: (text) => <span>{text}</span>,
          })}
        />
      </Container>

      <div className='flex h-[12.14rem] items-center bg-colors-grey-colors-100 py-1.25rem'>
        <Container className=''>
          <Swiper
            options={{
              slidesPerView: "auto",
              spaceBetween: 40,
              modules: [Navigation, Autoplay, FreeMode],
              navigation: true,
              freeMode: true,
              autoplay: {
                disableOnInteraction: true,
              },
              speed: 6000,
              grabCursor: true,
              loop: true,
              onSwiper: setRefSwiper,
              onSlideChange: setRefSwiper,
            }}
            slides={fakeDataPartners}
            render={(partner) => (
              <div className=''>
                <Image width={500} height={200} src={partner.image} alt={partner.name} />
              </div>
            )}
            className='!overflow-visible'
            slideOptions={{
              className: "w-full max-w-max",
            }}
          />
        </Container>
      </div>

      <Container>
        <div className='mt-4.75rem flex items-center justify-end gap-1rem'>
          <SwiperNavigation refSwiper={refSwiper} />
        </div>
      </Container>
    </section>
  );
};

export default Partners;
