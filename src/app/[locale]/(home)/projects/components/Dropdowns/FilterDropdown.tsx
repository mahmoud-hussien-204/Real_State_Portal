"use client";
import Dropdown from "@/components/custom-ui/Dropdown";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect} from "react";
import {BiCheck} from "react-icons/bi";
import {FiChevronDown} from "react-icons/fi";
import {twMerge} from "tailwind-merge";
import {useFormContext} from "react-hook-form";

type Props = {
  name: string;
  filterName: string;
  options: {label: string; value: number | string}[];
  isLoading?: boolean;
};

const FilterDropdown = ({name, filterName, options, isLoading = false}: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {setValue, watch} = useFormContext();
  const formFieldName = `${filterName}_ids`;
  const selectedValues = watch(formFieldName) || [];

  // Initialize form values from URL params on mount
  useEffect(() => {
    const params = searchParams.get(filterName);
    if (params) {
      const paramValues = params.split(",").map((value) =>
        // Try to convert to number if possible
        isNaN(Number(value)) ? value : Number(value)
      );
      setValue(formFieldName, paramValues);
    }
  }, []);

  const handleCheckboxChange = (optionValue: number | string) => {
    let newSelectedValues;

    // Check if the value exists in the current selection
    const valueExists = selectedValues.some((value: number | string) => value === optionValue);

    if (valueExists) {
      // Remove the option if it's already selected
      newSelectedValues = selectedValues.filter((value: number | string) => value !== optionValue);
    } else {
      // Add the option if it's not selected
      newSelectedValues = [...selectedValues, optionValue];
    }

    // Update form state
    setValue(formFieldName, newSelectedValues);

    // Update URL without causing a page reload
    const newParams = new URLSearchParams(searchParams.toString());
    if (newSelectedValues.length > 0) {
      newParams.set(filterName, newSelectedValues.join(","));
    } else {
      newParams.delete(filterName);
    }

    router.replace(`?${newParams.toString()}`, {scroll: false});
  };

  return (
    <Dropdown
      renderOpenButton={(handleToggle) => (
        <button
          type='button'
          className='flex w-full items-center justify-between rounded-full border border-[#DFDFDF] bg-white px-4 py-2 text-colors-grey-colors-900 shadow-sm'
          onClick={handleToggle}
        >
          {name}
          <FiChevronDown className='size-[1.3rem] text-[#7A7A7A]' />
        </button>
      )}
      menuClassName='px-4 left-0 w-full rounded-[20px] py-5 gap-5 shadow-md'
      closeOnSelect={false}
    >
      {isLoading ? (
        <li className='py-2 text-center text-gray-500'>Loading...</li>
      ) : options.length === 0 ? (
        <li className='py-2 text-center text-gray-500'>No options available</li>
      ) : (
        options.map((option) => (
          <li
            key={`${option.label}-${option.value}`}
            className='flex cursor-pointer items-center justify-between py-2 pe-[1.5rem]'
            onClick={() => handleCheckboxChange(option.value)}
          >
            {option.label}

            <div
              className={twMerge(
                "flex size-[1.2rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-input bg-white",
                selectedValues.includes(option.value) && "bg-colors-primary-colors-400"
              )}
            >
              <BiCheck
                className={twMerge(
                  "text-[#8B8B8B]",
                  selectedValues.includes(option.value) && "text-white"
                )}
              />
            </div>
          </li>
        ))
      )}
    </Dropdown>
  );
};

export default FilterDropdown;
