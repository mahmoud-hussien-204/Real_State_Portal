"use client";

import {useTranslations} from "next-intl";
import Container from "@/components/Container";
import PageHeroSection from "@/components/PageHeroSection";

// TODO: Replace with actual blog data and implement blog functionality
const mockBlogs = [
  {
    id: 1,
    title: "Top 10 Real Estate Investment Tips",
    excerpt: "Learn the best practices for investing in real estate...",
    image: "/mock/blog1.jpg",
    date: "2024-03-20",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Understanding Property Market Trends",
    excerpt: "A comprehensive guide to current market trends...",
    image: "/mock/blog2.jpg",
    date: "2024-03-19",
    author: "Jane Smith",
  },
];

export default function BlogsPage() {
  const t = useTranslations();

  return (
    <>
      <PageHeroSection title='page_hero_title.blogs' pageName='page_title.blogs' />
      <Container className='py-16'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {mockBlogs.map((blog) => (
            <article
              key={blog.id}
              className='overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md'
            >
              <div className='aspect-video w-full overflow-hidden'>
                <img src={blog.image} alt={blog.title} className='h-full w-full object-cover' />
              </div>
              <div className='p-6'>
                <div className='mb-2 flex items-center gap-2 text-sm text-gray-500'>
                  <span>{blog.author}</span>
                  <span>•</span>
                  <time>{new Date(blog.date).toLocaleDateString()}</time>
                </div>
                <h2 className='mb-2 text-xl font-bold'>{blog.title}</h2>
                <p className='text-gray-600'>{blog.excerpt}</p>
                <button className='mt-4 text-sm font-medium text-colors-primary-colors-600 hover:underline'>
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
