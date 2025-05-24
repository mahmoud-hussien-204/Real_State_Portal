"use client";
import {useHomePageBanners} from "../hooks/useHomePageBanners";
import BannerSection from "./BannersSection";
interface IBannerSectionProps {
  section: "1" | "2" | "3";
}

function HomePageBannerSection({section}: IBannerSectionProps) {
  const {banners, isFetching} = useHomePageBanners();
  const bannersData: IBanner[] = banners[section] || [];

  return <BannerSection isFetching={isFetching} bannersData={bannersData} />;
}

export default HomePageBannerSection;
