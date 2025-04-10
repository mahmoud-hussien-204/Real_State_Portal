"use client";

import {Link} from "@/i18n/routing";

import Container from "./Container";

import Logo from "./Logo";

import Navbar from "./Navbar";

import ToggleLanguage from "./ToggleLanguage";

import IconUser from "@/icons/IconUser";

import {useTranslations} from "next-intl";

import LinkButton from "./LinkButton";

import IconMenu from "@/icons/IconMenu";

import MobileMenu from "./MobileMenu";

import useAppProvider from "@/hooks/useAppProvider";
import Button from "./Button";

const Header = () => {
  const t = useTranslations();

  const {user} = useAppProvider();

  return (
    <header className='absolute start-0 top-2.5rem z-[9999] flex h-3.5rem w-full items-center'>
      <Container className='flex items-center justify-between'>
        <Link href='/'>
          <Logo />
        </Link>

        {/* this input for toggle menu in mobile only  */}
        <input type='checkbox' id='nav-toggle' className='peer hidden' />

        <Navbar className='hidden lg:flex' />

        <div className='flex items-center gap-1rem'>
          <label
            htmlFor='nav-toggle'
            className='cursor-pointer text-colors-neutral-800 hover:text-colors-neutral-1000 lg:hidden'
          >
            <IconMenu />
          </label>

          <div className='hidden sm:block lg:hidden xl:block'>
            <ToggleLanguage />
          </div>

          {user ? (
            <Button className='hidden h-3.5rem w-[13.4rem] sm:flex'>
              {t("common.hello")}, {user.name}
            </Button>
          ) : (
            <LinkButton href='/auth/login' className='hidden h-3.5rem w-[13.4rem] sm:flex'>
              <IconUser />
              {t("common.login_register")}
            </LinkButton>
          )}
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
};

export default Header;
