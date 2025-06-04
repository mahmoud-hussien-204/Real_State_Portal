import Container from "@/components/Container";

import PageHeroSection from "@/components/PageHeroSection";

import {apiGetBlogs} from "../_api";

import Image from "next/image";

import {Link} from "@/i18n/routing";

interface IProps {
  params: {locale: ILocales};
}

export default async function BlogsPage({params}: IProps) {
  const blogs = await apiGetBlogs();

  const locale = params.locale;

  return (
    <>
      <PageHeroSection title='page_hero_title.blogs' pageName='page_title.blogs' />
      <Container className='py-16'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {Array.isArray(blogs.data) &&
            blogs.data.map((blog) => (
              <article
                key={blog.id}
                className='overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md'
              >
                <div className='relative aspect-video w-full overflow-hidden'>
                  <Image
                    src={blog.images?.[0]?.url}
                    alt={blog.images?.[0]?.properties?.alt}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='mb-2 flex items-center gap-2 text-sm text-gray-500'>
                    <span>{blog.category?.[`name_${locale}`]}</span>
                  </div>
                  <h2 className='mb-2 text-xl font-bold'>{blog?.[`name_${locale}`]}</h2>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className='mt-4 text-sm font-medium text-colors-primary-colors-600 hover:underline'
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </Container>
    </>
  );
}
