import useQuery from "@/hooks/useQuery";
import {apiGetCategoryTypes} from "../_api";

export default function useCategories() {
  const {data, isFetching} = useQuery({
    queryKey: ["categories"],
    queryFn: apiGetCategoryTypes,
  });

  return {
    categories: data?.data || [],
    isFetchingCategories: isFetching,
  };
}
