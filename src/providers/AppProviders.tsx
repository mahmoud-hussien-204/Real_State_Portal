"use client";

import {apiGetCountries} from "@/api";

import useQuery from "@/hooks/useQuery";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import {createContext, useState} from "react";

import {ToastContainer} from "react-toastify";

const queryClient = new QueryClient();

const AppProviders = ({children}: Required<React.PropsWithChildren>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>{children}</AppContextProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default AppProviders;

export const appContext = createContext<{
  countries: ICountry[];
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}>({
  countries: [],
  user: null,
  setUser: () => {},
});

const AppContextProvider = ({children}: Required<React.PropsWithChildren>) => {
  const [countries, setCountries] = useState<ICountry[]>([]);

  const [user, setUser] = useState<IUser | null>(
    localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData") as string) : null
  );

  useQuery({
    queryKey: ["countries"],
    queryFn: () =>
      apiGetCountries().then((res) => {
        setCountries(res.data);
        return res.data;
      }),
  });

  return <appContext.Provider value={{countries, user, setUser}}>{children}</appContext.Provider>;
};
