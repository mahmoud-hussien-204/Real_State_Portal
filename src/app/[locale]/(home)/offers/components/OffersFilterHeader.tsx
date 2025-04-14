"use client";

import Button from "@/components/Button";
import SelectInput from "@/components/custom-ui/SelectInput";
import {translate} from "@/helpers/translate";
import {useLocale, useTranslations} from "next-intl";
import {useFormContext} from "react-hook-form";
import {IoSearch} from "react-icons/io5";
import {CgSpinner} from "react-icons/cg";
import {IOffersForm} from "../types";

import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
import useAppProvider from "@/hooks/useAppProvider";
import useCitiesInCountry from "../../hooks/useCitiesInCountry";
import useAreasInCity from "../../hooks/useAreasInCities";
import useCategories from "../../hooks/useCategories";
import {QueryObserverResult, RefetchOptions} from "@tanstack/react-query";

const OffersFilterHeader = ({
  isFetchingOffers,
  refetch,
}: {
  isFetchingOffers: boolean;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<IResponse<IOffer[]>, IError>>;
}) => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const {countries} = useAppProvider();
  const {setValue, handleSubmit, watch, reset} = useFormContext<IOffersForm>();

  const countryId = watch("country_id");
  const cityId = watch("city_id");
  const areaId = watch("area_id");
  const categoryId = watch("category_id");

  // Fetch cities based on selected country
  const {cities, isFetchingCities} = useCitiesInCountry(countryId);

  // Fetch areas based on selected city
  const {areas, isFetchingAreas} = useAreasInCity(cityId);

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
  const areaOptions =
    areas?.map((area) => ({
      label: locale === "en" ? area.name_en : area.name_ar,
      value: area.id,
    })) || [];

  // Process category options
  const categoryOptions =
    categories?.map((category) => ({
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

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='relative z-[200] mx-auto mt-[-3rem] flex max-w-[90%] flex-wrap items-center justify-between gap-x-2 gap-y-4 rounded-lg bg-white px-5 py-5 shadow-md lg:max-w-[65rem] lg:flex-nowrap lg:rounded-full'
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
        placeholder={t("common.area")}
        options={areaOptions}
        onValueChange={handleChangeArea}
        value={areaId ? areaId.toString() : undefined}
        icon={isFetchingAreas ? <CgSpinner className='animate-spin' /> : undefined}
        disabled={!cityId || cityId <= 0 || isFetchingAreas}
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
