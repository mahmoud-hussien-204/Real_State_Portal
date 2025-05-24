"use client";

import Image from "next/image";

import {useTranslations} from "next-intl";

import {Link, usePathname} from "@/i18n/routing";

import {AppHelper} from "@/helpers/appHelper";

import ImageHero from "@/app/assets/hero.png";

import IconHome from "@/icons/IconHome";

// import {FaFacebook} from "react-icons/fa";

// import googlIcon from "@/app/assets/google-icon.svg";

type IProps = React.PropsWithChildren;

const AuthLayout = ({children}: IProps) => {
  const t = useTranslations();

  const pathname = usePathname();

  return (
    <main className='grid min-h-screen grid-cols-1 md:grid-cols-2'>
      <div className='flex justify-center px-3rem py-3rem md:px-1rem lg:px-4rem'>
        <div className='max-w-[28rem] flex-1'>
          <h1 className='text-center text-38 font-bold uppercase text-colors-grey-colors-1000'>
            Welcome Back! 👋🏻
          </h1>
          <div className='mb-2.5rem mt-2rem flex h-3.5rem w-full items-center gap-0.94rem rounded-full bg-[#ECECEC]'>
            <Link
              href='/auth/login'
              className={AppHelper.className(
                "flex h-full flex-1 items-center justify-center text-center text-20 font-medium",
                {
                  "rounded-inherit bg-colors-primary-colors-500 font-bold text-white":
                    pathname.includes("login"),
                }
              )}
            >
              {t("common.login")}
            </Link>
            <Link
              href='/auth/register'
              className={AppHelper.className(
                "flex h-full flex-1 items-center justify-center text-center text-20 font-medium",
                {
                  "rounded-inherit bg-colors-primary-colors-500 font-bold text-white":
                    pathname.includes("register"),
                }
              )}
            >
              {t("common.register")}
            </Link>
          </div>
          {children}
          {/* 
          <h6 className='mb-1.25rem mt-2.5rem text-center text-16 text-gray-1'>{t("common.or")}</h6>
          <div className='mt-1.5rem flex w-full justify-between'>
            <button className='flex h-[3.5rem] w-[48%] items-center justify-center gap-2 rounded-full bg-[#006CD0] text-base text-white hover:bg-blue-400'>
              <FaFacebook className='size-[1.2rem] text-transparent' fill='#fff' />
              {t("common.facebook")}
            </button>
            <button className='flex h-[3.5rem] w-[48%] items-center justify-center gap-2 rounded-full bg-[#F9F9F9] text-base text-colors-grey-colors-1000 hover:bg-gray-200'>
              <Image src={googlIcon} alt='google-icon' className='size-[1.2rem]' />
              {t("common.google")}
            </button>
          </div> */}
          <div className='mt-1.5rem text-center'>
            {pathname.includes("login") ? (
              <p className='text-14 text-gray-3'>
                {t("common.dont_have_an_account")}{" "}
                <Link className='font-bold text-colors-primary-colors-500' href='/auth/login'>
                  {t("common.create_account")}
                </Link>
              </p>
            ) : (
              <p className='text-14 text-gray-3'>
                {t("common.already_have_an_account")}{" "}
                <Link className='font-bold text-colors-primary-colors-500' href='/auth/register'>
                  {t("common.login")}
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className='relative hidden items-center bg-custom-primary-gradient px-2.5rem pt-3.5rem text-center md:flex md:flex-col'>
        <div>
          <span className='mb-1.88rem inline-flex h-[4.4375rem] items-center justify-center gap-0.5rem rounded-full bg-[#252525] px-1.75rem text-[13px] font-bold text-colors-grey-colors-100 lg:text-18'>
            <IconHome />
            Welcome to <span className='text-colors-primary-colors-400'>Real Estate Portal!</span>
            👋
          </span>

          <p className='font-bold leading-[2.8125rem] tracking-[-0.00438rem] text-colors-grey-colors-100 font-32'>
            {t.rich("common.find_your_dream", {
              span: (text) => (
                <>
                  <br />
                  <span className='text-colors-primary-colors-400'>{text}</span>
                </>
              ),
            })}
          </p>
        </div>

        <div>
          <Image
            src={ImageHero}
            alt='auth Image'
            className='absolute bottom-0 start-1/2 -translate-x-1/2'
          />
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
