"use client";

import Button from "@/components/Button";
import SelectInput from "@/components/custom-ui/SelectInput";
import {translate} from "@/helpers/translate";
import {useLocale, useTranslations} from "next-intl";
import {useForm} from "react-hook-form";
import {IoSearch} from "react-icons/io5";
import {CgSpinner} from "react-icons/cg";
import {IOffersForm} from "../types";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
import useAppProvider from "@/hooks/useAppProvider";
import useQuery from "@/hooks/useQuery";
import {apiGetAreasOfCity, apiGetCategoryTypes, apiGetCitiesOfCountry} from "../../_api";
import {Dispatch, SetStateAction, useEffect} from "react";
import {apiGetOffers} from "../_api";

const schema = Yup.object().shape({
  country_id: Yup.number().min(1, "country does not exist").required("country is required"),
  city_id: Yup.number().min(1, "city does not exist"),
  area_id: Yup.number().min(1, "area does not exist"),
  category_id: Yup.number().min(1, "category is required"),
});

const OffersFilterHeader = ({
  setOffers,
  setIsLoadingOffers,
}: {
  setOffers: Dispatch<SetStateAction<IOffer[]>>;
  setIsLoadingOffers: Dispatch<SetStateAction<boolean>>;
}) => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const {countries} = useAppProvider();

  // Extract initial values from URL params if they exist
  const initialCountryId = parseInt(searchParams.get("country_id") || "-1");
  const initialCityId = parseInt(searchParams.get("city_id") || "-1");
  const initialAreaId = parseInt(searchParams.get("area_id") || "-1");
  const initialCategoryId = parseInt(searchParams.get("category_id") || "-1");

  const {setValue, handleSubmit, watch, reset} = useForm<IOffersForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      country_id: initialCountryId > 0 ? initialCountryId : undefined,
      city_id: initialCityId > 0 ? initialCityId : undefined,
      area_id: initialAreaId > 0 ? initialAreaId : undefined,
      category_id: initialCategoryId > 0 ? initialCategoryId : undefined,
    },
  });

  const countryId = watch("country_id");
  const cityId = watch("city_id");
  const areaId = watch("area_id");
  const categoryId = watch("category_id");

  // Fetch cities based on selected country
  const {data: citiesData, isFetching: isFetchingCities} = useQuery({
    queryKey: ["offers-cities", countryId],
    queryFn: () => apiGetCitiesOfCountry(countryId),
    enabled: !!countryId && countryId > 0,
  });

  // Fetch areas based on selected city
  const {data: areasData, isFetching: isFetchingAreas} = useQuery({
    queryKey: ["offers-areas", cityId],
    queryFn: () => apiGetAreasOfCity(cityId as number),
    enabled: !!cityId && cityId > 0,
  });

  const {data: categoriesData, isFetching: isFetchingCategories} = useQuery({
    queryKey: ["offers-categories"],
    queryFn: apiGetCategoryTypes,
  });

  const {
    refetch,
    isFetching: isFetchingOffers,
    data: offersData,
  } = useQuery({
    queryKey: ["offers"],
    queryFn: () =>
      apiGetOffers({
        country_id: countryId,
        city_id: cityId,
        area_id: areaId,
        category_id: categoryId,
      }),
    enabled: false,
  });

  // Process city options
  const cityOptions =
    citiesData?.data?.map((city) => ({
      label: locale === "en" ? city.name_en : city.name_ar,
      value: city.id,
    })) || [];

  // Process area options
  const areaOptions =
    areasData?.data?.map((area) => ({
      label: locale === "en" ? area.name_en : area.name_ar,
      value: area.id,
    })) || [];

  // Process category options
  const categoryOptions =
    categoriesData?.data?.map((category) => ({
      label: locale === "en" ? category.name_en : category.name_ar,
      value: category.id,
    })) || [];

  // Update URL with current form values
  const updateURL = (formValues: Partial<IOffersForm>) => {
    const params = new URLSearchParams(searchParams.toString());

    // Update params based on provided values
    Object.entries(formValues).forEach(([key, value]) => {
      if (value && value > 0) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });

    // Apply URL update
    router.push(`?${params.toString()}`, {scroll: false});
  };

  const handleChangeCountry = (value: string) => {
    const countryIdValue = parseInt(value);

    // Update form values
    setValue("country_id", countryIdValue);
    setValue("city_id", undefined); // Use undefined instead of -1
    setValue("area_id", undefined);

    // Update URL with all current values
    updateURL({
      country_id: countryIdValue,
      city_id: undefined,
      area_id: undefined,
    });
  };

  const handleChangeCity = (value: string) => {
    const cityIdValue = parseInt(value);

    // Update form values
    setValue("city_id", cityIdValue);
    setValue("area_id", undefined);

    // Update URL with all current values
    updateURL({
      country_id: countryId,
      city_id: cityIdValue,
      area_id: undefined,
    });
  };

  const handleChangeArea = (value: string) => {
    const areaIdValue = parseInt(value);

    // Update form value
    setValue("area_id", areaIdValue);

    // Update URL with all current values
    updateURL({
      country_id: countryId,
      city_id: cityId,
      area_id: areaIdValue,
    });
  };

  const handleChangeCategory = (value: string) => {
    const categoryIdValue = parseInt(value);

    // Update form value
    setValue("category_id", categoryIdValue);

    // Update URL with all current values
    updateURL({
      country_id: countryId,
      city_id: cityId,
      area_id: areaId,
      category_id: categoryIdValue,
    });
  };

  const onSubmit = (data: IOffersForm) => {
    refetch();
    // updateURL({
    //   area_id: undefined,
    //   city_id: undefined,
    //   country_id: undefined,
    //   category_id: undefined,
    // });

    reset();
  };

  useEffect(() => {
    if (offersData) {
      setOffers(offersData.data);
    } else {
      setOffers([]);
    }
  }, [offersData, setOffers]);

  useEffect(() => {
    setIsLoadingOffers(isFetchingOffers);
  }, [isFetchingOffers]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='relative z-[200] mx-auto mt-[-3rem] flex max-w-[90%] flex-wrap items-center justify-between gap-x-2 gap-y-4 rounded-lg bg-white px-5 py-5 shadow-md lg:max-w-[65rem] lg:flex-nowrap lg:rounded-full'
    >
      <SelectInput
        placeholder={t("common.country")}
        options={countries.map((country) => ({
          label: locale === "en" ? country.name_en : country.name_ar,
          value: country.id,
        }))}
        onValueChange={handleChangeCountry}
        value={countryId > 0 ? countryId.toString() : undefined}
        allowClear
      />
      <SelectInput
        placeholder={t("common.city")}
        options={cityOptions}
        onValueChange={handleChangeCity}
        value={cityId ? cityId.toString() : undefined}
        icon={isFetchingCities ? <CgSpinner className='animate-spin' /> : undefined}
        disabled={countryId <= 0 || isFetchingCities}
        allowClear
      />
      <SelectInput
        placeholder={t("common.area")}
        options={areaOptions}
        onValueChange={handleChangeArea}
        value={areaId ? areaId.toString() : undefined}
        icon={isFetchingAreas ? <CgSpinner className='animate-spin' /> : undefined}
        disabled={(cityId as number) <= 0 || isFetchingAreas}
        allowClear
      />
      <SelectInput
        placeholder={t("common.category_type")}
        options={categoryOptions}
        icon={isFetchingCategories ? <CgSpinner className='animate-spin' /> : undefined}
        onValueChange={handleChangeCategory}
        value={categoryId ? categoryId.toString() : undefined}
        allowClear
      />
      <Button
        type='submit'
        className='mx-auto flex w-[50%] flex-shrink items-center justify-center gap-2 rounded-full lg:mx-0'
        isLoading={isFetchingOffers}
        disabled={isFetchingOffers || (!countryId && !cityId && !areaId && !categoryId)}
      >
        {translate("common.search")}
        {!isFetchingOffers && (
          <div className='flex size-[1.5rem] items-center justify-center rounded-full bg-white'>
            <IoSearch className='text-colors-primary-colors-600' />
          </div>
        )}
      </Button>
    </form>
  );
};

export default OffersFilterHeader;
