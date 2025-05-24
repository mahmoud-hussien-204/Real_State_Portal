import PageHeroSection from "@/components/PageHeroSection";

import BestTravelSection from "./_components/BestTravelSection";

import {getQueryClient} from "@/app/[locale]/get-query-client";
import {apiGetProjectDetails} from "../_api";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import ProjectDetails from "./_components/ProjectDetails";
import {apiGetProjectDetailsBanners} from "../../_api";

const ProjectDetailsPage = async ({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;
  console.log("id: ", id);
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["project"],
    queryFn: () => apiGetProjectDetails("project-test2-19363"),
  });

  /** Prefetch project details banners */
  await queryClient.prefetchQuery({
    queryKey: ["project-details-banners"],
    queryFn: () => apiGetProjectDetailsBanners(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageHeroSection
        title='page_hero_title.projects_details'
        pageName='page_title.projects_details'
      />
      <ProjectDetails projectId={id} />
      <section>
        <BestTravelSection />
      </section>
    </HydrationBoundary>
  );
};

export default ProjectDetailsPage;
