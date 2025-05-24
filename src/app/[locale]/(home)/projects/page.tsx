import PageHeroSection from "@/components/PageHeroSection";
import PropertyListingSection from "./components/sections/PropertyListingSection";
import FeaturedProjects from "../_components/FeaturedProjects";

const ProjectsPage = () => {
  return (
    <>
      <PageHeroSection title='page_hero_title.projects' pageName='page_title.projects' />
      <PropertyListingSection />
      <FeaturedProjects />
      {/* <Partners /> */}
    </>
  );
};

export default ProjectsPage;
