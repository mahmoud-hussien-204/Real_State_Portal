"use client";

import useQuery from "@/hooks/useQuery";
import {apiGetProductsBanners} from "../_api";

export function useProductsPageBanners() {
  const {data, isFetching} = useQuery({
    queryKey: ["products-page-banners"],
    queryFn: apiGetProductsBanners,
    refetchOnWindowFocus: false,
  });

  return {banners: data?.data ?? {}, isFetching};
}
