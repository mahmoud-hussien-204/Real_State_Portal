import LatestProjects from "./_components/LatestProjects";

import AreaAcrossTheTown from "./_components/AreaAcrossTheTown";

import ExclusiveProjectOffers from "./_components/ExclusiveProjectOffers";

import HeroSection from "./_components/HeroSection";
import FeaturedProjects from "./_components/FeaturedProjects";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {getQueryClient} from "../get-query-client";
import {
  apiGetContactUsBanners,
  apiGetFeaturedProjects,
  apiGetGalleryProjects,
  apiGetHomeBanners,
  apiGetPopularProjects,
  apiGetProjectsBanners,
} from "./_api";
import {apiGetOffers} from "./offers/_api";
import HomePageBannerSection from "./_components/HomePageBannerSection";

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

  /** Prefetch projects banners */
  await queryClient.prefetchQuery({
    queryKey: ["projects-banners"],
    queryFn: () => apiGetProjectsBanners(),
  });

  /** Prefetch contact-us banners */
  await queryClient.prefetchQuery({
    queryKey: ["contact-us-banners"],
    queryFn: () => apiGetContactUsBanners(),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HeroSection />
        <HomePageBannerSection section='1' />
        <FeaturedProjects />
        <HomePageBannerSection section='2' />
        <LatestProjects />
        <AreaAcrossTheTown />
        <ExclusiveProjectOffers />
        <HomePageBannerSection section='3' />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
