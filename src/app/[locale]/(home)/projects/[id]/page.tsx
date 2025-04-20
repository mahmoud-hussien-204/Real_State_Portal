"use client";

import PageHeroSection from "@/components/PageHeroSection";

import {IoLocationSharp} from "react-icons/io5";

import ProjectGallery from "./_components/ProjectGallery";

import Container from "@/components/Container";

import Filtration from "./_components/Filtration";

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
import SectionServiceCharge from "./_components/SectionServiceCharge";
import SectionServiceProviders from "./_components/SectionServiceProviders";
import SectionDiscountPolicy from "./_components/SectionDiscountPolicy";
import SectionPurchasingProcedures from "./_components/SectionPurchasingProcedures";
import SectionProjectDocumentation from "./_components/SectionProjectDocumentation";
import SectionLocation from "./_components/SectionLocation";
import SectionAmenties from "./_components/SectionAmenties";
import SectionConstructed from "./_components/SectionConstructed";

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

              <section id='constructed' className='col-span-2'>
                <SectionConstructed />
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

              <section id='service-charge' className='col-span-2'>
                <SectionServiceCharge />
              </section>

              <section id='service-providers' className='col-span-2'>
                <SectionServiceProviders />
              </section>

              <section id='discount-policy' className='col-span-2'>
                <SectionDiscountPolicy />
              </section>

              <section id='purchasing-procedures' className='col-span-2'>
                <SectionPurchasingProcedures />
              </section>

              <section id='project-documentation' className='col-span-2'>
                <SectionProjectDocumentation />
              </section>

              <section id='amenties' className='col-span-2'>
                <SectionAmenties />
              </section>

              <section id='location' className='col-span-2'>
                <SectionLocation />
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
