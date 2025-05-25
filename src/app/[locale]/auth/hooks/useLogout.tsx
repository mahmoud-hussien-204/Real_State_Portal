"use client";
import useMutation from "@/hooks/useMutation";
import {apiLogout} from "@/api";
import {useRouter} from "next/navigation";

export function useLogout() {
  const router = useRouter();
  const {mutate: logout, isPending: isLoggingOut} = useMutation({
    mutationFn: () => apiLogout(),
    onSuccess: () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userData");
      router.replace("/auth/login");
    },
  });

  return {
    logout,
    isLoggingOut,
  };
}
