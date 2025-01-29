import Button from "@/components/Button";
import SelectInput from "@/components/custom-ui/SelectInput";
import {translate} from "@/helpers/translate";
import {IoSearch} from "react-icons/io5";
const countryOptions = [
  {
    label: "Georgia",
    value: "georgia",
  },
  {
    label: "UAE",
    value: "uae",
  },
];
const propertyTypeOptions = [
  {
    label: "Villas",
    value: "villas",
  },
  {
    label: "Apartments",
    value: "Apartments",
  },
  {
    label: "Offices",
    value: "offices",
  },
];
const areaOptions = [
  {
    label: "100m",
    value: "100m",
  },
  {
    label: "300m",
    value: "300m",
  },
  {
    label: "500m",
    value: "500m",
  },
];

const OffersFilterHeader = () => {
  return (
    <div className='relative z-[200] mx-auto mt-[-3rem] flex max-w-[90%] flex-wrap items-center justify-between gap-y-4 rounded bg-white px-5 py-5 shadow-md lg:max-w-[55rem] lg:flex-nowrap lg:rounded-full'>
      <SelectInput placeholder='Country' options={countryOptions} className='w-[30%] lg:w-[25%]' />
      <SelectInput
        placeholder='Property Type'
        options={propertyTypeOptions}
        className='w-[30%] lg:w-[25%]'
      />
      <SelectInput placeholder='Area' options={areaOptions} className='w-[30%] lg:w-[25%]' />
      <Button className='mx-auto flex w-[50%] flex-shrink items-center justify-center gap-2 rounded-full lg:mx-0 lg:w-[8rem]'>
        {translate("common.search")}
        <div className='flex size-[1.5rem] items-center justify-center rounded-full bg-white'>
          <IoSearch className='text-colors-primary-colors-600' />
        </div>
      </Button>
    </div>
  );
};

export default OffersFilterHeader;
