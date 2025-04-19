import React from "react";
import Box from "./Box";
import Item from "./Item";
import IconCalender from "@/icons/IconCalender";
import IconStats from "@/icons/IconStats";
import IconBuilding from "@/icons/IconBuilding";
import {useTranslations} from "next-intl";

function SectionProjectStatement() {
  const t = useTranslations();

  return (
    <Box title={t("common.project_statement")}>
      <div className='grid gap-1rem rounded-1.25rem bg-[#F4F4F4] px-1rem py-1.5rem md:grid-cols-2'>
        <Item
          icon={<IconCalender />}
          title={t("common.project_expected_delivery")}
          subtitle='12/2/2028'
        />
        <Item
          icon={<IconStats />}
          title={t("common.project_development_stage")}
          subtitle='New Launch'
        />
        <Item icon={<IconBuilding />} title={t("common.totals number of units")} subtitle='39' />
        <Item icon={<IconBuilding />} title={t("common.totals number of units")} subtitle='39' />
      </div>
    </Box>
  );
}

export default SectionProjectStatement;
