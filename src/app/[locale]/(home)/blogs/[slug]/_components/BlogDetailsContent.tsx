"use client";

import {IBlog} from "../../../_interfaces";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import Image from "next/image";
import {locales} from "@/constants";

type ILocalesArray = typeof locales;
type ILocales = ILocalesArray[number];

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ShadowHtml from "@/components/ShadowHtml";

interface Props {
  blog: IBlog;
  locale: ILocales;
}

export default function BlogDetailsContent({blog, locale}: Props) {
  const categoryName = blog.category?.[`name_${locale}`] || "";
  const blogName = blog?.[`name_${locale}`] || "";
  const blogContent = blog?.[`content_${locale}`] || "";

  return (
    <article className='mx-auto max-w-4xl'>
      {/* Blog Images Swiper */}
      <div className='mb-8'>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{clickable: true}}
          spaceBetween={30}
          className='aspect-video w-full overflow-hidden rounded-lg'
        >
          {blog.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='relative h-full w-full'>
                <Image
                  src={image.url}
                  alt={image.properties.alt}
                  fill
                  className='object-cover'
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Blog Category */}
      <div className='mb-4'>
        <span
          className='inline-block rounded-full px-4 py-2 text-sm font-medium text-white'
          style={{backgroundColor: blog.category?.color}}
        >
          {categoryName}
        </span>
      </div>

      {/* Blog Title */}
      <h1 className='mb-6 text-4xl font-bold'>{blogName}</h1>

      {/* Blog Content */}
      <ShadowHtml html={blogContent} />
    </article>
  );
}
