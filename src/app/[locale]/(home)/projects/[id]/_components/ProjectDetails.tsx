"use client";
import Container from "@/components/Container";
import {IoLocationSharp} from "react-icons/io5";
import ProjectGallery from "./ProjectGallery";
import Filtration from "./Filtration";
import SectionAboutDeveloper from "./SectionAboutDeveloper";
import SectionDeveloperInfo from "./SectionDeveloperInfo";
import SectionAboutProject from "./SectionAboutProject";
import SectionAboutTheOffice from "./SectionAboutTheOffice";
import SectionProjectKeyPosition from "./SectionProjectKeyPosition";
import SectionProjectStatement from "./SectionProjectStatement";
import SectionProjectView from "./SectionProjectView";
import SectionConstructed from "./SectionConstructed";
import SectionProjectStructure from "./SectionProjectStructure";
import SectionUnitLayout from "./SectionUnitLayout";
import SectionTotalArea from "./SectionTotalArea";
import SectionServiceCharge from "./SectionServiceCharge";
import SectionServiceProviders from "./SectionServiceProviders";
import SectionDiscountPolicy from "./SectionDiscountPolicy";
import SectionPurchasingProcedures from "./SectionPurchasingProcedures";
// import SectionProjectDocumentation from "./SectionProjectDocumentation";
// import SectionAmenties from "./SectionAmenties";
import SectionLocation from "./SectionLocation";
import useQuery from "@/hooks/useQuery";
import {apiGetProjectDetails} from "../../_api";
import {useLocale} from "next-intl";

function ProjectDetails({projectId}: {projectId: string | number}) {
  const locale = useLocale();
  const {data} = useQuery({
    queryKey: ["project"],
    queryFn: () => apiGetProjectDetails("project-test2-19363"),
  });
  const project = data?.data?.project;
  return (
    <div className='bg-[#F6F6F6] py-[4.5rem]'>
      <Container>
        <h2 className='mb-2 text-32 font-bold text-colors-grey-colors-2000'>
          {locale === "en" ? project?.name_en : project?.name_ar}
        </h2>
        <p className='flex items-center gap-2 text-colors-grey-colors-700'>
          <IoLocationSharp className='text-colors-primary-colors-600' />
          Business Bay - Dubai - United Arab Emirates
          {/* {locale === "en" ? project?.address_en : project?.address_ar} */}
        </p>

        <ProjectGallery images={project?.images || []} />
        <Filtration />
        <div className='mt-1.25rem flex flex-col gap-1.25rem'>
          <section
            id='developer'
            className='grid grid-cols-1 gap-1.25rem md:grid-cols-2 lg:grid-cols-3'
          >
            <div className='lg:col-span-2'>
              <SectionAboutDeveloper
                developerCard={project?.card_developer}
                aboutDeveloper={project?.about_developer}
              />
            </div>

            <SectionDeveloperInfo developerCard={project?.card_developer} />
          </section>

          <div className='grid grid-cols-1 gap-1.25rem md:grid-cols-2 lg:grid-cols-3'>
            <section id='about' className='col-span-2'>
              <SectionAboutProject aboutProject={project?.about_project} />
            </section>

            <section id='about-office' className='col-span-2'>
              <SectionAboutTheOffice />
            </section>

            <section id='project-key-pos' className='col-span-2'>
              <SectionProjectKeyPosition projectKeyPosition={project?.project_key_position || []} />
            </section>

            <section id='project-statement' className='col-span-2'>
              <SectionProjectStatement />
            </section>
            <section id='view' className='col-span-2'>
              <SectionProjectView projectView={project?.project_view} />
            </section>

            <section id='constructed' className='col-span-2'>
              <SectionConstructed constructed={project?.constructed} />
            </section>

            <section id='structure' className='col-span-2'>
              <SectionProjectStructure />
            </section>

            <section id='unit-layout' className='col-span-2'>
              <SectionUnitLayout unitsLayout={project?.units_layouts} />
            </section>

            <section id='total-area' className='col-span-2'>
              <SectionTotalArea totalArea={project?.total_area} />
            </section>

            <section id='service-charge' className='col-span-2'>
              <SectionServiceCharge serviceCharge={project?.service_charge} />
            </section>

            <section id='service-providers' className='col-span-2'>
              <SectionServiceProviders mainServiceProviders={project?.main_service_providers} />
            </section>

            <section id='discount-policy' className='col-span-2'>
              <SectionDiscountPolicy discountPolicy={project?.discount_policy} />
            </section>

            <section id='purchasing-procedures' className='col-span-2'>
              <SectionPurchasingProcedures purchaseingProcedures={project?.purchasing_procedures} />
            </section>

            {/* <section id='project-documentation' className='col-span-2'>
              <SectionProjectDocumentation />
            </section>

            <section id='amenties' className='col-span-2'>
              <SectionAmenties />
            </section> */}

            {project && (
              <section id='location' className='col-span-2'>
                <SectionLocation project={project} />
              </section>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProjectDetails;
