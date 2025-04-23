"use client";

import PageHeroSection from "@/components/PageHeroSection";
import ExploreFilterHeader from "./_components/ExploreFilterHeader";
import FindProjectSection from "./_components/FindProjectSection";
import ExploreMap from "./_components/ExploreMap";
import {FormProvider, useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import useQuery from "@/hooks/useQuery";
import {apiGetExplore} from "./_api";

const schema = Yup.object().shape({
  country_id: Yup.number()
    // .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  city_id: Yup.number()
    // .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
  category_id: Yup.number()
    // .nullable()
    .transform((value) => (isNaN(value) ? undefined : value)),
});

const ExplorePage = () => {
  const form = useForm<IBaseFilterForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      country_id: undefined,
      city_id: undefined,
      category_id: undefined,
    },
  });

  const {
    refetch,
    isFetching: isFetchingExplore,
    data,
  } = useQuery({
    queryKey: ["explore"],
    queryFn: () => {
      const values = form.getValues();
      return apiGetExplore({
        country_id: values.country_id,
        city_id: values.city_id,
        category_id: values.category_id,
      });
    },
    enabled: false,
  });

  const exploreData = data?.data || [];

  return (
    <>
      <PageHeroSection title='page_hero_title.explore' pageName='page_title.explore' />
      <FormProvider {...form}>
        <ExploreFilterHeader refetch={refetch} isFetchingExplore={isFetchingExplore} />
        <ExploreMap exploreData={exploreData} />
      </FormProvider>
      <FindProjectSection />
    </>
  );
};

export default ExplorePage;
