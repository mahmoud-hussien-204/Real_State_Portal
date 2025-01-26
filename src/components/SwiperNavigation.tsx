"use client";

import IconLineArrowLeft from "@/icons/IconLineArrowLeft";

import IconLineArrowRight from "@/icons/IconLineArrowRight";

const SwiperNavigation = ({refSwiper}: {refSwiper: React.MutableRefObject<ISwiperRef | null>}) => {
  return (
    <div className='flex items-center gap-1.75rem'>
      <button
        type='button'
        onClick={() => refSwiper?.current?.slidePrev()}
        disabled={refSwiper?.current?.isBeginning}
        className='flex size-[3.125rem] items-center justify-center rounded-full bg-colors-grey-colors-100 text-colors-primary-colors-600 transition-colors duration-200 enabled:hover:bg-colors-primary-colors-600 enabled:hover:text-colors-grey-colors-100 disabled:opacity-30'
      >
        <IconLineArrowLeft />
      </button>

      <button
        type='button'
        onClick={() => refSwiper?.current?.slideNext()}
        disabled={refSwiper?.current?.isEnd}
        className='flex size-[3.125rem] items-center justify-center rounded-full bg-colors-grey-colors-100 text-colors-primary-colors-600 transition-colors duration-200 enabled:hover:bg-colors-primary-colors-600 enabled:hover:text-colors-grey-colors-100 disabled:opacity-30'
      >
        <IconLineArrowRight />
      </button>
    </div>
  );
};

export default SwiperNavigation;
