import React from "react";
import Box from "./Box";
import {useTranslations} from "next-intl";
import Item from "./Item";
import IconAirPort from "@/app/assets/project-details/airport.svg";
import IconMall from "@/app/assets/project-details/mall.svg";
import IconHospital from "@/app/assets/project-details/hospital.svg";
import IconBeaches from "@/app/assets/project-details/beaches.svg";
import IconBus from "@/app/assets/project-details/bus.svg";
import Image from "next/image";

function SectionProjectKeyPosition() {
  const t = useTranslations();

  return (
    <Box title={t("common.project_key_position")}>
      <Box variant='secondary'>
        <Item
          icon={<Image src={IconAirPort.src} alt='air port icon' width={30} height={30} />}
          title={t("common.airport")}
          subtitle='25 min'
          className='mb-2'
        />
        <Item
          icon={<Image src={IconMall.src} alt='mall icon' width={30} height={30} />}
          title={t("common.malls")}
          subtitle='25 min'
          className='mb-2'
        />
        <Item
          icon={<Image src={IconHospital.src} alt='hospital icon' width={30} height={30} />}
          title={t("common.hospital_clinic")}
          subtitle='25 min'
          className='mb-2'
        />
        <Item
          icon={<Image src={IconBeaches.src} alt='beaches icon' width={30} height={30} />}
          title={t("common.beaches")}
          subtitle='25 min'
          className='mb-2'
        />
        <Item
          icon={<Image src={IconBus.src} alt='bus icon' width={30} height={30} />}
          title={t("common.bus_station")}
          subtitle='25 min'
        />
      </Box>
    </Box>
  );
}

export default SectionProjectKeyPosition;
