import React, {useEffect, useMemo, useRef, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import SearchInput from "@/components/custom-ui/SearchInput";
import mapImage from "@/app/assets/projects/map.png";
import Button from "@/components/Button";
import {VscDebugRestart} from "react-icons/vsc";
import {useFormContext} from "react-hook-form";
import {IProjectsFiltersForm} from "../../_interfaces";
import {IoIosPricetag} from "react-icons/io";
import useAppProvider from "@/hooks/useAppProvider";
import useCategories from "../../../hooks/useCategories";
import useDevelopers from "../../../hooks/useDevelopers";
import useUnits from "../../../hooks/useUnits";
import {useTranslations} from "next-intl";
import {QueryObserverResult, RefetchOptions} from "@tanstack/react-query";
import SelectInput from "@/components/custom-ui/SelectInput";
import useCitiesInCountry from "../../../hooks/useCitiesInCountry";
import useAreasInCity from "../../../hooks/useAreasInCities";
import {CgSpinner} from "react-icons/cg";

const PropertyFilters = ({
  refetch,
}: {
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<IResponse<IOffer[]>, IError>>;
}) => {
  const {watch, register, reset, setValue, handleSubmit} = useFormContext<IProjectsFiltersForm>();
  const t = useTranslations();

  const [rangePriceError, setRangePriceError] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const {countries} = useAppProvider();
  const {categories, isFetchingCategories} = useCategories();
  const {developers, isFetchingDevelopers} = useDevelopers();
  const {units, isFetchingUnits} = useUnits();
  const searchValue = watch("search") || "";
  const countryId = watch("country_id");
  const cityId = watch("city_id");
  const priceFrom = watch("price_from");
  const priceTo = watch("price_to");
  const categoryId = watch("category_id");
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

  const {cities, isFetchingCities} = useCitiesInCountry(countryId);
  const {areas, isFetchingAreas} = useAreasInCity(cityId);

  const countryOptions = useMemo(
    () =>
      countries?.map((country) => ({
        label: country.name_en,
        value: country.id,
      })) || [],
    [countries]
  );

  const cityOptions = useMemo(
    () =>
      cities?.map((city) => ({
        label: city.name_en,
        value: city.id,
      })) || [],
    [cities]
  );

  const areaOptions = useMemo(
    () => areas?.map((area) => ({label: area.name_en, value: area.id})) || [],
    [areas]
  );

  const developerOptions = useMemo(
    () =>
      developers.map((dev) => ({
        label: dev.name_en,
        value: dev.id,
      })),
    [developers]
  );

  const unitOptions = useMemo(
    () =>
      units.map((unit) => ({
        label: unit.name_en,
        value: unit.id,
      })),
    [units]
  );

  const categoryOptions = useMemo(
    () =>
      categories.map((cat) => ({
        label: cat.name_en,
        value: cat.id,
      })),
    [categories]
  );

  const currentCategorySubCategories = useMemo(() => {
    const currentCategory = categories.find((cat) => cat.id === categoryId);
    return (
      currentCategory?.sub.map((subCat) => ({
        label: subCat.name_en,
        value: subCat.id,
      })) || []
    );
  }, [categories, categoryId]);

  // Handle search input changes with debounce
  useEffect(() => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      updateURLParams("search", searchValue);
    }, 100); // 100ms debounce

    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, [searchValue]);

  // Helper function to update URL parameters
  const updateURLParams = (key: string, value: string | null) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (value && value.trim() !== "") {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }

    router.replace(`?${newParams.toString()}`, {scroll: false});
  };

  function handleValueChange(fieldName: keyof IProjectsFiltersForm, value: string | undefined) {
    // Convert empty string to undefined for proper reset behavior
    const processedValue = value === "" ? undefined : value;

    setValue(fieldName, processedValue);

    if (processedValue !== undefined && processedValue !== null) {
      updateURLParams(fieldName, processedValue.toString());
    } else {
      updateURLParams(fieldName, null);
    }
  }

  const handleReset = () => {
    // Reset form values
    reset();

    updateURLParams("search", "");

    // Also clear URL parameters by replacing with empty search
    router.replace(window.location.pathname, {scroll: false});
  };

  const onSubmit = (data: IProjectsFiltersForm) => {
    console.log("Form submitted:", data);
    refetch();
  };

  return (
    <form
      className='flex w-full flex-col gap-[1.5rem] rounded-xl bg-white px-6 py-6'
      onSubmit={handleSubmit(onSubmit)}
    >
      <SearchInput
        placeholder='Project Name'
        wrapperClassName='w-full'
        value={watch("search") || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          // This properly handles both the register's onChange and our custom URL update
          register("search").onChange(e); // This updates the form value
          setValue("search", e.target.value); // Make sure the form value is updated
        }}
      />
      <div
        className='flex h-[15rem] w-full items-end justify-center rounded-xl bg-cover bg-center pb-[1.5rem] lg:aspect-square lg:h-auto'
        style={{
          backgroundImage: `url(${mapImage.src})`,
        }}
      >
        <Button className='h-[3.5rem] w-[11rem]' type='button'>
          Show Map
        </Button>
      </div>
      <div className='flex w-full flex-col gap-1.5rem'>
        <SelectInput
          placeholder='Country'
          options={countryOptions}
          value={watch("country_id")?.toString() || ""}
          onValueChange={(value) => handleValueChange("country_id", value)}
        />

        <SelectInput
          placeholder='City'
          options={cityOptions}
          icon={isFetchingCities && <CgSpinner className='animate-spin' />}
          disabled={!countryId || countryId <= 0 || isFetchingCities}
          value={watch("city_id")?.toString() || ""}
          onValueChange={(value) => handleValueChange("city_id", value)}
        />
        <SelectInput
          placeholder='Area'
          options={areaOptions}
          icon={isFetchingAreas && <CgSpinner className='animate-spin' />}
          disabled={!cityId || cityId <= 0 || isFetchingAreas}
          value={watch("area_id")?.toString() || ""}
          onValueChange={(value) => handleValueChange("area_id", value)}
        />
        <SelectInput
          placeholder='Developer'
          options={developerOptions}
          icon={isFetchingDevelopers && <CgSpinner className='animate-spin' />}
          value={watch("developer_id")?.toString() || ""}
          onValueChange={(value) => handleValueChange("developer_id", value)}
        />

        <SelectInput
          placeholder='Unit Type'
          options={unitOptions}
          icon={isFetchingUnits && <CgSpinner className='animate-spin' />}
          value={watch("unit_type")?.toString() || ""}
          onValueChange={(value) => handleValueChange("unit_type", value)}
        />

        <SelectInput
          placeholder='Category'
          options={categoryOptions}
          icon={isFetchingCategories && <CgSpinner className='animate-spin' />}
          value={watch("category_id")?.toString() || ""}
          onValueChange={(value) => handleValueChange("category_id", value)}
        />

        {currentCategorySubCategories.length > 0 && (
          <SelectInput
            placeholder='Sub Category'
            options={currentCategorySubCategories}
            value={watch("sub_category_id")?.toString() || ""}
            onValueChange={(value) => handleValueChange("sub_category_id", value)}
          />
        )}
      </div>

      {/* Price range */}
      <div className='w-full'>
        <label className='mb-3 flex items-center gap-3 text-18'>
          <IoIosPricetag className='text-colors-primary-colors-600' />
          {t("common.price")}
        </label>
        <div className='grid grid-cols-2 gap-3'>
          <div className='flex flex-col'>
            <input
              min={0}
              type='number'
              placeholder={t("common.from") as string}
              className={`input rounded-full border-input text-colors-grey-colors-1500 ${rangePriceError.length > 0 ? "border-red-500" : ""}`}
              {...register("price_from", {
                valueAsNumber: true,
                // min: {
                //   value: 1,
                //   message: t("common.price_negative_error"),
                // },
              })}
              onChange={(e) => {
                register("price_from").onChange(e);
                if (e.target.value && priceTo) {
                  if (Number(e.target.value) > priceTo)
                    setRangePriceError("From price must be less than or equal to To price");
                  else setRangePriceError("");
                }
                updateURLParams("price_from", e.target.value);
              }}
            />
          </div>
          <div className='flex flex-col'>
            <input
              type='number'
              placeholder={t("common.to") as string}
              min={0}
              className={`input rounded-full border-input text-colors-grey-colors-1500 ${rangePriceError.length > 0 ? "border-red-500" : ""}`}
              {...register("price_to", {
                valueAsNumber: true,
                // min: {
                //   value: 1,
                //   message: t("common.price_negative_error"),
                // },
              })}
              onChange={(e) => {
                register("price_to").onChange(e);
                if (e.target.value && priceFrom) {
                  if (priceFrom > Number(e.target.value))
                    setRangePriceError("From price must be less than or equal to To price");
                  else setRangePriceError("");
                }
                updateURLParams("price_to", e.target.value);
              }}
            />
          </div>
        </div>
        {rangePriceError.length > 0 && (
          <div className='mx-auto mt-1'>
            <span className='text-xs text-red-500'>{rangePriceError}</span>
          </div>
        )}
      </div>
      <div className='flex w-full justify-between'>
        <Button type='submit' className='w-[63%] rounded-full'>
          {t("projects.find_property")}
        </Button>
        <Button
          type='button'
          variant='outline'
          className='flex w-[35%] flex-shrink-0 items-center gap-2 rounded-full'
          onClick={handleReset}
        >
          <VscDebugRestart className='text-colors-primary-colors-600' />
          <span className='block'>{t("projects.reset")}</span>
        </Button>
      </div>
    </form>
  );
};

export default PropertyFilters;
