"use client";

import galleryImage2 from "@/app/assets/projects/gallery-2.png";
import galleryImage3 from "@/app/assets/projects/gallery-3.png";
import galleryImage from "@/app/assets/projects/gallery.png";
import {Carousel, CarouselContent, CarouselItem, type CarouselApi} from "@/components/ui/carousel";
import {cn} from "@/lib/utils";
import {ArrowLeft, ArrowRight} from "lucide-react";
import Image from "next/image";
import * as React from "react";

const defImages = [galleryImage, galleryImage2, galleryImage3];
export default function ProjectGallery({images}: {images: string[]}) {
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

  // Fix: Use default images if images array is empty
  const displayedImages = images && images.length > 0 ? images : defImages;

  return (
    <>
      <Carousel setApi={setMainApi} className='mt-6 max-w-full' showPagination={false}>
        <CarouselContent className=''>
          {displayedImages.map((src, index) => (
            <CarouselItem key={`prj-img-${index}`} className='aspect-video max-h-[35rem]'>
              {/* Handle external and imported images differently */}
              {typeof src === "string" && src.startsWith("http") ? (
                <div className='relative h-full w-full'>
                  <Image
                    src={src}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
                    alt={`Image ${index + 1}`}
                    className='rounded-2xl object-cover object-center'
                  />
                </div>
              ) : (
                <Image
                  src={src}
                  width={1000}
                  height={600}
                  alt={`Image ${index + 1}`}
                  className='h-full w-full rounded-2xl object-cover object-center'
                />
              )}
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
            {/* Make sure we don't try to access images beyond its length */}
            {Array.from({length: Math.min(6, displayedImages.length)}).map((_, index) => (
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
                  {/* Handle external and imported images differently in thumbnails too */}
                  {typeof displayedImages[index] === "string" &&
                  displayedImages[index].startsWith("http") ? (
                    <div className='relative h-full w-full'>
                      <Image
                        src={displayedImages[index]}
                        fill
                        sizes='150px'
                        alt={`Thumbnail ${index + 1}`}
                        className={cn("rounded-2xl object-cover object-center")}
                      />
                    </div>
                  ) : (
                    <Image
                      src={displayedImages[index]}
                      width={150}
                      height={150}
                      alt={`Thumbnail ${index + 1}`}
                      className={cn("h-full w-full rounded-2xl object-cover object-center")}
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
