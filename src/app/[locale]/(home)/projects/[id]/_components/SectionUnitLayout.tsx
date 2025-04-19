import {useTranslations} from "next-intl";
import Box from "./Box";
import Button from "@/components/Button";
import Image from "next/image";
import IconDownload from "@/app/assets/project-details/download.svg";

function SectionUnitLayout() {
  const t = useTranslations();
  return (
    <Box title={t("common.unit_layout")}>
      <h3 className='text-2.5rem mb-1 font-bold'>Office Brochure</h3>
      <Box variant='secondary'>
        <Button variant='ghost' className='mx-auto bg-white shadow-none'>
          <Image src={IconDownload.src} width={24} height={24} alt='download icon' />
          <span className='text-1.4rem font-bold'>{t("common.download_brochure")}</span>
        </Button>
      </Box>
    </Box>
  );
}

export default SectionUnitLayout;
