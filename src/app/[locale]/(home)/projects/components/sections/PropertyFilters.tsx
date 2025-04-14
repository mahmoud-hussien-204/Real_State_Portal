import React from "react";
import FilterDropdown from "../Dropdowns/FilterDropdown";
import {fakePropertyFilters} from "@/constants";
import SearchInput from "@/components/custom-ui/SearchInput";
import mapImage from "@/app/assets/projects/map.png";
import Button from "@/components/Button";
import {translate} from "@/helpers/translate";
import {VscDebugRestart} from "react-icons/vsc";
import {useFormContext} from "react-hook-form";
import {IProjectsFiltersForm} from "../../_interfaces";
import {IoIosPricetag} from "react-icons/io";
const PropertyFilters = () => {
  const {getValues} = useFormContext<IProjectsFiltersForm>();
  console.log(getValues());
  return (
    <div className='flex w-full flex-col gap-[1.5rem] rounded-xl bg-white px-6 py-6'>
      <SearchInput placeholder='Project Name' wrapperClassName='w-full' />
      <div
        className='flex h-[15rem] w-full items-end justify-center rounded-xl bg-cover bg-center pb-[1.5rem] lg:aspect-square lg:h-auto'
        style={{
          backgroundImage: `url(${mapImage.src})`,
        }}
      >
        <Button className='h-[3.5rem] w-[11rem]'>Show Map</Button>
      </div>
      <div className='flex w-full flex-col gap-1.5rem'>
        {fakePropertyFilters.map((filter, index) => (
          <FilterDropdown
            key={index}
            name={filter.name}
            filterName={filter.filterName}
            options={filter.options}
          />
        ))}
      </div>

      {/* Price range */}
      <div className='w-full'>
        <label className='mb-3 flex items-center gap-3 text-18'>
          <IoIosPricetag className='text-colors-primary-colors-600' />
          {translate("common.price")}
        </label>
        <div className='grid grid-cols-2 gap-3'>
          <input
            type='number'
            placeholder={translate("common.from") as string}
            className='input rounded-full border-input text-colors-grey-colors-1500'
          />
          <input
            type='number'
            placeholder={translate("common.to") as string}
            className='input rounded-full border-input text-colors-grey-colors-1500'
          />
        </div>
      </div>
      <div className='flex w-full justify-between'>
        <Button className='w-[63%] rounded-full'>{translate("projects.find_property")}</Button>
        <Button
          variant='outline'
          className='flex w-[35%] flex-shrink-0 items-center gap-2 rounded-full'
        >
          <VscDebugRestart className='text-colors-primary-colors-600' />
          <span className='block'>{translate("projects.reset")}</span>
        </Button>
      </div>
    </div>
  );
};

export default PropertyFilters;
