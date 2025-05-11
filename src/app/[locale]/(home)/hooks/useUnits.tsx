import useQuery from "@/hooks/useQuery";
import {apiGetUnitsFilters} from "../_api";

export default function useUnits() {
  const {data, isFetching} = useQuery({
    queryKey: ["units"],
    queryFn: apiGetUnitsFilters,
  });

  return {
    units: data?.data?.data || [],
    isFetchingUnits: isFetching,
  };
}
