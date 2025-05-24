"use client";

import useQuery from "@/hooks/useQuery";
import {apiGetOffersPageBanners} from "../_api";

export function useOffersPageBanners() {
  const {data, isFetching} = useQuery({
    queryKey: ["offers-page-banners"],
    queryFn: apiGetOffersPageBanners,
    refetchOnWindowFocus: false,
  });

  return {banners: data?.data ?? {}, isFetching};
}
