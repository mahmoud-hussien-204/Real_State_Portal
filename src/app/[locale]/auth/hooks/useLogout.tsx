import useMutation from "@/hooks/useMutation";

import {apiLogout} from "@/api";

export function useLogout() {
  const {mutate: logout, isPending: isLoggingOut} = useMutation({
    mutationFn: () => apiLogout(),
    onSuccess: () => {
      localStorage.clear();
      window.location.replace("/auth/login");
    },
  });

  return {
    logout,
    isLoggingOut,
  };
}
