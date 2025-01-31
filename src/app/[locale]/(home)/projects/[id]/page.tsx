import PageHeroSection from "@/components/PageHeroSection";
import {IoLocationSharp} from "react-icons/io5";
import ProjectGallery from "./components/ProjectGallery";
import Container from "@/components/Container";

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
        </Container>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
