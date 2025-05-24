"use client";
import BannerSection from "../../_components/BannersSection";
import {useContactUsBanners} from "../../hooks/useContactUsBanners";

interface IBannerSectionProps {
  section: "1" | "2" | "3";
}

function ContactUsBannerSection({section}: IBannerSectionProps) {
  const {banners, isFetching} = useContactUsBanners();
  const bannersData: IBanner[] = banners[section] || [];

  return <BannerSection isFetching={isFetching} bannersData={bannersData} />;
}

export default ContactUsBannerSection;
