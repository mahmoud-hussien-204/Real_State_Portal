"use client";
import googlIcon from "@/app/assets/google-icon.svg";
import {LabeledInput} from "@/components/custom-ui/LabeledInput";
import {PasswordInput} from "@/components/custom-ui/PasswordInput";
import {Link} from "@/i18n/routing";
import {ArrowRight} from "lucide-react";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {BsFillPersonFill} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";
import {IoMailSharp} from "react-icons/io5";

const RegisterPage = () => {
  const t = useTranslations();
  return (
    <div className='mx-auto mt-[2.5rem] w-full md:w-[70%]'>
      <form className='flex w-full flex-col gap-[1.5rem]'>
        <LabeledInput
          wrapperClassName='w-full'
          placeholder={t("contact_us.full_name")}
          icon={
            <BsFillPersonFill className='absolute left-4 top-1/2 size-[1.2rem] -translate-y-1/2 text-colors-grey-colors-800' />
          }
          className='ps-[3rem]'
        />
        <LabeledInput
          wrapperClassName='w-full'
          placeholder={t("common.your_email_address")}
          icon={
            <IoMailSharp className='absolute left-4 top-1/2 size-[1.2rem] -translate-y-1/2 text-colors-grey-colors-800' />
          }
          className='ps-[3rem]'
        />
        <PasswordInput className='w-full' placeholder={t("common.password")} />
        <PasswordInput className='w-full' placeholder={t("common.confirm_password")} />

        <button className='mt-[1.5rem] flex h-[3.5rem] w-full items-center justify-center gap-2 rounded-full bg-colors-grey-colors-1000 text-lg font-bold text-white hover:bg-colors-grey-colors-800'>
          {t("common.register")}
          <div className='flex size-[1.3rem] flex-shrink-0 items-center justify-center rounded-full bg-white'>
            <ArrowRight className='size-[1rem] text-colors-grey-colors-1000' />
          </div>
        </button>
      </form>

      <span className='mx-auto mt-[1.5rem] block w-fit text-lg text-colors-grey-colors-1000'>
        {t("common.or")}
      </span>
      <div className='mt-[1.5rem] flex w-full justify-between'>
        <button className='flex h-[3.5rem] w-[48%] items-center justify-center gap-2 rounded-full bg-[#006CD0] text-base text-white hover:bg-blue-400'>
          <FaFacebook className='size-[1.2rem] text-transparent' fill='#fff' />
          {t("common.facebook")}
        </button>
        <button className='flex h-[3.5rem] w-[48%] items-center justify-center gap-2 rounded-full bg-[#F9F9F9] text-base text-colors-grey-colors-1000 hover:bg-gray-200'>
          <Image src={googlIcon} alt='google-icon' className='size-[1.2rem]' />
          {t("common.google")}
        </button>
      </div>
      <div className='mx-auto mt-[2rem] flex w-fit gap-2 text-base md:text-sm'>
        <p className='text-gray-500'>{t("common.already_have_an_account")}</p>
        <Link className='font-bold text-colors-primary-colors-500' href='/auth/register'>
          {t("common.login")}
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
