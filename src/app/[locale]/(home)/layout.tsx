import Footer from "@/components/Footer";

import Header from "@/components/Header";
import { getQueryClient } from "../get-query-client";
import { apiGetFooterData } from "./_api";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

interface IProps extends React.PropsWithChildren {}

const layout = async ({children}: IProps) => {

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['footer'],
    queryFn: apiGetFooterData
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header />
      {children}
      <Footer />
    </HydrationBoundary>
  );
};

export default layout;
