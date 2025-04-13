import useQuery from "@/hooks/useQuery";
import {apiGetCitiesOfCountry} from "../_api";

export default function useCitiesInCountry(countryId: number | undefined) {
  const {data, isFetching} = useQuery({
    queryKey: ["cities-in-country", countryId],
    queryFn: () => apiGetCitiesOfCountry(countryId as number),
    enabled: !!countryId && countryId > 0,
  });

  return {
    cities: data?.data || [],
    isFetchingCities: isFetching,
  };
}
