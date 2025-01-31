"use client";

import Container from "@/components/Container";

import Pagination from "@/components/Pagination";

import ProjectItem from "@/components/ProjectItem";

import SectionHeader from "@/components/SectionHeader";

import {fakeDataProjects} from "@/constants";

const OfferListingSection = () => {
  return (
    <section className='mt-4.5rem bg-neural-colors-50 py-4.5rem'>
      <Container>
        <SectionHeader title='offers.offers_listing' subtitle='offers.available_offers' />

        <div className='mt-5 flex w-full flex-wrap justify-center gap-x-[5%] gap-y-8 md:justify-start'>
          {fakeDataProjects.map((project, index) => (
            <ProjectItem
              key={index}
              className='max-w-full flex-grow lg:max-w-[50rem] lg:flex-grow-0'
            />
          ))}
        </div>

        <Pagination
          totalPages={11}
          currentPage={1}
          onPageChange={() => {}}
          className='mx-auto mt-6 max-w-full gap-6 overflow-x-auto'
        />
      </Container>
    </section>
  );
};

export default OfferListingSection;
