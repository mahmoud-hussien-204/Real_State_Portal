import {useTranslations} from "next-intl";
import Box from "./Box";
import DownloadBrochureButton from "./DownloadBrochureButton";

function SectionProjectDocumentation() {
  const t = useTranslations();
  return (
    <Box title={t("common.project_documentation")}>
      <Box variant='secondary'>
        <div className='mb-4'>
          <h3 className='mb-1 text-[1.5rem] font-bold text-[#5E5F60]'>{"Availability"}</h3>
          <div className='w-full text-center'>
            <DownloadBrochureButton />
          </div>
        </div>

        <div className='mb-4'>
          <h3 className='mb-1 text-[1.5rem] font-bold text-[#5E5F60]'>{"Videos"}</h3>
          <div className='w-full text-center'>
            <DownloadBrochureButton />
          </div>
        </div>

        <div className='mb-4'>
          <h3 className='mb-1 text-[1.5rem] font-bold text-[#5E5F60]'>{"Marketing Materials"}</h3>
          <div className='w-full text-center'>
            <DownloadBrochureButton />
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default SectionProjectDocumentation;
