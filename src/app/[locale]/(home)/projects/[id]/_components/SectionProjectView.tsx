import React from "react";
import Box from "./Box";
import Item from "./Item";
import IconProjectView from "@/app/assets/project-details/project-view.svg";
import {useTranslations} from "next-intl";
import Image from "next/image";

function SectionProjectView() {
  const t = useTranslations();

  return (
    <Box title={t("common.project_view")}>
      <Box variant='secondary'>
        <Item
          icon={
            <Image src={IconProjectView.src} alt='project view icon' width={100} height={100} />
          }
          title={t("common.project_view")}
          subtitle='12/2/2028'
        />
      </Box>
    </Box>
  );
}

export default SectionProjectView;
