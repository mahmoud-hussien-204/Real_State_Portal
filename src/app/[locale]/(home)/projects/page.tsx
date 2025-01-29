import PageHeroSection from "@/components/PageHeroSection";
import PropertyListingSection from "./components/sections/PropertyListingSection";
import TopRelatedProjects from "../_components/TopRelatedProjects";
import Partners from "../_components/Partners";

const ProjectsPage = () => {
  return (
    <>
      <PageHeroSection title='page_hero_title.projects' pageName='page_title.projects' />
      <PropertyListingSection />
      <TopRelatedProjects />
      <Partners />
    </>
  );
};

export default ProjectsPage;
