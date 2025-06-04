"use client";

import {useForm} from "react-hook-form";
import {useTranslations} from "next-intl";
import Button from "@/components/Button";
import {LabeledInput} from "@/components/custom-ui/LabeledInput";
import {FaLock} from "react-icons/fa";
import useMutation from "@/hooks/useMutation";
import {apiUpdatePassword} from "../../_api";
import {IUpdatePasswordForm} from "../../_interfaces";

export default function SecurityPage() {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<IUpdatePasswordForm>();

  const {mutate, isPending} = useMutation({
    mutationFn: apiUpdatePassword,
  });

  const onSubmit = (data: IUpdatePasswordForm) => {
    mutate(data);
  };

  return (
    <div>
      <h1 className='mb-6 text-2xl font-bold'>{t("profile.security")}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-2'>
          <LabeledInput
            type='password'
            wrapperClassName='w-full'
            placeholder={t("common.old_password")}
            icon={
              <FaLock className='absolute left-4 top-1/2 size-[1.2rem] -translate-y-1/2 text-colors-grey-colors-800' />
            }
            className='mt-1.5rem ps-[3rem]'
            {...register("old_password", {required: "Current password is required"})}
          />
          {errors.old_password && (
            <p className='text-sm text-red-500'>{errors.old_password.message}</p>
          )}
        </div>

        <div className='space-y-2'>
          <LabeledInput
            type='password'
            wrapperClassName='w-full'
            placeholder={t("common.password")}
            icon={
              <FaLock className='absolute left-4 top-1/2 size-[1.2rem] -translate-y-1/2 text-colors-grey-colors-800' />
            }
            className='mt-1.5rem ps-[3rem]'
            {...register("password", {
              required: "New password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
        </div>

        <div className='space-y-2'>
          <LabeledInput
            type='password'
            wrapperClassName='w-full'
            placeholder={t("common.confirm_password")}
            icon={
              <FaLock className='absolute left-4 top-1/2 size-[1.2rem] -translate-y-1/2 text-colors-grey-colors-800' />
            }
            className='mt-1.5rem ps-[3rem]'
            {...register("password_confirm", {
              required: "Please confirm your password",
              validate: (value) => value === watch("password") || "The passwords do not match",
            })}
          />
          {errors.password_confirm && (
            <p className='text-sm text-red-500'>{errors.password_confirm.message}</p>
          )}
        </div>

        <Button isLoading={isPending} type='submit' className='w-full'>
          Update Password
        </Button>
      </form>
    </div>
  );
}
