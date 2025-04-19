import Box from "./Box";
import {useTranslations} from "next-intl";
import Item from "./Item";

function SectionProjectStructure() {
  const t = useTranslations();

  return (
    <Box title={t("common.project_structure")}>
      <div className='grid gap-1rem rounded-1.25rem bg-[#F4F4F4] px-1rem py-1.5rem md:grid-cols-2 lg:grid-cols-3'>
        <Item title={t("common.area")} subtitle='12/2/2028' />
        <Item title={t("common.service_charge")} subtitle='New Launch' />
        <Item title={t("common.view")} subtitle='39' />
        <Item title={t("common.furniturex")} subtitle='39' />
        <Item title={t("common.rental_returns")} subtitle='39' />
        <Item title={t("common.capital_appreciaito")} subtitle='39' />
      </div>
    </Box>
  );
}

export default SectionProjectStructure;
