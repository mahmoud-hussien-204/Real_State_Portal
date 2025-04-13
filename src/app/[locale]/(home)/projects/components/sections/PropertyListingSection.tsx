"use client";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import PropertyFilters from "./PropertyFilters";
import ProjectItem from "@/components/ProjectItem";
import {fakeDataProjects} from "@/constants";
import Image from "next/image";
import dreamHomeImage from "@/app/assets/dream-home.png";
import Pagination from "@/components/Pagination";

const PropertyListingSection = () => {
  return (
    <section className='bg-neural-colors-50 py-4.5rem'>
      <Container>
        <SectionHeader title='projects.property_listing' subtitle='projects.available_properties' />
        <div className='mt-[2.5rem] flex flex-wrap items-start gap-[2rem] lg:flex-nowrap'>
          <div className='w-full lg:w-[21rem]'>
            <PropertyFilters />
            <Image src={dreamHomeImage} alt='' className='mt-[1.5rem] hidden w-full lg:block' />
          </div>
          <div className='grid flex-1 grid-cols-1 justify-items-center gap-x-[5%] gap-y-8 sm:grid-cols-2 lg:justify-items-start'>
            {fakeDataProjects.map((project, index) => (
              // <ProjectItem
              //   key={index}
              //   direction='vertical'
              //   className='max-w-[25rem] lg:max-w-full'
              // />
              <div>test</div>
            ))}
            <Pagination
              totalPages={11}
              currentPage={1}
              onPageChange={() => {}}
              className='mx-auto mt-4 max-w-full gap-6 overflow-x-auto sm:col-span-2'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PropertyListingSection;
