import LatestProjects from "./_components/LatestProjects";

import AreaAcrossTheTown from "./_components/AreaAcrossTheTown";

import ExclusiveProjectOffers from "./_components/ExclusiveProjectOffers";

// import LatestAchievements from "./_components/LatestAchievements";

import HeroSection from "./_components/HeroSection";
import FeaturedProjects from "./_components/FeaturedProjects";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {getQueryClient} from "../get-query-client";
import {
  apiGetFeaturedProjects,
  apiGetGalleryProjects,
  apiGetHomeBanners,
  apiGetPopularProjects,
} from "./_api";
import {apiGetOffers} from "./offers/_api";
import BannerSection from "./_components/BannersSection";

const Page = async () => {
  const queryClient = getQueryClient();

  /** Prefetch the home page banners on the server */
  await queryClient.prefetchQuery({
    queryKey: ["home-page-banners"],
    queryFn: apiGetHomeBanners,
  });

  /** Prefetch the featured projects on the server */
  await queryClient.prefetchQuery({
    queryKey: ["featured-projects"],
    queryFn: () => apiGetFeaturedProjects(),
  });

  /** Prefetch the popular projects */
  await queryClient.prefetchQuery({
    queryKey: ["popular-projects"],
    queryFn: () => apiGetPopularProjects(),
  });

  /** Prefetch the gallery projects */
  await queryClient.prefetchQuery({
    queryKey: ["gallery-projects"],
    queryFn: () => apiGetGalleryProjects({country_id: 3}), // Updated to use apiGetGalleryProjects
  });

  /** Prefetch the offers */
  await queryClient.prefetchQuery({
    queryKey: ["offers"],
    queryFn: () => apiGetOffers(),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HeroSection />
        <BannerSection section='1' />
        <FeaturedProjects />
        <BannerSection section='2' />
        <LatestProjects />
        <AreaAcrossTheTown />
        <ExclusiveProjectOffers />
        <BannerSection section='3' />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
