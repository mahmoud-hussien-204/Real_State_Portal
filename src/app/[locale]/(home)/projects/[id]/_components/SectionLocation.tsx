import React from "react";
import Box from "./Box";
import Image from "next/image";
import IconUAEFlag from "@/app/assets/flag_ar.svg";
import mapImage from "@/app/assets/project-details/map.svg";
import Button from "@/components/Button";
import IconArrow from "@/app/assets/project-details/right-arrow.svg";

function SectionLocation() {
  return (
    <Box>
      <h3 className='mb-1 text-center text-[1.5rem] font-bold'>Location</h3>
      <div className='mx-auto mt-4 flex w-[90%] items-center justify-between rounded-lg bg-[#F4F4F4] p-4 sm:w-[60%]'>
        <span>Country</span>
        <div className='flex items-center justify-center gap-2'>
          <Image src={IconUAEFlag.src} alt='flag icon' width={30} height={30} />
          <span className='ml-2 font-bold'>UAE</span>
        </div>
      </div>

      <div className='mx-auto mt-4 flex w-[90%] items-center justify-between rounded-lg bg-[#F4F4F4] p-4 sm:w-[60%]'>
        <span>City</span>
        <span className='ml-2 font-bold'>Elsharqa</span>
      </div>

      <div className='mx-auto my-4 flex w-[90%] items-center justify-between rounded-lg bg-[#F4F4F4] p-4 sm:w-[60%]'>
        <span>Country</span>
        <span className='ml-2 font-bold'>Green Community West</span>
      </div>

      <hr className='my-4' />

      <div
        className='flex h-[15rem] w-full items-end justify-center rounded-xl bg-cover bg-center pb-[1.5rem] lg:mx-auto lg:aspect-square lg:h-[20rem] lg:w-[60%]'
        style={{
          backgroundImage: `url(${mapImage.src})`,
        }}
      ></div>
      <div className='w-full text-center'>
        <Button variant='outline' className='mt-4 rounded-none border-none bg-[#FFE9EE]'>
          <span>Open on Google Map</span>
          <span>
            <Image src={IconArrow.src} alt='arrow icon' width={24} height={24} />
          </span>
        </Button>
      </div>
    </Box>
  );
}

export default SectionLocation;
