"use client";

import useQuery from "@/hooks/useQuery";
import {apiGetHomeBanners} from "../_api";

export function useHomePageBanners() {
  const {data, isFetching} = useQuery({
    queryKey: ["home-page-banners"],
    queryFn: apiGetHomeBanners,
    refetchOnWindowFocus: false,
  });

  return {banners: data?.data ?? {}, isFetching};
}
