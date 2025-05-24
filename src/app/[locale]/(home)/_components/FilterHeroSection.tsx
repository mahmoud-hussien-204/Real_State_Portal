import Button from "@/components/Button";
import Container from "@/components/Container";

import SelectInput from "@/components/custom-ui/SelectInput";

import useAppProvider from "@/hooks/useAppProvider";

import {useLocale, useTranslations} from "next-intl";
import {useFormContext} from "react-hook-form";

import {IoSearch} from "react-icons/io5";
import useCitiesInCountry from "../hooks/useCitiesInCountry";
import useAreasInCity from "../hooks/useAreasInCities";
import {CgSpinner} from "react-icons/cg";
import {useEffect} from "react";

const FilterHeroSection = () => {
  const t = useTranslations();
  const locale = useLocale();

  const {countries} = useAppProvider();
  const {watch, setValue} = useFormContext<IBaseFilterForm>();

  const countryId = watch("country_id");
  const cityId = watch("city_id");

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

  function onValueChange(value: string, field: "country_id" | "city_id" | "area_id") {
    const valueInt = parseInt(value, 10);
    setValue(field, isNaN(valueInt) ? undefined : valueInt);
  }

  useEffect(() => {
    setValue("city_id", undefined);
    setValue("area_id", undefined);
  }, [countryId, setValue]);

  useEffect(() => {
    setValue("area_id", undefined);
  }, [cityId, setValue]);
  return (
    <Container>
      <div className='relative z-20 flex -translate-y-[2.31rem] flex-wrap items-center gap-1rem rounded-[1.75rem] rounded-ss-none bg-colors-grey-colors-100 px-1rem py-[2.31rem] shadow-[0px_10px_20px_0px_rgba(239,64,64,0.05)] sm:px-[3rem]'>
        <SelectInput
          placeholder={t("common.country")}
          options={countryOptions}
          className='w-[30%] lg:w-[25%]'
          onValueChange={(value) => onValueChange(value, "country_id")}
        />
        <SelectInput
          placeholder={t("common.city")}
          options={cityOptions}
          disabled={!countryId}
          className='w-[30%] lg:w-[25%]'
          icon={isFetchingCities && <CgSpinner className='animate-spin' />}
          onValueChange={(value) => onValueChange(value, "city_id")}
        />
        <SelectInput
          placeholder={t("common.area")}
          options={areaOptions}
          disabled={!cityId}
          icon={isFetchingAreas && <CgSpinner className='animate-spin' />}
          className='w-[30%] lg:w-[25%]'
          onValueChange={(value) => onValueChange(value, "area_id")}
        />

        <Button type='submit' variant='primary-600' className='min-w-[12rem] rounded-full'>
          {t("common.search")}
          <div className='flex size-[1.5rem] items-center justify-center rounded-full bg-white'>
            <IoSearch className='text-colors-primary-colors-600' />
          </div>
        </Button>
      </div>
    </Container>
  );
};

export default FilterHeroSection;
