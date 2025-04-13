'use client';

import PageHeroSection from "@/components/PageHeroSection";

import FilterHeader from "./components/OffersFilterHeader";

import TopRelatedProjects from "../_components/TopRelatedProjects";

import Partners from "../_components/Partners";

import OfferListingSection from "./components/OfferListingSection";
import { useState } from "react";

const OffersPage = () => {
  const [offers, setOffers] = useState<IOffer[]>([]);
  const [isLoadingOffers, setIsLoadingOffers] = useState(false);

  return (
    <>
      <PageHeroSection title='page_hero_title.offers' pageName='page_title.offers' />
      <FilterHeader setOffers={setOffers} setIsLoadingOffers={setIsLoadingOffers} />
      <OfferListingSection offers={offers} isLoadingOffers={isLoadingOffers} />
      <TopRelatedProjects />
      <Partners />
    </>
  );
};

export default OffersPage;
