import Container from "@/components/Container";
import {LabeledInput} from "@/components/custom-ui/LabeledInput";
import RangeInput from "@/components/custom-ui/RangeInput";
import SelectInput from "@/components/custom-ui/SelectInput";
import {
  fakeAreaOptions,
  fakeCityOptions,
  fakeCountryOptions,
  fakeDevelopers,
  fakeFinishingSpecs,
  fakeProjects,
  fakePropertyTypeOptions,
} from "@/constants";
import IconArea from "@/icons/IconArea";
import {LucideBedDouble} from "lucide-react";
import {useTranslations} from "next-intl";
import React from "react";
import {HiMiniBuildingOffice} from "react-icons/hi2";
import {IoIosPricetag} from "react-icons/io";
import {FaBath} from "react-icons/fa6";
import {FaCalendarAlt} from "react-icons/fa";
import Button from "@/components/Button";
import {IoSearch} from "react-icons/io5";

const FindProjectSection = () => {
  const t = useTranslations();
  return (
    <section className='mt-[4rem] bg-neural-colors-50 py-[4.5rem]'>
      <Container>
        <div className='w-full'>
          <h2 className='flex w-fit items-center justify-center gap-2 rounded-t-lg bg-colors-primary-colors-400 px-5 py-5 text-22 font-bold text-white'>
            <HiMiniBuildingOffice className='size-[1.4rem]' />
            {t("explore.find_your_project")}
          </h2>
          <div className='grid w-full grid-cols-1 gap-x-4 gap-y-[2rem] rounded-lg rounded-tl-none bg-white px-6 py-6 shadow-lg sm:grid-cols-2 md:grid-cols-3'>
            <LabeledInput placeholder={t("explore.enter_keyword")} />
            <SelectInput placeholder={t("common.country")} options={fakeCountryOptions} />
            <SelectInput placeholder={t("common.city")} options={fakeCityOptions} />
            <SelectInput placeholder={t("common.city")} options={fakeCityOptions} />
            <SelectInput placeholder={t("common.area")} options={fakeAreaOptions} />
            <SelectInput placeholder={t("common.developer")} options={fakeDevelopers} />
            <SelectInput placeholder={t("common.property_type")} options={fakeProjects} />
            <SelectInput
              placeholder={t("common.property_type")}
              options={fakePropertyTypeOptions}
            />
            <SelectInput placeholder={t("common.finishing_specs")} options={fakeFinishingSpecs} />
            <div className='block md:hidden' />
            <RangeInput
              labelText={t("common.price")}
              icon={<IoIosPricetag className='size-[1.2rem] text-[#327BA3]' />}
            />
            <RangeInput
              labelText={t("common.area_size")}
              icon={<IconArea className='size-[1.2rem] text-[#327BA3]' />}
            />
            <RangeInput
              labelText={t("common.bedrooms")}
              icon={<LucideBedDouble className='size-[1.2rem] text-[#327BA3]' />}
            />
            <RangeInput
              labelText={t("common.bathrooms")}
              icon={<FaBath className='size-[1.2rem] text-[#327BA3]' />}
            />
            <RangeInput
              labelText={t("common.delivery_date")}
              icon={<FaCalendarAlt className='size-[1.2rem] text-[#327BA3]' />}
            />
            <Button className='mt-auto flex h-[3.2rem] items-center justify-center gap-2 rounded-full'>
              {t("common.search")}
              <div className='flex size-[1.5rem] items-center justify-center rounded-full bg-white'>
                <IoSearch className='text-colors-primary-colors-600' />
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FindProjectSection;
