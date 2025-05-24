"use client";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import PropertyFilters from "./PropertyFilters";
import Image from "next/image";

import {FormProvider, useForm} from "react-hook-form";
import {IProjectsFiltersForm} from "../../_interfaces";
import ProjectItem from "@/components/ProjectItem";
import useQuery from "@/hooks/useQuery";
import {apiGetProjects} from "../../_api";
import Spinner from "@/components/ui/spinner";
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";
import {useProjectsPageBanners} from "../../../hooks/useProjectsPageBanners";

const PropertyListingSection = () => {
  const searchParams = useSearchParams();
  const form = useForm<IProjectsFiltersForm>({
    defaultValues: {
      search: searchParams.get("search") || "",
      country_id: Number(searchParams.get("country_id")) || undefined,
      city_id: Number(searchParams.get("city_id")) || undefined,
      area_id: Number(searchParams.get("area_id")) || undefined,
      category_id: Number(searchParams.get("category_id")) || undefined,
      developer_id: Number(searchParams.get("developer_id")) || undefined,
      unit_type: Number(searchParams.get("unit_type")) || undefined,
      price_from: Number(searchParams.get("price_from")) || undefined,
      price_to: Number(searchParams.get("price_to")) || undefined,
    },
  });

  const {data, refetch, isFetching} = useQuery({
    queryKey: ["projects"],
    queryFn: () => apiGetProjects(form.getValues()),
    enabled: false,
  });

  const {banners, isFetching: isFetchingBanners} = useProjectsPageBanners();
  const displayedBanners: IBanner[] = [...(banners?.["1"] || []), ...(banners?.["2"] || [])];
  const projects = data?.data || [];

  useEffect(() => {
    refetch();
  }, []);

  return (
    <FormProvider {...form}>
      <section className='bg-neural-colors-50 py-4.5rem'>
        <Container>
          <SectionHeader
            title='projects.property_listing'
            subtitle={
              projects.length > 0 ? "projects.available_properties" : "projects.no_properties"
            }
            count={projects.length}
          />
          <div className='mt-[2.5rem] flex flex-wrap items-start gap-[2rem] lg:flex-nowrap'>
            <div className='w-full lg:w-[21rem]'>
              <PropertyFilters refetch={refetch} />
              {isFetchingBanners ? (
                <Spinner />
              ) : (
                <div className='hidden w-full gap-4 lg:mt-6 lg:flex lg:flex-col'>
                  {displayedBanners?.map((banner, index) => (
                    <Image
                      key={`banner-${index}`}
                      loading='lazy'
                      src={banner.banner}
                      alt={`Banner ${index + 1}`}
                      className='w-full rounded-lg object-cover'
                      width={500}
                      height={300}
                    />
                  ))}
                </div>
              )}
              {/* <Image src={dreamHomeImage} alt='' className='mt-[1.5rem] hidden w-full lg:block' /> */}
            </div>
            {isFetching ? (
              <Spinner />
            ) : projects.length === 0 ? (
              <div className='mx-auto text-center'>
                <h2 className='text-xl font-semibold text-colors-grey-colors-800'>
                  No properties found
                </h2>
                <p className='text-colors-grey-colors-600 mt-2'>
                  Please try adjusting your filters or search criteria.
                </p>
              </div>
            ) : (
              <div className='grid flex-1 grid-cols-1 justify-items-center gap-x-[5%] gap-y-8 sm:grid-cols-2 lg:justify-items-start'>
                {projects.map((project) => (
                  <ProjectItem
                    key={`prj-${project.id}`}
                    direction='vertical'
                    className='max-w-[25rem] lg:max-w-full'
                    project={project}
                  />
                ))}
                {/* <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={() => {}}
                  className='mx-auto mt-4 max-w-full gap-6 overflow-x-auto sm:col-span-2'
                /> */}
              </div>
            )}
          </div>
        </Container>
      </section>
    </FormProvider>
  );
};

export default PropertyListingSection;
