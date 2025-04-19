import {useTranslations} from "next-intl";
import Box, {BoxText} from "./Box";
import IconBuilding from "@/icons/IconBuilding";
import IconTag from "@/icons/IconTag";
import IconRefresh from "@/icons/IconRefresh";

function SectionAboutProject() {
  const t = useTranslations();

  return (
    <Box title={t("common.about_project")}>
      <BoxText>
        Copen Gate Project The name of the project is inspired by the Danish capital, Copen Hagen.
        The project is a mini compound, which is a group of buildings. The project location is in
        the small investor of distinguished housing on the new tourist road. Compound services
        (garage, gym, kids area)
      </BoxText>
      <div className='flex flex-wrap gap-1.88rem'>
        <div className='flex h-[8.68rem] flex-1 flex-col items-center justify-center gap-1rem rounded-1.25rem bg-colors-primary-colors-50 py-1.25rem'>
          <span className='text-38 font-bold text-colors-primary-colors-400'>39</span>
          <h6 className='flex items-center gap-1rem whitespace-nowrap text-16 font-semibold text-colors-grey-colors-1000'>
            <span className='flex size-[2.3rem] items-center justify-center rounded-full bg-white text-colors-primary-colors-500'>
              <IconBuilding />
            </span>
            {t("common.project_numbers")}
          </h6>
        </div>
        <div className='flex h-[8.68rem] flex-1 flex-col items-center justify-center gap-1.5rem rounded-1.25rem bg-colors-primary-colors-50 py-1.25rem'>
          <span className='text-38 font-bold text-colors-primary-colors-400'>39</span>
          <h6 className='flex items-center gap-1rem whitespace-nowrap text-16 font-semibold text-colors-grey-colors-1000'>
            <span className='flex size-[2.3rem] items-center justify-center rounded-full bg-white text-colors-primary-colors-500'>
              <IconTag />
            </span>
            {t("common.delivered_projects")}
          </h6>
        </div>
        <div className='flex h-[8.68rem] flex-1 flex-col items-center justify-center gap-1.5rem rounded-1.25rem bg-colors-primary-colors-50 py-1.25rem'>
          <span className='text-38 font-bold text-colors-primary-colors-400'>39</span>
          <h6 className='flex items-center gap-1rem whitespace-nowrap text-16 font-semibold text-colors-grey-colors-1000'>
            <span className='flex size-[2.3rem] items-center justify-center rounded-full bg-white text-colors-primary-colors-500'>
              <IconRefresh />
            </span>
            {t("common.ongoing_projects")}
          </h6>
        </div>
      </div>
    </Box>
  );
}

export default SectionAboutProject;
