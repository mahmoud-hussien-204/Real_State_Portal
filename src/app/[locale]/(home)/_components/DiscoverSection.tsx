import ImageDiscoverAvatar from "@/app/assets/discover-avatar.png";

import Container from "@/components/Container";

import LinkButton from "@/components/LinkButton";

import IconArrowRight from "@/icons/IconArrowRight";

import IconEmail from "@/icons/IconEmail";

import IconPhone from "@/icons/IconPhone";

import {useTranslations} from "next-intl";

import Image from "next/image";

const DiscoverSection = () => {
  const t = useTranslations();

  return (
    <section className="bg-[url('./assets/discover.png')] bg-cover">
      <Container>
        <div className='grid xl:grid-cols-2'>
          <div className='pb-2.5rem pt-5.75rem lg:py-5.75rem'>
            <h2 className='mb-1.25rem text-[3.25rem] font-bold capitalize leading-[3.85125rem] text-colors-grey-colors-100'>
              {t("home.discover_title")}
            </h2>
            <div className='flex items-center gap-x-3rem'>
              <a
                href='mailto:info@aera-capital.com'
                className='flex items-center gap-0.5rem text-colors-grey-colors-100'
              >
                <span className='flex size-[2.4375rem] items-center justify-center rounded-full bg-white/10 text-colors-grey-colors-100'>
                  <IconEmail svgProps={{className: "size-[1.1875rem]"}} />
                </span>
                <span className='text-12 font-medium underline'>info@aera-capital.com</span>
              </a>
              <a
                href='tel:0542285830'
                className='flex items-center gap-0.5rem text-colors-grey-colors-100'
              >
                <span className='flex size-[2.4375rem] items-center justify-center rounded-full bg-white/10 text-colors-grey-colors-100'>
                  <IconPhone svgProps={{className: "size-[1.1875rem]"}} />
                </span>
                <span className='text-12 font-medium underline'>0542285830</span>
              </a>
            </div>

            <LinkButton
              href='/explore'
              className='mt-2.5rem h-3.5rem min-w-[13.5rem] rounded-full'
              variant='primary-600'
            >
              {t("home.explore_more")}
              <IconArrowRight />
            </LinkButton>
          </div>

          <Image
            src={ImageDiscoverAvatar}
            alt='Discover Avatar'
            className='mt-auto object-contain'
          />
        </div>
      </Container>
    </section>
  );
};

export default DiscoverSection;
