"use client";

import {AppHelper} from "@/helpers/appHelper";

import {Link, usePathname} from "@/i18n/routing";

import {useTranslations} from "next-intl";

type IProps = {
  className?: string;
};

const Navbar = ({className}: IProps) => {
  const t = useTranslations();
  return (
    <nav className={AppHelper.className("flex items-center", className)}>
      <NavbarItem href='/'>{t("page_title.home")}</NavbarItem>
      <NavbarItem href='/projects'>{t("page_title.projects")}</NavbarItem>
      <NavbarItem href='/explore'>{t("page_title.explore")}</NavbarItem>
      <NavbarItem href='/offers'>{t("page_title.offers")}</NavbarItem>
      <NavbarItem href='/contact-us'>{t("page_title.contact_us")}</NavbarItem>
    </nav>
  );
};

export default Navbar;

const NavbarItem = ({href, children}: {href: string} & React.PropsWithChildren) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={AppHelper.className(
        "rounded-0.625rem flex h-3rem min-w-[6.75rem] items-center justify-center border border-transparent px-0.25rem font-semibold leading-1.75rem text-colors-grey-colors-1000 transition-colors duration-200 font-14 hover:text-colors-primary-colors-600",
        {
          "border-colors-primary-colors-200 bg-colors-primary-colors-50 text-colors-primary-colors-600":
            isActive,
        }
      )}
    >
      {children}
    </Link>
  );
};
