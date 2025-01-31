"use client";
import Dropdown from "@/components/custom-ui/Dropdown";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {BiCheck} from "react-icons/bi";
import {FiChevronDown} from "react-icons/fi";
import {twMerge} from "tailwind-merge";

type Props = {
  name: string;
  filterName: string;
  options: string[];
};

const FilterDropdown = ({name, filterName, options}: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // Initialize selected values from URL params
  useEffect(() => {
    const params = searchParams.get(filterName);
    if (params) {
      setSelectedValues(params.split(","));
    }
  }, [searchParams, filterName]);

  const handleCheckboxChange = (option: string) => {
    let newSelectedValues;
    if (selectedValues.includes(option)) {
      // Remove the option if it's already selected
      newSelectedValues = selectedValues.filter((value) => value !== option);
    } else {
      // Add the option if it's not selected
      newSelectedValues = [...selectedValues, option];
    }
    setSelectedValues(newSelectedValues);

    // Update the URL search params
    const newParams = new URLSearchParams(searchParams.toString());
    if (newSelectedValues.length > 0) {
      newParams.set(filterName, newSelectedValues.join(","));
    } else {
      newParams.delete(filterName);
    }
    router.push(`?${newParams.toString()}`, {scroll: false});
  };

  return (
    <Dropdown
      renderOpenButton={(handleToggle) => (
        <button
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
      {options.map((option) => (
        <li
          key={option}
          className='flex items-center justify-between pe-[1.5rem]'
          onClick={() => handleCheckboxChange(option)}
        >
          {option}

          <div
            className={twMerge(
              "border-input flex size-[1.2rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full border bg-white",
              selectedValues.includes(option) && "bg-colors-primary-colors-400"
            )}
          >
            <BiCheck
              className={twMerge("text-[#8B8B8B]", selectedValues.includes(option) && "text-white")}
            />
          </div>
        </li>
      ))}
    </Dropdown>
  );
};

export default FilterDropdown;
