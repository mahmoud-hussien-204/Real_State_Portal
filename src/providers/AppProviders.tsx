"use client";

import {apiGetCountries} from "@/api";

import useQuery from "@/hooks/useQuery";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import {createContext, useEffect, useState} from "react";

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

  // Initialize with null, then update in useEffect
  const [user, setUser] = useState<IUser | null>(null);

  // Use useEffect to access localStorage after component mounts (client-side only)
  useEffect(() => {
    try {
      // Now we're safely in the browser environment
      const userData = localStorage.getItem("userData");
      if (userData && userData.trim() !== "") {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error("Error parsing userData from localStorage:", error);
      // Clear the corrupted data
      localStorage.removeItem("userData");
      setUser(null);
    }
  }, []);

  useQuery({
    queryKey: ["countries"],
    queryFn: () =>
      apiGetCountries().then((res) => {
        setCountries(res.data);
        return res.data;
      }),
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    retry: 3,
    refetchOnWindowFocus: false,
  });

  return <appContext.Provider value={{countries, user, setUser}}>{children}</appContext.Provider>;
};
