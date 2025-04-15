import useQuery from "@/hooks/useQuery";
import {apiGetAreasOfCity} from "../_api";

export default function useAreasInCity(city: number | undefined) {
  const {data, isFetching} = useQuery({
    queryKey: ["areas-in-city", city],
    queryFn: () => apiGetAreasOfCity(city as number),
    enabled: !!city && city > 0,
  });

  return {
    areas: data?.data || [],
    isFetchingAreas: isFetching,
  };
}
