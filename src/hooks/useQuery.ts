import {useQuery as useReactQuery, UseQueryOptions} from "@tanstack/react-query";

type IOptions<T> = UseQueryOptions<T, IError>;

export default function useQuery<T>({queryFn, queryKey, ...options}: IOptions<T>) {
  return useReactQuery<T, IError>({
    queryKey,
    queryFn,
    refetchOnWindowFocus: false,
    retry: 0,
    ...options,
  });
}
