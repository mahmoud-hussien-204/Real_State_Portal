"use client";

import {QueryClientProvider} from "@tanstack/react-query";
import {getQueryClient} from "./get-query-client";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";

export default function Providers({children}: {children: React.ReactNode}) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ToastContainer />
    </QueryClientProvider>
  );
}
