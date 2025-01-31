"use client";

import galleryImage2 from "@/app/assets/projects/gallery-2.png";
import galleryImage3 from "@/app/assets/projects/gallery-3.png";
import galleryImage from "@/app/assets/projects/gallery.png";
import {Carousel, CarouselContent, CarouselItem, type CarouselApi} from "@/components/ui/carousel";
import {cn} from "@/lib/utils";
import {ArrowLeft, ArrowRight} from "lucide-react";
import Image from "next/image";
import * as React from "react";

const images = [galleryImage, galleryImage2, galleryImage3];
export default function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [mainApi, setMainApi] = React.useState<CarouselApi>();
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>();

  const onSelect = React.useCallback(() => {
    if (!mainApi || !thumbApi) return;
    setCurrentIndex(mainApi.selectedScrollSnap());
    thumbApi.scrollTo(mainApi.selectedScrollSnap());
  }, [mainApi, thumbApi]);

  React.useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    return () => {
      mainApi.off("select", onSelect);
    };
  }, [mainApi, onSelect]);

  return (
    <>
      <Carousel setApi={setMainApi} className='mt-6 max-w-full' showPagination={false}>
        <CarouselContent className=''>
          {Array.from({length: 6}).map((src, index) => (
            <CarouselItem key={index} className='aspect-video max-h-[35rem]'>
              <Image
                src={images[index % images.length]}
                alt={`Image ${index + 1}`}
                className='h-full w-full rounded-2xl object-cover object-center'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <button
          className={
            "absolute left-[2%] top-[50%] flex size-[2rem] flex-shrink-0 -translate-y-1/2 items-center justify-center rounded-full bg-white text-colors-primary-colors-500 shadow-lg transition-colors duration-300 ease-in-out hover:bg-colors-primary-colors-500 hover:text-white"
          }
          onClick={() => mainApi?.scrollPrev()}
        >
          <ArrowLeft className='size-[1.2rem]' />
        </button>
        <button
          className={
            "absolute right-[2%] top-[50%] flex size-[2rem] flex-shrink-0 -translate-y-1/2 items-center justify-center rounded-full bg-white text-colors-primary-colors-500 shadow-lg transition-colors duration-300 ease-in-out hover:bg-colors-primary-colors-500 hover:text-white"
          }
          onClick={() => mainApi?.scrollNext()}
        >
          <ArrowRight className='size-[1.2rem]' />
        </button>
      </Carousel>
      <div>
        <Carousel
          setApi={setThumbApi}
          showPagination={false}
          className='mx-auto mt-5 w-fit max-w-full'
          opts={{
            containScroll: "keepSnaps",
            dragFree: true,
          }}
        >
          <CarouselContent className='h-[12rem]'>
            {Array.from({length: 6}).map((src, index) => (
              <CarouselItem
                key={index}
                className={cn("h-[10rem] w-[11rem] basis-[11rem]")}
                onClick={() => mainApi?.scrollTo(index)}
              >
                <div
                  className={cn(
                    "h-full w-full overflow-hidden rounded-2xl p-1",
                    index === currentIndex ? "border-2 border-colors-primary-colors-500" : ""
                  )}
                >
                  <Image
                    src={images[index % images.length]}
                    alt={`Thumbnail ${index + 1}`}
                    className={cn("h-full w-full rounded-2xl object-cover object-center")}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
