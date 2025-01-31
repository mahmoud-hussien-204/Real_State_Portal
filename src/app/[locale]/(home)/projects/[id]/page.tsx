"use client";

import PageHeroSection from "@/components/PageHeroSection";

import {IoLocationSharp} from "react-icons/io5";

import ProjectGallery from "./_components/ProjectGallery";

import Container from "@/components/Container";

import Filtration from "./_components/Filtration";

import Box, {BoxText} from "./_components/Box";

import {useTranslations} from "next-intl";

import Image from "next/image";

import ImageUser from "@/app/assets/user.png";

import IconEmail from "@/icons/IconEmail";

import IconPhone from "@/icons/IconPhone";

import IconWebsite from "@/icons/IconWebsite";

import IconBuilding from "@/icons/IconBuilding";

import IconTag from "@/icons/IconTag";

import IconRefresh from "@/icons/IconRefresh";

import Item from "./_components/Item";

import IconCalender from "@/icons/IconCalender";
import IconStats from "@/icons/IconStats";

const ProjectDetailsPage = () => {
  const t = useTranslations();

  return (
    <>
      <PageHeroSection
        title='page_hero_title.projects_details'
        pageName='page_title.projects_details'
      />
      <div className='bg-[#F6F6F6] py-[4.5rem]'>
        <Container>
          <h2 className='mb-2 text-32 font-bold text-colors-grey-colors-2000'>
            Trillionaire Residences
          </h2>
          <p className='flex items-center gap-2 text-colors-grey-colors-700'>
            <IoLocationSharp className='text-colors-primary-colors-600' />
            Business Bay - Dubai - United Arab Emirates
          </p>

          <ProjectGallery />
          <Filtration />
          <div className='mt-1.25rem flex flex-col gap-1.25rem'>
            <section
              id='developer'
              className='grid grid-cols-1 gap-1.25rem md:grid-cols-2 lg:grid-cols-3'
            >
              <div className='lg:col-span-2'>
                <Box title={t("common.about_developer")}>
                  <BoxText>
                    Copen Gate Project The name of the project is inspired by the Danish capital,
                    Copen Hagen. The project is a mini compound, which is a group of buildings. The
                    project location is in the small investor of distinguished housing on the new
                    tourist road. Compound services (garage, gym, kids area)
                  </BoxText>
                  <BoxText>
                    Copen Gate Project The name of the project is inspired by the Danish capital,
                    Copen Hagen. The project is a mini compound, which is a group of buildings.
                  </BoxText>
                </Box>
              </div>
              <Box title=''>
                <div className='mb-1.75rem flex items-center gap-1rem'>
                  <Image
                    src={ImageUser}
                    alt='user'
                    width={60}
                    height={60}
                    className='size-[60px] rounded-full'
                  />
                  <div>
                    <h5 className='mb-0.25rem text-22 font-bold text-colors-grey-colors-2000'>
                      {t("common.name")}
                    </h5>
                    <h6 className='font-medium text-colors-grey-colors-1000'>Qatar Eldeyar</h6>
                  </div>
                </div>
                <div className='mb-1.75rem flex items-center gap-1rem'>
                  <div className='flex size-[60px] items-center justify-center rounded-full bg-colors-primary-colors-50 text-colors-primary-colors-500'>
                    <IconEmail />
                  </div>
                  <div>
                    <h5 className='mb-0.25rem text-22 font-bold text-colors-grey-colors-2000'>
                      {t("common.email")}
                    </h5>
                    <h6 className='font-medium text-colors-grey-colors-1000'>
                      Kamal AbdelGhany@gmail.com
                    </h6>
                  </div>
                </div>
                <div className='mb-1.75rem flex items-center gap-1rem'>
                  <div className='flex size-[60px] items-center justify-center rounded-full bg-colors-primary-colors-50 text-colors-primary-colors-500'>
                    <IconPhone />
                  </div>
                  <div>
                    <h5 className='mb-0.25rem text-22 font-bold text-colors-grey-colors-2000'>
                      {t("common.phone")}
                    </h5>
                    <h6 className='font-medium text-colors-grey-colors-1000'>
                      +9526341251642 +99656586542
                    </h6>
                  </div>
                </div>
                <div className='flex items-center gap-1rem'>
                  <div className='flex size-[60px] items-center justify-center rounded-full bg-colors-primary-colors-50 text-colors-primary-colors-500'>
                    <IconWebsite />
                  </div>
                  <div>
                    <h5 className='mb-0.25rem text-22 font-bold text-colors-grey-colors-2000'>
                      {t("common.website")}
                    </h5>
                    <h6 className='font-medium text-colors-grey-colors-1000'>WWW.Developer.Com</h6>
                  </div>
                </div>
              </Box>
            </section>
            <div className='grid grid-cols-1 gap-1.25rem md:grid-cols-2 lg:grid-cols-3'>
              <section id='about' className='col-span-2'>
                <Box title={t("common.about_project")}>
                  <BoxText>
                    Copen Gate Project The name of the project is inspired by the Danish capital,
                    Copen Hagen. The project is a mini compound, which is a group of buildings. The
                    project location is in the small investor of distinguished housing on the new
                    tourist road. Compound services (garage, gym, kids area)
                  </BoxText>
                  <div className='flex flex-wrap gap-1.88rem'>
                    <div className='flex h-[8.68rem] flex-1 flex-col items-center justify-center gap-1rem rounded-1.25rem bg-colors-primary-colors-50 py-1.25rem'>
                      <span className='text-38 font-bold text-colors-primary-colors-400'>39</span>
                      <h6 className='flex items-center gap-1rem text-16 font-semibold text-colors-grey-colors-1000'>
                        <span className='flex size-[2.3rem] items-center justify-center rounded-full bg-white text-colors-primary-colors-500'>
                          <IconBuilding />
                        </span>
                        {t("common.project_numbers")}
                      </h6>
                    </div>
                    <div className='flex h-[8.68rem] flex-1 flex-col items-center justify-center gap-1.5rem rounded-1.25rem bg-colors-primary-colors-50 py-1.25rem'>
                      <span className='text-38 font-bold text-colors-primary-colors-400'>39</span>
                      <h6 className='flex items-center gap-1rem text-16 font-semibold text-colors-grey-colors-1000'>
                        <span className='flex size-[2.3rem] items-center justify-center rounded-full bg-white text-colors-primary-colors-500'>
                          <IconTag />
                        </span>
                        {t("common.delivered_projects")}
                      </h6>
                    </div>
                    <div className='flex h-[8.68rem] flex-1 flex-col items-center justify-center gap-1.5rem rounded-1.25rem bg-colors-primary-colors-50 py-1.25rem'>
                      <span className='text-38 font-bold text-colors-primary-colors-400'>39</span>
                      <h6 className='flex items-center gap-1rem text-16 font-semibold text-colors-grey-colors-1000'>
                        <span className='flex size-[2.3rem] items-center justify-center rounded-full bg-white text-colors-primary-colors-500'>
                          <IconRefresh />
                        </span>
                        {t("common.ongoing_projects")}
                      </h6>
                    </div>
                  </div>
                </Box>
              </section>
              <section id='project-statement' className='col-span-2'>
                <Box title={t("common.project_statement")}>
                  <div className='grid grid-cols-2 gap-1rem rounded-1.25rem bg-[#F4F4F4] px-1rem py-1.5rem'>
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
                    <Item
                      icon={<IconBuilding />}
                      title={t("common.totals number of units")}
                      subtitle='39'
                    />
                    <Item
                      icon={<IconBuilding />}
                      title={t("common.totals number of units")}
                      subtitle='39'
                    />
                  </div>
                </Box>
              </section>
              <section id='view' className='col-span-2'>
                <Box title={t("common.project_view")}>
                  <div className='grid grid-cols-2 gap-1rem rounded-1.25rem bg-[#F4F4F4] px-1rem py-1.5rem'>
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
                    <Item
                      icon={<IconBuilding />}
                      title={t("common.totals number of units")}
                      subtitle='39'
                    />
                    <Item
                      icon={<IconBuilding />}
                      title={t("common.totals number of units")}
                      subtitle='39'
                    />
                  </div>
                </Box>
              </section>
              <section id='structure' className='col-span-2'>
                <Box title={t("common.project_structure")}>
                  <div className='grid grid-cols-3 gap-1rem rounded-1.25rem bg-[#F4F4F4] px-1rem py-1.5rem'>
                    <Item title={t("common.area")} subtitle='12/2/2028' />
                    <Item title={t("common.service_charge")} subtitle='New Launch' />
                    <Item title={t("common.view")} subtitle='39' />
                    <Item title={t("common.furniturex")} subtitle='39' />
                    <Item title={t("common.rental_returns")} subtitle='39' />
                    <Item title={t("common.capital_appreciaito")} subtitle='39' />
                  </div>
                </Box>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
