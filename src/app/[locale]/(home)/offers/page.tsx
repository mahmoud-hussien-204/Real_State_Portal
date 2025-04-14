'use client';

import PageHeroSection from "@/components/PageHeroSection";

import FilterHeader from "./components/OffersFilterHeader";

import TopRelatedProjects from "../_components/TopRelatedProjects";

import Partners from "../_components/Partners";

import OfferListingSection from "./components/OfferListingSection";
import {useEffect} from "react";
import {FormProvider, useForm} from "react-hook-form";

import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {IOffersForm} from "./types";
import useQuery from "@/hooks/useQuery";
import {apiGetOffers} from "./_api";

const schema = Yup.object().shape({
  country_id: Yup.number().min(1, "country does not exist"),
  city_id: Yup.number().min(1, "city does not exist"),
  area_id: Yup.number().min(1, "area does not exist"),
  category_id: Yup.number().min(1, "category is required"),
});

const OffersPage = () => {
  const form = useForm<IOffersForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      country_id: undefined,
      city_id: undefined,
      area_id: undefined,
      category_id: undefined,
    },
  });

  const {
    refetch,
    isFetching: isFetchingOffers,
    data: offersData,
  } = useQuery({
    queryKey: ["offers"],
    queryFn: () =>
      apiGetOffers({
        country_id: form.getValues("country_id"),
        city_id: form.getValues("city_id"),
        area_id: form.getValues("area_id"),
        category_id: form.getValues("category_id"),
      }),
    enabled: false,
  });

  const offers = offersData?.data || [];
  const offersCount = offersData?.meta?.total || 0;

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <PageHeroSection title='page_hero_title.offers' pageName='page_title.offers' />
      <FormProvider {...form}>
        <FilterHeader isFetchingOffers={isFetchingOffers} refetch={refetch} />
        <OfferListingSection
          offers={offers}
          isLoadingOffers={isFetchingOffers}
          offersCount={offersCount}
        />
      </FormProvider>
      <TopRelatedProjects />
      <Partners />
    </>
  );
};

export default OffersPage;
