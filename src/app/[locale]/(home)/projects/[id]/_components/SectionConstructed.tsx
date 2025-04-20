import Image from "next/image";
import Box from "./Box";
import IconCalendar from "@/app/assets/project-details/calendar.svg";
function SectionConstructed() {
  return (
    <Box>
      <Box variant='secondary'>
        <div className='mb-4 flex w-full items-center gap-2'>
          <Image src={IconCalendar.src} alt='calendar icon' width={50} height={50} />
          <h3 className='mb-1 text-[1.5rem] font-bold'>{"Constructed"}</h3>
        </div>

        <div className='rounded-lg bg-white p-4'>
          <p className='mb-1 font-bold text-[#606060]'>{"Date"}</p>
          <p className='font-bold'>{"12 Jan 2024"}</p>
        </div>
      </Box>
    </Box>
  );
}

export default SectionConstructed;
