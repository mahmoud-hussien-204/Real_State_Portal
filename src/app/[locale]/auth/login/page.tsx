"use client";

import {LabeledInput} from "@/components/custom-ui/LabeledInput";

import {PasswordInput} from "@/components/custom-ui/PasswordInput";

import {Checkbox} from "@/components/ui/checkbox";

import {ArrowRight} from "lucide-react";

import {useTranslations} from "next-intl";

import {BsFillPersonFill} from "react-icons/bs";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {yupResolver} from "@hookform/resolvers/yup";

import ErrorMsg from "@/components/ErrorMsg";

import useMutation from "@/hooks/useMutation";

import {apiLogin} from "@/api";

import Button from "@/components/Button";

import {useRouter} from "@/i18n/routing";
import useAppProvider from "@/hooks/useAppProvider";

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const t = useTranslations();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiLogin,
  });

  const {setUser} = useAppProvider();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: (response) => {
        console.log("Login successful", response.data.user);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        setUser(response.data.user);
        router.replace("/");
      },
    });
  });

  return (
    <form className='w-full' onSubmit={onSubmit}>
      <LabeledInput
        wrapperClassName='w-full'
        placeholder={t("common.your_email_address")}
        icon={
          <BsFillPersonFill className='absolute left-4 top-1/2 size-[1.2rem] -translate-y-1/2 text-colors-grey-colors-800' />
        }
        className='ps-[3rem]'
        {...register("username")}
      />

      <ErrorMsg msg={errors.username?.message} />

      <PasswordInput
        className='mt-[1.5rem] w-full'
        placeholder={t("common.password")}
        {...register("password")}
      />
      <ErrorMsg msg={errors.password?.message} />

      <div className='mt-[2rem] flex w-full justify-between'>
        <div className='flex items-center gap-2'>
          <Checkbox />
          <span className='text-sm text-colors-grey-colors-800'>{t("common.remember_me")}</span>
        </div>
        <div className='font-medium text-colors-grey-colors-1000'>
          {t("common.forgot_password")}
        </div>
      </div>

      <Button
        type='submit'
        className='mt-[2.5rem] h-3.25rem w-full rounded-full'
        variant='secondary'
        isLoading={isPending}
      >
        {t("common.login")}
        <div className='flex size-[1.3rem] flex-shrink-0 items-center justify-center rounded-full bg-white'>
          <ArrowRight className='size-[1rem] text-colors-grey-colors-1000' />
        </div>
      </Button>
    </form>
  );
};

export default LoginPage;
