'use client';

import PageHeroSection from "@/components/PageHeroSection";

import FilterHeader from "./components/OffersFilterHeader";

import TopRelatedProjects from "../_components/TopRelatedProjects";

import Partners from "../_components/Partners";

import OfferListingSection from "./components/OfferListingSection";
import { useState } from "react";

const OffersPage = () => {
  const [offers, setOffers] = useState<IOffer[]>([]);
  return (
    <>
      <PageHeroSection title='page_hero_title.offers' pageName='page_title.offers' />
      <FilterHeader setOffers={setOffers} />
      <OfferListingSection offers={offers} />
      <TopRelatedProjects />
      <Partners />
    </>
  );
};

export default OffersPage;
