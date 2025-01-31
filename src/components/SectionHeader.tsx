import React from "react";
import PageSectionTitle, {PageSectionTitleProps} from "./PageSectionTitle";
import {HiMiniArrowsUpDown} from "react-icons/hi2";
import {BsSortDown} from "react-icons/bs";
type Props = PageSectionTitleProps;
const SectionHeader = ({title, subtitle}: Props) => {
  return (
    <div className='flex w-full flex-wrap justify-between gap-y-4 sm:flex-nowrap'>
      <PageSectionTitle {...{title, subtitle}} />
      <div className='ms-auto flex items-start gap-4 sm:ms-0'>
        <button className='flex items-center gap-2 rounded-md border border-[#DDDDDD] bg-transparent px-4 py-2 text-sm font-medium text-colors-grey-colors-700'>
          <HiMiniArrowsUpDown />
          Per Page
        </button>
        <button className='flex items-center gap-2 rounded-md border border-[#DDDDDD] bg-transparent px-4 py-2 text-sm font-medium text-colors-grey-colors-700'>
          <BsSortDown /> Sort By
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;
