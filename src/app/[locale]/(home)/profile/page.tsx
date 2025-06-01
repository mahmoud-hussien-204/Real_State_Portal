"use client";

import {useForm} from "react-hook-form";
import {useTranslations} from "next-intl";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

interface ProfileFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
}

export default function ProfilePage() {
  const t = useTranslations();
  const {register, handleSubmit} = useForm<ProfileFormData>();

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
    // TODO: Implement profile update logic
  };

  return (
    <div>
      <h1 className='mb-6 text-2xl font-bold'>Profile Information</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-2'>
          <Label htmlFor='name'>Name</Label>
          <Input id='name' {...register("name")} placeholder='Enter your name' className='w-full' />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            {...register("email")}
            placeholder='Enter your email'
            className='w-full'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='phone'>Phone</Label>
          <Input
            id='phone'
            {...register("phone")}
            placeholder='Enter your phone number'
            className='w-full'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='country'>Country</Label>
          <Input
            id='country'
            {...register("country")}
            placeholder='Enter your country'
            className='w-full'
          />
        </div>

        <Button type='submit' className='w-full'>
          Update Profile
        </Button>
      </form>
    </div>
  );
}
