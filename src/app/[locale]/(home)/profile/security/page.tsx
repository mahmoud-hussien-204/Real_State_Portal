"use client";

import {useForm} from "react-hook-form";
import {useTranslations} from "next-intl";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

interface SecurityFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function SecurityPage() {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<SecurityFormData>();

  const onSubmit = (data: SecurityFormData) => {
    console.log(data);
    // TODO: Implement password update logic
  };

  return (
    <div>
      <h1 className='mb-6 text-2xl font-bold'>Security Settings</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-2'>
          <Label htmlFor='currentPassword'>Current Password</Label>
          <Input
            id='currentPassword'
            type='password'
            {...register("currentPassword", {required: "Current password is required"})}
            placeholder='Enter your current password'
            className='w-full'
          />
          {errors.currentPassword && (
            <p className='text-sm text-red-500'>{errors.currentPassword.message}</p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='newPassword'>New Password</Label>
          <Input
            id='newPassword'
            type='password'
            {...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            placeholder='Enter your new password'
            className='w-full'
          />
          {errors.newPassword && (
            <p className='text-sm text-red-500'>{errors.newPassword.message}</p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='confirmPassword'>Confirm New Password</Label>
          <Input
            id='confirmPassword'
            type='password'
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => value === watch("newPassword") || "The passwords do not match",
            })}
            placeholder='Confirm your new password'
            className='w-full'
          />
          {errors.confirmPassword && (
            <p className='text-sm text-red-500'>{errors.confirmPassword.message}</p>
          )}
        </div>

        <Button type='submit' className='w-full'>
          Update Password
        </Button>
      </form>
    </div>
  );
}
