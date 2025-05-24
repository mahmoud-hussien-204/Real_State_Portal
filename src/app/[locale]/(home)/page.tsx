import Image from "next/image";

import DiscoverSection from "./_components/DiscoverSection";

import TopRelatedProjects from "./_components/TopRelatedProjects";

import LatestProjects from "./_components/LatestProjects";

import AreaAcrossTheTown from "./_components/AreaAcrossTheTown";

import ExclusiveProjectOffers from "./_components/ExclusiveProjectOffers";

import LatestAchievements from "./_components/LatestAchievements";

import Partners from "./_components/Partners";

import HeroSection from "./_components/HeroSection";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <DiscoverSection />
      <TopRelatedProjects />
      <div className='relative h-[24.625rem]'>
        <Image src='/ads.png' alt='ads' fill className='object-cover' />
      </div>
      <LatestProjects />
      <AreaAcrossTheTown />
      <ExclusiveProjectOffers />
      <div className='relative h-[24.625rem]'>
        <Image src='/ads2.png' alt='ads' fill className='object-cover' />
      </div>
      {/* <LatestProjects /> */}
      <LatestAchievements />
      <div className='relative h-[24.625rem]'>
        <Image src='/ads3.png' alt='ads' fill className='object-cover' />
      </div>
      <Partners />
    </div>
  );
};

export default Page;
