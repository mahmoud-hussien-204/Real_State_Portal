"use client";

import Spinner from "@/components/ui/spinner";
import Container from "@/components/Container";
import {useHomePageBanners} from "../hooks/useHomePageBanners";
import Swiper, {useSwiperRef} from "@/components/Swiper";
import SwiperNavigation from "@/components/SwiperNavigation";
import Image from "next/image";
import {Autoplay, FreeMode, Navigation} from "swiper/modules";

interface IBannerSectionProps {
  section: "1" | "2" | "3";
}

function BannerSection({section}: IBannerSectionProps) {
  const {banners, isFetching} = useHomePageBanners();
  const {refSwiper, setRefSwiper} = useSwiperRef();
  const bannersData: IBanner[] = banners[section] || [];

  return (
    <section>
      {isFetching ? (
        <Container className='text-center'>
          <Spinner />
        </Container>
      ) : (
        <div className='w-full'>
          <Swiper
            options={{
              slidesPerView: 1,
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
            slides={bannersData}
            render={(banner, index) => (
              <div className='relative w-full'>
                <Image
                  src={banner.banner}
                  alt={`Banner ${index}`}
                  priority={index === 0}
                  height={200}
                  width={1200}
                  className='h-[600px] w-full object-cover'
                />
              </div>
            )}
            className='w-full !overflow-visible'
          />
          <Container>
            <div className='mt-4.75rem flex items-center justify-end gap-1rem'>
              <SwiperNavigation refSwiper={refSwiper} />
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}

export default BannerSection;
