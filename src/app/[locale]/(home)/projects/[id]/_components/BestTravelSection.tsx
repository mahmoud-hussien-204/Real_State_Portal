import handImage from "@/app/assets/project-details/hand.svg";
import Image from "next/image";
import phoneIcon from "@/app/assets/project-details/call-calling.svg";
import emailIcon from "@/app/assets/project-details/sms-tracking.svg";

function BestTravelSection() {
  return (
    <div className='relative h-96 w-full overflow-hidden lg:h-[30rem]'>
      {/* Next.js Image as background */}
      <div className='absolute inset-0'>
        <Image
          src={handImage}
          alt='Background image'
          fill
          className='z-10 object-cover object-center'
          loading='lazy'
          quality={60}
        />
      </div>

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-[#250205] via-[#64020A] to-[#D00312]'></div>

      {/* Content */}
      <div className='relative z-20 p-4 text-white'>
        <h1 className='text-2xl font-bold md:text-4xl'>
          Best Travel Advisor for all <br /> your travel needs
        </h1>
        <div className='mt-4 flex flex-col gap-2 text-lg'>
          <div className='flex gap-1'>
            <Image src={phoneIcon} alt='Phone icon' width={24} height={24} />
            <span className='border-b-2'>0542285830</span>
          </div>
          <div className='flex gap-1'>
            <Image src={emailIcon} alt='Email icon' width={24} height={24} />
            <span className='border-b-2'>info@aera-capital.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestTravelSection;
