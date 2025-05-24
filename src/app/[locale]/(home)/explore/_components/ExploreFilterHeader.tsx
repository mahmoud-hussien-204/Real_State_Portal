"use client";

import Button from "@/components/Button";
import SelectInput from "@/components/custom-ui/SelectInput";

import {QueryObserverResult, RefetchOptions} from "@tanstack/react-query";
import {useLocale, useTranslations} from "next-intl";
import {IoSearch} from "react-icons/io5";
import {IExploreResponse} from "../_interfaces";
import {useFormContext} from "react-hook-form";
import {useRouter, useSearchParams} from "next/navigation";
import useAppProvider from "@/hooks/useAppProvider";
import useCitiesInCountry from "../../hooks/useCitiesInCountry";
import useCategories from "../../hooks/useCategories";
import {CgSpinner} from "react-icons/cg";

interface IProps {
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<IResponse<IExploreResponse[]>, IError>>;
  isFetchingExplore: boolean;
}

const ExploreFilterHeader = ({refetch, isFetchingExplore}: IProps) => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const {countries} = useAppProvider();
  const {setValue, handleSubmit, watch, reset} = useFormContext<IBaseFilterForm>();

  const countryId = watch("country_id");
  const cityId = watch("city_id");
  const areaId = watch("area_id");
  const categoryId = watch("category_id");

  // Fetch cities based on selected country
  const {cities, isFetchingCities} = useCitiesInCountry(countryId);

  // Fetch areas based on selected city
  // const {areas, isFetchingAreas} = useAreasInCity(cityId);

  // Fetch categories
  const {categories, isFetchingCategories} = useCategories();

  // Process country options
  const countryOptions =
    countries?.map((country) => ({
      label: locale === "en" ? country.name_en : country.name_ar,
      value: country.id,
    })) || [];

  // Process city options
  const cityOptions =
    cities?.map((city) => ({
      label: locale === "en" ? city.name_en : city.name_ar,
      value: city.id,
    })) || [];

  // Process area options
  // const areaOptions =
  //   areas?.map((area) => ({
  //     label: locale === "en" ? area.name_en : area.name_ar,
  //     value: area.id,
  //   })) || [];

  // Process category options
  const categoryOptions =
    categories?.map((category) => ({
      label: locale === "en" ? category.name_en : category.name_ar,
      value: category.id,
    })) || [];

  // Update URL with current form values
  const updateURL = (formValues: Partial<IBaseFilterForm>) => {
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
    // setValue("area_id", undefined);

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
    // setValue("area_id", undefined);

    // Update URL with all current values
    updateURL({
      country_id: countryId,
      city_id: cityIdValue,
      area_id: undefined,
    });
  };

  // const handleChangeArea = (value: string) => {
  //   const areaIdValue = parseInt(value);

  //   // Update form value
  //   setValue("area_id", areaIdValue);

  //   // Update URL with all current values
  //   updateURL({
  //     country_id: countryId,
  //     city_id: cityId,
  //     area_id: areaIdValue,
  //   });
  // };

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

  const onSubmit = () => {
    refetch();

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='relative z-[200] mx-auto mt-[-3rem] flex max-w-[90%] flex-wrap items-center justify-between gap-4 rounded-lg bg-white px-5 py-5 shadow-md lg:max-w-[55rem] lg:flex-nowrap lg:rounded-full'
    >
      <SelectInput
        placeholder={t("common.country")}
        options={countryOptions}
        onValueChange={handleChangeCountry}
        value={countryId ? countryId.toString() : undefined}
      />
      <SelectInput
        placeholder={t("common.city")}
        options={cityOptions}
        onValueChange={handleChangeCity}
        value={cityId ? cityId.toString() : undefined}
        icon={isFetchingCities ? <CgSpinner className='animate-spin' /> : undefined}
        disabled={!countryId || countryId <= 0 || isFetchingCities}
      />
      <SelectInput
        placeholder={t("common.category_type")}
        options={categoryOptions}
        icon={isFetchingCategories ? <CgSpinner className='animate-spin' /> : undefined}
        onValueChange={handleChangeCategory}
        value={categoryId ? categoryId.toString() : undefined}
      />
      <Button
        type='submit'
        className='min-w-[12rem] rounded-full'
        isLoading={isFetchingExplore}
        disabled={isFetchingExplore || (!countryId && !cityId && !categoryId)}
      >
        <div className='flex size-[1.5rem] items-center justify-center rounded-full bg-white'>
          <IoSearch className='text-colors-primary-colors-600' />
        </div>
      </Button>
    </form>
  );
};

export default ExploreFilterHeader;
