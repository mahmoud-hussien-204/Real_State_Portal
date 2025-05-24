"use client";

import useQuery from "@/hooks/useQuery";
import {apiGetContactUsBanners} from "../_api";

export function useContactUsBanners() {
  const {data, isFetching} = useQuery({
    queryKey: ["contact-us-banners"],
    queryFn: apiGetContactUsBanners, // Replace with actual API call
    refetchOnWindowFocus: false,
  });

  return {banners: data?.data ?? {}, isFetching};
}
