import {useTranslations} from "next-intl";
import React from "react";
import Box from "./Box";

function SectionServiceProviders({
  mainServiceProviders,
}: {
  mainServiceProviders?: IMainServiceProviders;
}) {
  const t = useTranslations();
  return (
    <Box title={t("common.project_main_service_providers")}>
      <div className='mt-2 rounded-lg bg-[#F4F4F4] p-2 text-[#22222299]'>
        <span className='opacity-[60%]'>Electricity: </span>
        <span className='font-bold'>{mainServiceProviders?.electric.name_en || "electricity"}</span>
      </div>

      <div className='mt-2 rounded-lg bg-[#F4F4F4] p-2 text-[#22222299]'>
        <span className='opacity-[60%]'>Gas: </span>
        <span className='font-bold'>{mainServiceProviders?.gas?.name_en} </span>
      </div>

      <div className='mt-2 rounded-lg bg-[#F4F4F4] p-2 text-[#22222299]'>
        <span className='opacity-[60%]'>Water: </span>
        <span className='font-bold'>{mainServiceProviders?.water?.name_en} </span>
      </div>

      <div className='mt-2 rounded-lg bg-[#F4F4F4] p-2 text-[#22222299]'>
        <span className='opacity-[60%]'>Chiller Provider Name: </span>
        <span className='font-bold'>{mainServiceProviders?.chiller?.name_en}</span>
      </div>
    </Box>
  );
}

export default SectionServiceProviders;
