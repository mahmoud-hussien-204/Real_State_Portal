"use client";

import useQuery from "@/hooks/useQuery";
import {apiGetProjectsBanners} from "../_api";

export function useProjectsPageBanners() {
  const {data, isFetching} = useQuery({
    queryKey: ["products-page-banners"],
    queryFn: apiGetProjectsBanners,
    refetchOnWindowFocus: false,
  });

  return {banners: data?.data ?? {}, isFetching};
}
