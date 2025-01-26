import {useTranslations} from "next-intl";

import Container from "./Container";

import Logo from "./Logo";

import IconWhatsApp from "@/icons/IconWhatsApp";

import {Link} from "@/i18n/routing";

import IconEmail from "@/icons/IconEmail";

import IconPhone from "@/icons/IconPhone";

import IconLocation from "@/icons/IconLocation";

import IconFacebook from "@/icons/IconFacebook";

import IconInstagram from "@/icons/IconInstagram";

import IconDoubleChevron from "@/icons/IconDoubleChevron";

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className='bg-grid bg-half-gradient relative py-5rem'>
      <Container>
        <div className='relative z-10 flex flex-wrap justify-between gap-2.5rem'>
          <div className='w-full md:max-w-[28.4375rem]'>
            <Logo />
            <p className='mb-2.5rem mt-1.88rem text-18 font-semibold leading-2rem text-colors-grey-colors-2000'>
              {t("common.description")}
            </p>
            <div className='flex flex-wrap items-center gap-0.5rem'>
              <FooterSocialMedia href=''>
                <IconWhatsApp />
                <span className='text-colors-grey-colors-1000'>{t("common.whatsapp")}</span>
              </FooterSocialMedia>
              <FooterSocialMedia href=''>
                <IconFacebook />
                <span className='text-colors-grey-colors-1000'>{t("common.facebook")}</span>
              </FooterSocialMedia>
              <FooterSocialMedia href=''>
                <IconInstagram />
                <span className='text-colors-grey-colors-1000'>{t("common.instagram")}</span>
              </FooterSocialMedia>
            </div>
          </div>
          <nav>
            <FooterTitle>{t("footer.helpful_links")}</FooterTitle>
            <FooterMenu
              links={[
                {
                  title: t("footer.create_account"),
                  href: "/auth/register",
                },
                {
                  title: t("footer.new_projects"),
                  href: "/projects",
                },
                {
                  title: t("footer.testimonials"),
                  href: "/#testimonials",
                },
                {
                  title: t("footer.explore"),
                  href: "/explore",
                },
                {
                  title: t("footer.contact_us"),
                  href: "/contact-us",
                },
              ]}
            />
          </nav>
          <nav>
            <FooterTitle>{t("footer.top_projects")}</FooterTitle>
            <FooterMenu
              links={[
                {
                  title: t("footer.create_account"),
                  href: "/auth/register",
                },
                {
                  title: t("footer.new_projects"),
                  href: "/projects",
                },
                {
                  title: t("footer.testimonials"),
                  href: "/#testimonials",
                },
                {
                  title: t("footer.explore"),
                  href: "/explore",
                },
                {
                  title: t("footer.contact_us"),
                  href: "/contact-us",
                },
              ]}
            />
          </nav>
          <div>
            <FooterTitle>{t("footer.contact_us")}</FooterTitle>
            <div className='flex flex-col gap-1.88rem'>
              <div className='flex items-center gap-1.25rem text-colors-primary-colors-600'>
                <IconEmail />
                <div>
                  <h6 className='text-14 font-bold leading-1.75rem text-colors-grey-colors-2000'>
                    {t("common.gmail")}
                  </h6>
                  <a
                    href='mailto:0PZd1@example.com'
                    className='text-12 font-medium leading-1.25rem text-colors-grey-colors-800 underline'
                  >
                    info@aera-capital.com
                  </a>
                </div>
              </div>
              <div className='flex items-center gap-1.25rem text-colors-primary-colors-600'>
                <IconPhone />
                <div>
                  <h6 className='text-14 font-bold leading-1.75rem text-colors-grey-colors-2000'>
                    {t("common.phone")}
                  </h6>
                  <a
                    href='tel:0542285830'
                    className='text-12 font-medium leading-1.25rem text-colors-grey-colors-800 underline'
                  >
                    0542285830
                  </a>
                </div>
              </div>
              <div className='flex items-center gap-1.25rem text-colors-primary-colors-600'>
                <IconLocation />
                <div>
                  <h6 className='text-14 font-bold leading-1.75rem text-colors-grey-colors-2000'>
                    {t("common.address")}
                  </h6>
                  <a
                    href='#'
                    className='text-12 font-medium leading-1.25rem text-colors-grey-colors-800 underline'
                  >
                    Al Rigga, Dubai, U.A.E
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className='mt-5rem'>
        <h5 className='text-center text-12 font-medium text-colors-grey-colors-2000'>
          {t.rich("footer.copy_right", {
            text: (text) => (
              <span className='font-bold text-colors-primary-colors-600'>{text}</span>
            ),
          })}
        </h5>
      </Container>
    </footer>
  );
};

export default Footer;

const FooterMenu = ({links}: {links: {href: string; title: string}[]}) => (
  <ul className='flex flex-col gap-1.5rem'>
    {links.map((link, index) => (
      <li key={index} className='flex items-center gap-0.25rem'>
        <IconDoubleChevron />
        <Link
          href={link.href}
          className='text-14 font-medium text-colors-grey-colors-2000 hover:text-colors-primary-colors-600'
        >
          {link.title}
        </Link>
      </li>
    ))}
  </ul>
);

const FooterSocialMedia = ({children, href}: {href: string} & React.PropsWithChildren) => (
  <a
    target='_blank'
    href={href}
    className='border-colors-neutral-150/20 flex h-3rem min-w-9rem items-center justify-center gap-0.5rem rounded-0.75rem border bg-white px-0.5rem text-12 font-bold text-colors-primary-colors-600 transition-colors duration-200 hover:bg-colors-primary-colors-300 hover:text-white'
  >
    {children}
  </a>
);

const FooterTitle = ({children}: React.PropsWithChildren) => (
  <h6 className='mb-1.88rem text-20 font-semibold capitalize leading-2rem text-colors-grey-colors-1000'>
    {children}
  </h6>
);
