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
import IconLogout from "@/icons/IconLogout";
import {useLogout} from "@/app/[locale]/auth/hooks/useLogout";
import Spinner from "./ui/spinner";
import {ChevronDown, User} from "lucide-react";
import {useState, useRef} from "react";
import {useOutsideClick} from "@/hooks/useOutsideClick";

const Header = () => {
  const t = useTranslations();

  const {user} = useAppProvider();

  const {logout, isLoggingOut} = useLogout();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

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
            <div className='relative' ref={dropdownRef}>
              <Button
                className='flex items-center gap-2'
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <IconUser />
                <span className='hidden sm:inline'>{user.name.split(" ")[0]}</span>
                <ChevronDown className='h-4 w-4' />
              </Button>

              {isDropdownOpen && (
                <div className='absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5'>
                  <Link
                    href='/profile'
                    className='flex w-full items-center gap-0.5rem px-4 py-2 text-gray-700 hover:bg-gray-100'
                  >
                    <User size={16} />
                    {t("common.profile")}
                  </Link>
                  <button
                    onClick={() => logout({})}
                    className='flex w-full items-center gap-0.5rem px-4 py-2 text-gray-700 hover:bg-gray-100'
                  >
                    {isLoggingOut ? <Spinner className='!loading-xs mx-0' /> : <IconLogout />}{" "}
                    {t("common.logout")}
                  </button>
                </div>
              )}
            </div>
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
