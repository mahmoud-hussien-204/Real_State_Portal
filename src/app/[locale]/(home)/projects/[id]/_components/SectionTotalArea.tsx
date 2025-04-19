import React from "react";
import Box from "./Box";
import {useTranslations} from "next-intl";
import Icon from "@/app/assets/project-details/project-view.svg";
import Item from "./Item";
import Image from "next/image";

function SectionTotalArea() {
  const t = useTranslations();
  return (
    <Box title={t("common.total_area")}>
      <Box variant='secondary'>
        <Item
          title={t("common.total_area")}
          subtitle='430 Sqft/M2'
          icon={
            <Image
              src={Icon.src}
              alt='icon alt'
              width={24}
              height={24}
              className='bg-transparent'
            />
          }
        />
      </Box>
    </Box>
  );
}

export default SectionTotalArea;
