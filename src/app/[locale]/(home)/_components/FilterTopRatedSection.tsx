"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";

import SelectInput from "@/components/custom-ui/SelectInput";

import useAppProvider from "@/hooks/useAppProvider";

import {useLocale, useTranslations} from "next-intl";
import {useFormContext} from "react-hook-form";

import {IoSearch} from "react-icons/io5";

import {ITopRatedForm} from "../_interfaces";
import useCitiesInCountry from "../hooks/useCitiesInCountry";
import useAreasInCity from "../hooks/useAreasInCities";
import {CgSpinner} from "react-icons/cg";
import {QueryObserverResult, RefetchOptions} from "@tanstack/react-query";

interface IProps {
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<IResponse<IOffer[]>, IError>>;
}

const FilterTopRatedSection = ({refetch}: IProps) => {
  const t = useTranslations();
  const locale = useLocale();
  const {countries} = useAppProvider();

  const {
    setValue,
    handleSubmit,
    watch,
    formState: {isDirty},
  } = useFormContext<ITopRatedForm>();

  const countryId = watch("country_id");
  const cityId = watch("city_id");
  const areaId = watch("area_id");

  // Fetch cities based on selected country
  const {cities, isFetchingCities} = useCitiesInCountry(countryId);

  // Fetch areas based on selected city
  const {areas, isFetchingAreas} = useAreasInCity(cityId);

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

  function handleChangeCountry(value: string) {
    setValue("country_id", parseInt(value), {shouldDirty: true});
    setValue("city_id", undefined);
    setValue("area_id", undefined);
  }

  function handleChangeCity(value: string) {
    setValue("city_id", parseInt(value), {shouldDirty: true});
    setValue("area_id", undefined);
  }

  function handleChangeArea(value: string) {
    setValue("area_id", parseInt(value), {shouldDirty: true});
  }
  function submitHandler(data: ITopRatedForm) {
    console.log("data", data);
    refetch();
  }

  return (
    <Container>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className='relative z-20 mb-4 flex flex-wrap items-center gap-1rem rounded-[1.75rem] rounded-ss-none bg-colors-grey-colors-100 px-1rem py-[1.31rem] shadow-[0px_10px_20px_0px_rgba(239,64,64,0.05)] sm:px-[1.5rem]'
      >
        <SelectInput
          placeholder={t("common.country")}
          options={countryOptions}
          className='w-[30%] lg:w-[25%]'
          onValueChange={handleChangeCountry}
          value={countryId > 0 ? countryId.toString() : undefined}
        />
        <SelectInput
          placeholder={t("common.city")}
          options={cityOptions}
          className='w-[30%] lg:w-[25%]'
          icon={isFetchingCities ? <CgSpinner className='animate-spin' /> : undefined}
          disabled={countryId <= 0 || isFetchingCities}
          onValueChange={handleChangeCity}
          value={cityId ? cityId.toString() : undefined}
        />
        <SelectInput
          placeholder={t("common.area")}
          options={areaOptions}
          className='w-[30%] lg:w-[25%]'
          icon={isFetchingAreas ? <CgSpinner className='animate-spin' /> : undefined}
          disabled={!cityId || cityId < 0 || isFetchingCities}
          onValueChange={handleChangeArea}
          value={areaId ? areaId.toString() : undefined}
        />

        <Button
          disabled={!isDirty}
          type='submit'
          variant='primary-600'
          className='min-w-[12rem] rounded-full'
        >
          {t("common.search")}
          <div className='flex size-[1.5rem] items-center justify-center rounded-full bg-white'>
            <IoSearch className='text-colors-primary-colors-600' />
          </div>
        </Button>
      </form>
    </Container>
  );
};

export default FilterTopRatedSection;
