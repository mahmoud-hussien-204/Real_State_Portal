"use client";

import {LabeledInput} from "@/components/custom-ui/LabeledInput";

import {ArrowRight} from "lucide-react";

import {useTranslations} from "next-intl";

import {BsFillPersonFill} from "react-icons/bs";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {yupResolver} from "@hookform/resolvers/yup";

import ErrorMsg from "@/components/ErrorMsg";

import useMutation from "@/hooks/useMutation";

import {apiVerifyAccount} from "@/api";

import Button from "@/components/Button";

import {useRouter} from "@/i18n/routing";
import useAppProvider from "@/hooks/useAppProvider";
import {toast} from "react-toastify";

const schema = Yup.object().shape({
  otp: Yup.string().required("OTP is required").min(4, "OTP must be at least 4 digits"),
});

const VerifyPage = () => {
  const t = useTranslations();
  const {setUser} = useAppProvider();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<{otp: string}>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const {mutate, isPending} = useMutation({
    mutationFn: (data: {otp: string}) => {
      const userId = JSON.parse(localStorage.getItem("userData") || "{}").id;
      if (!userId) {
        toast.error("User ID not found. Please try again.");
        return Promise.reject(new Error("User ID not found"));
      }
      console.log(userId);
      return apiVerifyAccount({otp: data.otp}, {userId});
    },

    onSuccess: (response) => {
      console.log("Verification successful", response.data.user);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userData", JSON.stringify(response.data.user));
      setUser(response.data.user);
      router.replace("/");
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate({otp: data.otp});
  });

  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <h1 className='text-center text-32 font-bold uppercase text-colors-grey-colors-1000'>
        {t("common.verify_your_account")} 🔒
      </h1>
      <form className='my-auto w-full' onSubmit={onSubmit}>
        <LabeledInput
          wrapperClassName='w-full'
          placeholder={t("common.enter_your_otp")}
          icon={
            <BsFillPersonFill className='absolute left-4 top-1/2 size-[1.2rem] -translate-y-1/2 text-colors-grey-colors-800' />
          }
          className='ps-[3rem]'
          {...register("otp")}
        />

        <ErrorMsg msg={errors.otp?.message} />

        <Button
          type='submit'
          className='mt-[2.5rem] h-3.25rem w-full rounded-full'
          variant='secondary'
          isLoading={isPending}
        >
          {t("common.verify_account")}
          <div className='flex size-[1.3rem] flex-shrink-0 items-center justify-center rounded-full bg-white'>
            <ArrowRight className='size-[1rem] text-colors-grey-colors-1000' />
          </div>
        </Button>
      </form>
    </div>
  );
};

export default VerifyPage;
