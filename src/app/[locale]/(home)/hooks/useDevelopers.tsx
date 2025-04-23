import useQuery from "@/hooks/useQuery";
import {apiGetDevelopersFilters} from "../_api";

export default function useDevelopers() {
  const {data, isFetching} = useQuery({
    queryKey: ["developers"],
    queryFn: apiGetDevelopersFilters,
  });

  return {
    developers: data?.data?.data || [],
    isFetchingDevelopers: isFetching,
  };
}
