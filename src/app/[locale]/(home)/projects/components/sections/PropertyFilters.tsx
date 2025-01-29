import React from "react";
import FilterDropdown from "../Dropdowns/FilterDropdown";
import {fakePropertyFilters} from "@/constants";
import SearchInput from "@/components/custom-ui/SearchInput";
import mapImage from "@/app/assets/projects/map.png";
import Button from "@/components/Button";
import PriceFilterInput from "../Inputs/PriceFilterInput";
import {translate} from "@/helpers/translate";
import {VscDebugRestart} from "react-icons/vsc";
const PropertyFilters = () => {
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
      <PriceFilterInput />
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
