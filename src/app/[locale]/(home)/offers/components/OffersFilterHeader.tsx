import Button from "@/components/Button";
import SelectInput from "@/components/custom-ui/SelectInput";
import {fakeAreaOptions, fakeCountryOptions, fakePropertyTypeOptions} from "@/constants";
import {translate} from "@/helpers/translate";
import {useTranslations} from "next-intl";
import {IoSearch} from "react-icons/io5";

const OffersFilterHeader = () => {
  const t = useTranslations();
  return (
    <div className='relative z-[200] mx-auto mt-[-3rem] flex max-w-[90%] flex-wrap items-center justify-between gap-y-4 rounded-lg bg-white px-5 py-5 shadow-md lg:max-w-[55rem] lg:flex-nowrap lg:rounded-full'>
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
