import Image from "next/image";
import Box from "./Box";
import IconEmail from "@/icons/IconEmail";
import IconPhone from "@/icons/IconPhone";
import IconWebsite from "@/icons/IconWebsite";
import {useTranslations} from "next-intl";

import ImageUser from "@/app/assets/user.png";

function SectionDeveloperInfo() {
  const t = useTranslations();

  return (
    <Box title=''>
      <div className='mb-1.75rem flex items-center gap-1rem'>
        <Image
          src={ImageUser}
          alt='user'
          width={60}
          height={60}
          className='size-[60px] rounded-full'
        />
        <div>
          <h5 className='mb-0.25rem text-22 font-bold text-colors-grey-colors-2000'>
            {t("common.name")}
          </h5>
          <h6 className='font-medium text-colors-grey-colors-1000'>Qatar Eldeyar</h6>
        </div>
      </div>
      <div className='mb-1.75rem flex items-center gap-1rem'>
        <div className='flex size-[60px] items-center justify-center rounded-full bg-colors-primary-colors-50 text-colors-primary-colors-500'>
          <IconEmail />
        </div>
        <div>
          <h5 className='mb-0.25rem text-22 font-bold text-colors-grey-colors-2000'>
            {t("common.email")}
          </h5>
          <h6 className='font-medium text-colors-grey-colors-1000'>Kamal AbdelGhany@gmail.com</h6>
        </div>
      </div>
      <div className='mb-1.75rem flex items-center gap-1rem'>
        <div className='flex size-[60px] items-center justify-center rounded-full bg-colors-primary-colors-50 text-colors-primary-colors-500'>
          <IconPhone />
        </div>
        <div>
          <h5 className='mb-0.25rem text-22 font-bold text-colors-grey-colors-2000'>
            {t("common.phone")}
          </h5>
          <h6 className='font-medium text-colors-grey-colors-1000'>+9526341251642 +99656586542</h6>
        </div>
      </div>
      <div className='flex items-center gap-1rem'>
        <div className='flex size-[60px] items-center justify-center rounded-full bg-colors-primary-colors-50 text-colors-primary-colors-500'>
          <IconWebsite />
        </div>
        <div>
          <h5 className='mb-0.25rem text-22 font-bold text-colors-grey-colors-2000'>
            {t("common.website")}
          </h5>
          <h6 className='font-medium text-colors-grey-colors-1000'>WWW.Developer.Com</h6>
        </div>
      </div>
    </Box>
  );
}

export default SectionDeveloperInfo;
