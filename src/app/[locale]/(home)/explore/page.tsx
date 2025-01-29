import PageHeroSection from "@/components/PageHeroSection";
import ExploreFilterHeader from "./components/ExploreFilterHeader";
import FindProjectSection from "./components/FindProjectSection";

const ExplorePage = () => {
  return (
    <>
      <PageHeroSection title='page_hero_title.explore' pageName='page_title.explore' />
      <ExploreFilterHeader />
      <FindProjectSection />
    </>
  );
};

export default ExplorePage;
