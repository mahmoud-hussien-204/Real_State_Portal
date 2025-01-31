import PageHeroSection from "@/components/PageHeroSection";
import React from "react";
import FilterHeader from "./components/OffersFilterHeader";
import TopRelatedProjects from "../_components/TopRelatedProjects";
import Partners from "../_components/Partners";
import OfferListingSection from "./components/OfferListingSection";

const OffersPage = () => {
  return (
    <>
      <PageHeroSection title='page_hero_title.offers' pageName='page_title.offers' />
      <FilterHeader />
      <OfferListingSection />
      <TopRelatedProjects />
      <Partners />
    </>
  );
};

export default OffersPage;
