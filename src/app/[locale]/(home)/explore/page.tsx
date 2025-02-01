import PageHeroSection from "@/components/PageHeroSection";

import ExploreFilterHeader from "./_components/ExploreFilterHeader";

import FindProjectSection from "./_components/FindProjectSection";

import ExploreMap from "./_components/ExploreMap";

const ExplorePage = () => {
  return (
    <>
      <PageHeroSection title='page_hero_title.explore' pageName='page_title.explore' />
      <ExploreFilterHeader />
      <ExploreMap />
      <FindProjectSection />
    </>
  );
};

export default ExplorePage;
