"use client";

import {Swiper as SwiperContainer, SwiperProps, SwiperSlide, SwiperSlideProps} from "swiper/react";

import {FunctionComponent, useRef, useState} from "react";

// Import Swiper styles
import "swiper/css";

type Props<T> = {
  slides: T[];
  render: FunctionComponent<T>;
  options: SwiperProps;
  slideOptions?: SwiperSlideProps;
  className?: string;
};

const Swiper = <T,>({slides, render, options, className, slideOptions}: Props<T>) => (
  <SwiperContainer {...options} className={className}>
    {slides.map((slide, index) => (
      <SwiperSlide key={index} {...slideOptions}>
        {render(slide)}
      </SwiperSlide>
    ))}
  </SwiperContainer>
);

export default Swiper;

export const useSwiperRef = () => {
  const refSwiper = useRef<ISwiperRef | null>(null);

  const [, setToggle] = useState(true);

  const setRefSwiper = (swiper: ISwiperRef) => {
    setToggle((prev) => !prev);
    refSwiper.current = swiper;
  };

  return {refSwiper, setRefSwiper};
};
