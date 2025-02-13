"use client";

import {LabeledInput} from "@/components/custom-ui/LabeledInput";

import {PasswordInput} from "@/components/custom-ui/PasswordInput";

import {ArrowRight} from "lucide-react";

import {useTranslations} from "next-intl";

import {BsFillPersonFill} from "react-icons/bs";

import {IoMailSharp} from "react-icons/io5";

const RegisterPage = () => {
  const t = useTranslations();
  return (
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
  );
};

export default RegisterPage;
