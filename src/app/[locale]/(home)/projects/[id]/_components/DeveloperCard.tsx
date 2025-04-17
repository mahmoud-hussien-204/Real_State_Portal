import merchantLogo from "@/app/assets/project-details/merchant-logo.svg";
import bgImage from "@/app/assets/project-details/about-dev.svg";
import phoneIcon from "@/app/assets/project-details/call-calling.svg";
import emailIcon from "@/app/assets/project-details/sms-tracking.svg";
import whatsappIcon from "@/app/assets/project-details/whatsapp.svg";
import Image from "next/image";
import Button from "@/components/Button";

interface IProps {
  developerName: string;
  developerPhone: string;
  developerEmail: string;
}

function DeveloperCard({developerName, developerPhone, developerEmail}: IProps) {
  return (
    <div
      className='flex aspect-video h-96 w-full flex-col gap-3 rounded-2xl bg-cover bg-left text-white'
      style={{backgroundImage: `url(${bgImage.src})`}}
    >
      {/* Merchant logo positioned with absolute */}
      <div className='z-10 flex items-start pl-4 sm:pl-8 sm:pt-0'>
        <Image src={merchantLogo} alt='Merchant logo' width={90} height={90} />
      </div>

      {/* Text content positioned at the bottom */}
      <div className='flex flex-col items-center gap-2'>
        <h1 className='my-4 text-center text-4xl font-bold'>{developerName}</h1>
        <h3 className='text-2xl'>Developer</h3>
      </div>

      <div className='flex flex-col items-center font-semibold lg:flex-row lg:justify-center lg:gap-4'>
        <div className='flex gap-1'>
          <Image src={phoneIcon} alt='Phone icon' width={24} height={24} />
          <span className='border-b-2'>{developerPhone}</span>
        </div>
        <div className='flex gap-1'>
          <Image src={emailIcon} alt='Email icon' width={24} height={24} />
          <span className='border-b-2'>{developerEmail}</span>
        </div>
      </div>

      <Button variant='ghost' className='mx-auto w-[90%] rounded-[10px] opacity-[40%]'>
        <Image src={whatsappIcon} alt='WhatsApp icon' width={30} height={30} />
      </Button>
    </div>
  );
}

export default DeveloperCard;
