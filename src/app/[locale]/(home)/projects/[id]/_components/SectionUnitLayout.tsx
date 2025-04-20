import {useTranslations} from "next-intl";
import Box from "./Box";

import DownloadBrochureButton from "./DownloadBrochureButton";

function SectionUnitLayout() {
  const t = useTranslations();
  return (
    <Box title={t("common.unit_layout")}>
      <h3 className='text-2.5rem mb-1 font-bold'>Office Brochure</h3>
      <Box variant='secondary'>
        <div className='w-full text-center'>
          <DownloadBrochureButton />
        </div>
      </Box>
    </Box>
  );
}

export default SectionUnitLayout;
