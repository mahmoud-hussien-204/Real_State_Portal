import {translate} from "@/helpers/translate";
import React from "react";
import {IoIosPricetag} from "react-icons/io";

const PriceFilterInput = () => {
  return (
    <div className='w-full'>
      <label className='mb-3 flex items-center gap-3 text-18'>
        <IoIosPricetag className='text-colors-primary-colors-600' />
        {translate("common.price")}
      </label>
      <div className='grid grid-cols-2 gap-3'>
        <input
          type='number'
          placeholder={translate("common.from") as string}
          className='border-input text-colors-grey-colors-1500 input rounded-full'
        />
        <input
          type='number'
          placeholder={translate("common.to") as string}
          className='border-input text-colors-grey-colors-1500 input rounded-full'
        />
      </div>
    </div>
  );
};

export default PriceFilterInput;
