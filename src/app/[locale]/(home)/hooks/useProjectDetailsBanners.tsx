"use client";

import useQuery from "@/hooks/useQuery";
import {apiGetProjectDetailsBanners} from "../_api";

export function useProjectDetailsBanners() {
  const {data, isFetching} = useQuery({
    queryKey: ["project-details-banners"],
    queryFn: apiGetProjectDetailsBanners,
    refetchOnWindowFocus: false,
  });

  return {banners: data?.data ?? {}, isFetching};
}
