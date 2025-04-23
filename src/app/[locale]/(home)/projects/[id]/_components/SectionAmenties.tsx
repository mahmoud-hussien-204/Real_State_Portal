import React from "react";
import Box from "./Box";
import {useTranslations} from "next-intl";

import IconSwimming from "@/app/assets/project-details/swimming.svg";
import IconGym from "@/app/assets/project-details/gym.svg";
import IconSPA from "@/app/assets/project-details/spa.svg";
import IconKidsArea from "@/app/assets/project-details/kids-area.svg";
import Image from "next/image";
function SectionAmenties() {
  const t = useTranslations();
  return (
    <Box title={t("common.amenties")}>
      <Box variant='secondary'>
        <div className='grid w-full grid-cols-3 gap-3'>
          <div className='flex items-center gap-2'>
            <Image src={IconSwimming} alt='swimming icon' width={24} height={24} />
            <span> Swimming Pool</span>
          </div>

          <div className='flex items-center gap-2'>
            <Image src={IconGym} alt='gym icon' width={24} height={24} />
            <span> Gym</span>
          </div>

          <div className='flex items-center gap-2'>
            <Image src={IconSPA} alt='spa icon' width={24} height={24} />
            <span> SPA</span>
          </div>

          <div className='flex items-center gap-2'>
            <Image src={IconKidsArea} alt='kids-area icon' width={24} height={24} />
            <span> Kids Area</span>
          </div>

          <div className='flex items-center gap-2'>
            <Image src={IconKidsArea} alt='kids-area icon' width={24} height={24} />
            <span> Kids Area</span>
          </div>

          <div className='flex items-center gap-2'>
            <Image src={IconKidsArea} alt='kids-area icon' width={24} height={24} />
            <span> Kids Area</span>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default SectionAmenties;
