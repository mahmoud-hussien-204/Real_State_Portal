import React from "react";
import Box from "./Box";
import Image from "next/image";
import IconUAEFlag from "@/app/assets/flag_ar.svg";
import Button from "@/components/Button";
import IconArrow from "@/app/assets/project-details/right-arrow.svg";
import {useLocale} from "next-intl";
import ExploreMap from "../../../explore/_components/ExploreMap";

function SectionLocation({project}: {project: IProject}) {
  const googleMapLocation = project.google_map_location;
  const locale = useLocale();
  const displayedCountry =
    locale === "en" ? googleMapLocation.country.name_en : googleMapLocation.country.name_ar;
  const displayedCity =
    locale === "en" ? googleMapLocation.city.name_en : googleMapLocation.city.name_ar;
  const displayedArea =
    locale === "en" ? googleMapLocation.area.name_en : googleMapLocation.area.name_ar;
  return (
    <Box>
      <h3 className='mb-1 text-center text-[1.5rem] font-bold'>Location</h3>
      <div className='mx-auto mt-4 flex w-[90%] items-center justify-between rounded-lg bg-[#F4F4F4] p-4 sm:w-[60%]'>
        <span>Country</span>
        <div className='flex items-center justify-center gap-2'>
          <Image src={IconUAEFlag.src} alt='flag icon' width={30} height={30} />
          <span className='ml-2 font-bold'>{displayedCountry}</span>
        </div>
      </div>

      <div className='mx-auto mt-4 flex w-[90%] items-center justify-between rounded-lg bg-[#F4F4F4] p-4 sm:w-[60%]'>
        <span>City</span>
        <span className='ml-2 font-bold'>{displayedCity}</span>
      </div>

      <div className='mx-auto my-4 flex w-[90%] items-center justify-between rounded-lg bg-[#F4F4F4] p-4 sm:w-[60%]'>
        <span>Country</span>
        <span className='ml-2 font-bold'>{displayedArea}</span>
      </div>

      <hr className='my-4' />

      <ExploreMap
        exploreData={[
          {
            area: googleMapLocation.area,
            city: googleMapLocation.city,
            country: googleMapLocation.country,

            latitude: googleMapLocation.latitude,
            longitude: googleMapLocation.longitude,
            name_ar: project.name_ar,
            name_en: project.name_en,
            id: 0,
            sale_status: project.sale_status,
            status: project.sale_status,
            slug: project.slug,
            name_developer_ar: project.card_developer.name_ar,
            name_developer_en: project.card_developer.name_en,
            phone: project.card_developer.phone,
            starting_price: project.starting_price,
            images: project.images[0],
            offer: project.offer,
          },
        ]}
      />

      <div className='w-full text-center'>
        <Button variant='outline' className='mt-4 rounded-none border-none bg-[#FFE9EE]'>
          <span>Open on Google Map</span>
          <span>
            <Image src={IconArrow.src} alt='arrow icon' width={24} height={24} />
          </span>
        </Button>
      </div>
    </Box>
  );
}

export default SectionLocation;
