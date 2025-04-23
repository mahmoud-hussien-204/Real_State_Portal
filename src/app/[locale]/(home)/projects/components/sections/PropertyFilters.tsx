import React, {useEffect, useRef, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import FilterDropdown from "../Dropdowns/FilterDropdown";
import SearchInput from "@/components/custom-ui/SearchInput";
import mapImage from "@/app/assets/projects/map.png";
import Button from "@/components/Button";
import {VscDebugRestart} from "react-icons/vsc";
import {useFormContext} from "react-hook-form";
import {IProjectsFiltersForm} from "../../_interfaces";
import {IoIosPricetag} from "react-icons/io";
import useAppProvider from "@/hooks/useAppProvider";
import {apiGetCitiesOfCountry} from "../../../_api";
import useCategories from "../../../hooks/useCategories";
import useDevelopers from "../../../hooks/useDevelopers";
import useUnits from "../../../hooks/useUnits";
import {useTranslations} from "next-intl";
import {QueryObserverResult, RefetchOptions} from "@tanstack/react-query";

const PropertyFilters = ({
  refetch,
}: {
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<IResponse<IOffer[]>, IError>>;
}) => {
  const {watch, register, reset, setValue, handleSubmit} = useFormContext<IProjectsFiltersForm>();
  const t = useTranslations();
  const [cityOptions, setCityOptions] = useState<ICity[]>([]);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [rangePriceError, setRangePriceError] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const {countries} = useAppProvider();
  const {categories, isFetchingCategories} = useCategories();
  const {developers, isFetchingDevelopers} = useDevelopers();
  const {units, isFetchingUnits} = useUnits();
  const selectedCountries = watch("country_ids") || [];
  const searchValue = watch("search") || "";
  const priceFrom = watch("price_from");
  const priceTo = watch("price_to");
  const citiesCache = useRef<Map<number, ICity[]>>(new Map());
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

  // Load form values from URL on mount
  useEffect(() => {
    const initializeFormFromURL = () => {
      // Handle country IDs
      const countryParam = searchParams.get("country");
      if (countryParam) {
        const countryIds = countryParam.split(",").map(Number);
        setValue("country_ids", countryIds);
      }

      // Handle city IDs
      const cityParam = searchParams.get("city");
      if (cityParam) {
        const cityIds = cityParam.split(",").map(Number);
        setValue("city_ids", cityIds);
      }

      // Handle other parameters
      const developerParam = searchParams.get("developer");
      if (developerParam) {
        const developerIds = developerParam.split(",").map(Number);
        setValue("developer_ids", developerIds);
      }

      const unitParam = searchParams.get("unit");
      if (unitParam) {
        const unitIds = unitParam.split(",").map(Number);
        setValue("unit_types", unitIds);
      }

      const categoryParam = searchParams.get("category");
      if (categoryParam) {
        const categoryIds = categoryParam.split(",").map(Number);
        setValue("category_ids", categoryIds);
      }

      // Handle search and price params
      const searchParam = searchParams.get("search");
      if (searchParam) {
        setValue("search", searchParam);
      }

      const priceFromParam = searchParams.get("price_from");
      if (priceFromParam) {
        setValue("price_from", Number(priceFromParam));
      }

      const priceToParam = searchParams.get("price_to");
      if (priceToParam) {
        setValue("price_to", Number(priceToParam));
      }
    };

    initializeFormFromURL();
  }, [setValue, searchParams]);

  // Fetch cities when selected countries change
  useEffect(() => {
    const fetchCitiesForCountries = async () => {
      if (selectedCountries.length === 0) {
        setCityOptions([]);
        return;
      }

      setIsLoadingCities(true);
      const newCities: ICity[] = [];

      for (const countryId of selectedCountries) {
        // Check cache first
        if (citiesCache.current.has(countryId)) {
          newCities.push(...citiesCache.current.get(countryId)!);
        } else {
          try {
            const citiesData = await apiGetCitiesOfCountry(countryId);
            if (citiesData?.data) {
              citiesCache.current.set(countryId, citiesData.data);
              newCities.push(...citiesData.data);
            }
          } catch (error) {
            console.error(`Failed to fetch cities for country ${countryId}:`, error);
          }
        }
      }

      setCityOptions(newCities);
      setIsLoadingCities(false);
    };

    fetchCitiesForCountries();
  }, [selectedCountries]);

  // Handle search input changes with debounce
  useEffect(() => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      updateURLParams("search", searchValue);
    }, 500); // 500ms debounce

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

  const handleReset = () => {
    // Reset form values
    reset();

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
        {...register("search")}
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
        <FilterDropdown
          name='Country'
          filterName='country'
          options={countries.map((c) => ({label: c.name_en, value: c.id}))}
        />
        <FilterDropdown
          name='City'
          filterName='city'
          options={cityOptions.map((c) => ({label: c.name_en, value: c.id}))}
          isLoading={isLoadingCities}
        />
        <FilterDropdown
          name='Developer'
          filterName='developer'
          options={developers.map((dev) => ({label: dev.name_en, value: dev.id}))}
          isLoading={isFetchingDevelopers}
        />

        <FilterDropdown
          name='Unit Type'
          filterName='unit'
          options={units.map((unit) => ({label: unit.name_en, value: unit.id}))}
          isLoading={isFetchingUnits}
        />

        <FilterDropdown
          name='Category'
          filterName='category'
          options={categories.map((cat) => ({label: cat.name_en, value: cat.id}))}
          isLoading={isFetchingCategories}
        />
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
