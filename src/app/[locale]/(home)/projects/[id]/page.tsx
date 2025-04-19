"use client";

import PageHeroSection from "@/components/PageHeroSection";

import {IoLocationSharp} from "react-icons/io5";

import ProjectGallery from "./_components/ProjectGallery";

import Container from "@/components/Container";

import Filtration from "./_components/Filtration";

// import IconAirPort from "@/app/assets/project-details/airport.svg";
// import IconBeaches from "@/app/assets/project-details/beaches.svg";
// import IconBus from "@/app/assets/project-details/bus.svg";
// import IconCalendar from "@/app/assets/project-details/calendar.svg";
// import IconDownload from "@/app/assets/project-details/download.svg";

import BestTravelSection from "./_components/BestTravelSection";
import SectionProjectKeyPosition from "./_components/SectionProjectKeyPosition";
import SectionAboutTheOffice from "./_components/SectionAboutTheOffice";
import SectionAboutProject from "./_components/SectionAboutProject";
import SectionAboutDeveloper from "./_components/SectionAboutDeveloper";
import SectionDeveloperInfo from "./_components/SectionDeveloperInfo";
import SectionProjectStatement from "./_components/SectionProjectStatement";
import SectionProjectView from "./_components/SectionProjectView";
import SectionProjectStructure from "./_components/SectionProjectStructure";
import SectionUnitLayout from "./_components/SectionUnitLayout";
import SectionTotalArea from "./_components/SectionTotalArea";

const ProjectDetailsPage = () => {
  return (
    <>
      <PageHeroSection
        title='page_hero_title.projects_details'
        pageName='page_title.projects_details'
      />
      <div className='bg-[#F6F6F6] py-[4.5rem]'>
        <Container>
          <h2 className='mb-2 text-32 font-bold text-colors-grey-colors-2000'>
            Trillionaire Residences
          </h2>
          <p className='flex items-center gap-2 text-colors-grey-colors-700'>
            <IoLocationSharp className='text-colors-primary-colors-600' />
            Business Bay - Dubai - United Arab Emirates
          </p>

          <ProjectGallery />
          <Filtration />
          <div className='mt-1.25rem flex flex-col gap-1.25rem'>
            <section
              id='developer'
              className='grid grid-cols-1 gap-1.25rem md:grid-cols-2 lg:grid-cols-3'
            >
              <div className='lg:col-span-2'>
                <SectionAboutDeveloper />
              </div>

              <SectionDeveloperInfo />
            </section>

            <div className='grid grid-cols-1 gap-1.25rem md:grid-cols-2 lg:grid-cols-3'>
              <section id='about' className='col-span-2'>
                <SectionAboutProject />
              </section>

              <section id='about-office' className='col-span-2'>
                <SectionAboutTheOffice />
              </section>

              <section id='project-key-pos' className='col-span-2'>
                <SectionProjectKeyPosition />
              </section>

              <section id='project-statement' className='col-span-2'>
                <SectionProjectStatement />
              </section>
              <section id='view' className='col-span-2'>
                <SectionProjectView />
              </section>
              <section id='structure' className='col-span-2'>
                <SectionProjectStructure />
              </section>

              <section id='unit-layout' className='col-span-2'>
                <SectionUnitLayout />
              </section>

              <section id='total-area' className='col-span-2'>
                <SectionTotalArea />
              </section>
            </div>
          </div>
        </Container>
      </div>
      <section>
        <BestTravelSection />
      </section>
    </>
  );
};

export default ProjectDetailsPage;
