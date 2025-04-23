import Button from "@/components/Button";
import Image from "next/image";
import IconDownload from "@/app/assets/project-details/download.svg";
import {useTranslations} from "next-intl";

function DownloadBrochureButton() {
  const t = useTranslations();
  return (
    <Button variant='ghost' className='mx-auto bg-white shadow-none'>
      <Image src={IconDownload.src} width={24} height={24} alt='download icon' />
      <span className='text-[0.75rem] font-bold sm:text-[1rem]'>
        {t("common.download_brochure")}
      </span>
    </Button>
  );
}

export default DownloadBrochureButton;
