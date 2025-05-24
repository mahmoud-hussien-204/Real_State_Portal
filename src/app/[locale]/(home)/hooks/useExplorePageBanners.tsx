"use client";

import useQuery from "@/hooks/useQuery";
import {apiGetExplorePageBanners} from "../_api";

export function useExplorePageBanners() {
  const {data, isFetching} = useQuery({
    queryKey: ["explore-page-banners"],
    queryFn: apiGetExplorePageBanners,
    refetchOnWindowFocus: false,
  });

  return {banners: data?.data ?? {}, isFetching};
}
