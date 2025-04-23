"use client";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import PropertyFilters from "./PropertyFilters";
// import ProjectItem from "@/components/ProjectItem";
import {fakeDataProjects} from "@/constants";
import Image from "next/image";
import dreamHomeImage from "@/app/assets/dream-home.png";
import Pagination from "@/components/Pagination";
import {FormProvider, useForm} from "react-hook-form";
import {IProjectsFiltersForm} from "../../_interfaces";
import ProjectItem from "@/components/ProjectItem";

const PropertyListingSection = () => {
  const form = useForm<IProjectsFiltersForm>({
    defaultValues: {
      search: "",
      country_ids: [],
      city_ids: [],
      developer_ids: [],
      unit_types: [],
      category_ids: [],
      price_from: 0,
      price_to: 0,
    },
  });
  return (
    <FormProvider {...form}>
      <section className='bg-neural-colors-50 py-4.5rem'>
        <Container>
          <SectionHeader title='projects.property_listing' subtitle={"projects.no_properties"} />
          <div className='mt-[2.5rem] flex flex-wrap items-start gap-[2rem] lg:flex-nowrap'>
            <div className='w-full lg:w-[21rem]'>
              <PropertyFilters />
              <Image src={dreamHomeImage} alt='' className='mt-[1.5rem] hidden w-full lg:block' />
            </div>
            <div className='grid flex-1 grid-cols-1 justify-items-center gap-x-[5%] gap-y-8 sm:grid-cols-2 lg:justify-items-start'>
              {fakeDataProjects.map((project, index) => (
                <ProjectItem
                  key={index}
                  direction='vertical'
                  className='max-w-[25rem] lg:max-w-full'
                  project={{
                    id: 1,
                    image: "",
                    area: {
                      city_id: 1,
                      color: "",
                      content: "",
                      id: 1,
                      is_active: true,
                      name_ar: "منيل شيحة",
                      name_en: "Manial Sheha",
                    },
                    city: {
                      id: 1,
                      country_id: 1,
                      name_ar: "الجيزة",
                      name_en: "Giza",
                      color: "",
                      content: "",
                      is_active: true,
                    },
                    country: {
                      id: 1,
                      name_ar: "مصر",
                      name_en: "Egypt",
                      color: "",
                      content: "",
                      is_active: "",
                      code: "EG",
                      iso: "EG",
                      iso3: "EGY",
                    },
                    developer_name_ar: "شركة كابيتال هومز",
                    developer_name_en: "Capital Homes",
                    expected_completion_date: "2024-12-31",
                    expected_roi: 0,
                    name_ar: "مشروع كابيتال هومز",
                    name_en: "Capital Homes",
                    offer: 14,
                    project_status: "available",
                    sale_status: "for_sale",
                    starting_price: 0,
                    views_count: 0,
                  }}
                />
                // <div key={index}>test</div>
              ))}
              <Pagination
                totalPages={11}
                currentPage={1}
                onPageChange={() => {}}
                className='mx-auto mt-4 max-w-full gap-6 overflow-x-auto sm:col-span-2'
              />
            </div>
          </div>
        </Container>
      </section>
    </FormProvider>
  );
};

export default PropertyListingSection;
