import Button from "@/components/Button";
import Container from "@/components/Container";

import SelectInput from "@/components/custom-ui/SelectInput";

import {fakeAreaOptions, fakeCountryOptions, fakePropertyTypeOptions} from "@/constants";

import {useTranslations} from "next-intl";

import {IoSearch} from "react-icons/io5";

const FilterHeroSection = () => {
  const t = useTranslations();
  return (
    <Container>
      <div className='relative z-20 flex -translate-y-[2.31rem] flex-wrap items-center gap-1rem rounded-[1.75rem] rounded-ss-none bg-colors-grey-colors-100 px-1rem py-[2.31rem] shadow-[0px_10px_20px_0px_rgba(239,64,64,0.05)] sm:px-[3rem]'>
        <SelectInput
          placeholder={t("common.country")}
          options={fakeCountryOptions}
          className='w-[30%] lg:w-[25%]'
        />
        <SelectInput
          placeholder={t("common.property_type")}
          options={fakePropertyTypeOptions}
          className='w-[30%] lg:w-[25%]'
        />
        <SelectInput
          placeholder={t("common.area")}
          options={fakeAreaOptions}
          className='w-[30%] lg:w-[25%]'
        />

        <Button type='button' variant='primary-600' className='min-w-[12rem] rounded-full'>
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
