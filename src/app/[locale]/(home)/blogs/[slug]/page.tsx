import {apiGetBlogDetails} from "../../_api";

import Container from "@/components/Container";

import PageHeroSection from "@/components/PageHeroSection";

import {Metadata} from "next";

import BlogDetailsContent from "./_components/BlogDetailsContent";

import {locales} from "@/constants";

type ILocalesArray = typeof locales;
type ILocales = ILocalesArray[number];

interface IProps {
  params: {
    locale: ILocales;
    slug: string;
  };
}

export async function generateMetadata({params}: IProps): Promise<Metadata> {
  const {data: blog} = await apiGetBlogDetails(params.slug);
  const locale = params.locale;

  const content = blog?.[`content_${locale}`] || "";
  const name = blog?.[`name_${locale}`] || "";

  return {
    title: name, // This will use the template from root layout, replacing % with name
    openGraph: {
      title: name,
      description: content.substring(0, 160),
      images: blog.images.map((image) => ({
        url: image.url,
        alt: image.properties.alt,
      })),
    },
  };
}

export default async function BlogDetailsPage({params}: IProps) {
  const {data: blog} = await apiGetBlogDetails(params.slug);
  const locale = params.locale;

  return (
    <>
      <PageHeroSection
        title='page_hero_title.blog_details'
        // @ts-expect-error TODO: fix this
        pageName={blog?.[`name_${locale}`] || ""}
      />
      <Container className='py-16'>
        <BlogDetailsContent blog={blog} locale={locale} />
      </Container>
    </>
  );
}
