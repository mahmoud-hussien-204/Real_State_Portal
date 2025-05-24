import {useTranslations} from "next-intl";
import React from "react";
import {IoIosPricetag} from "react-icons/io";

const PriceFilterInput = () => {
  const t = useTranslations();
  return (
    <div className='w-full'>
      <label className='mb-3 flex items-center gap-3 text-18'>
        <IoIosPricetag className='text-colors-primary-colors-600' />
        {t("common.price")}
      </label>
      <div className='grid grid-cols-2 gap-3'>
        <input
          type='number'
          placeholder={t("common.from") as string}
          className='input rounded-full border-input text-colors-grey-colors-1500'
        />
        <input
          type='number'
          placeholder={t("common.to") as string}
          className='input rounded-full border-input text-colors-grey-colors-1500'
        />
      </div>
    </div>
  );
};

export default PriceFilterInput;
