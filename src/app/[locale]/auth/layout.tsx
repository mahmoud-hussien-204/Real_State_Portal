"use client";
import Image from "next/image";
import authImage from "@/app/assets/auth-bg.svg";
import {useTranslations} from "next-intl";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {Link} from "@/i18n/routing";
type IProps = React.PropsWithChildren;

const AuthLayout = ({children}: IProps) => {
  const t = useTranslations();
  const pathname = usePathname();
  return (
    <main className='flex h-screen justify-between overflow-hidden pe-[5%] ps-[5%] pt-[10vh] md:pe-0 md:ps-0 md:pt-0'>
      <div className='relative mx-auto mt-[4rem] flex w-full flex-col items-center px-[5%] pt-[2rem] md:w-[70%] md:px-0 xl:w-[45%]'>
        <h1 className='text-center text-38 font-bold uppercase text-colors-grey-colors-1000'>
          Welcome Back! 👋🏻
        </h1>
        <div className='mt-6 flex h-[3.6rem] w-full items-center rounded-full bg-[#ECECEC] md:w-[60%]'>
          <Link
            href={"/auth/login"}
            className={cn(
              "flex h-full w-1/2 items-center justify-center text-center text-lg",
              pathname.includes("login") &&
                "rounded-full bg-colors-primary-colors-500 font-bold text-white"
            )}
          >
            {t("common.login")}
          </Link>
          <Link
            href={"/auth/register"}
            className={cn(
              "flex h-full w-1/2 items-center justify-center text-center text-lg",
              pathname.includes("register") &&
                "rounded-full bg-colors-primary-colors-500 font-bold text-white"
            )}
          >
            {t("common.register")}
          </Link>
        </div>
        {children}
      </div>
      <div className='hidden w-[50%] md:block'>
        <Image
          src={authImage}
          alt='auth Image'
          className='h-full w-full object-cover object-center'
        />
      </div>
    </main>
  );
};

export default AuthLayout;
