"use client";

import {useForm} from "react-hook-form";
import {useTranslations} from "next-intl";
import useQuery from "@/hooks/useQuery";
import useAppProvider from "@/hooks/useAppProvider";
import {apiGetProfile, apiUpdateProfile} from "../_api";
import {useEffect} from "react";
import {IProfileForm} from "../_interfaces";
import Spinner from "@/components/ui/spinner";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from "yup";
import ErrorMsg from "@/components/ErrorMsg";
import {PiFlagFill} from "react-icons/pi";
import SelectInput, {SelectOption} from "@/components/custom-ui/SelectInput";
import {AppHelper} from "@/helpers/appHelper";
import {LabeledInput} from "@/components/custom-ui/LabeledInput";
import {FaEnvelope, FaPhoneAlt, FaUser} from "react-icons/fa";
import useMutation from "@/hooks/useMutation";
import Button from "@/components/Button";
import {toast} from "react-toastify";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  country_id: yup.number().typeError("Country is required").required("Country is required"),
});

export default function ProfilePage() {
  const t = useTranslations();

  const {user, countries} = useAppProvider();

  const {data, isFetching} = useQuery({
    queryFn: () => apiGetProfile((user?.id as unknown as string) || ""),
    queryKey: ["profile", user?.id],
    enabled: !!user?.id,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
    setValue,
    getValues,
  } = useForm<IProfileForm>({
    resolver: yupResolver(schema),
  });

  // Set form default values when data is received
  useEffect(() => {
    if (data?.data && !isFetching) {
      reset({
        name: data.data.name,
        email: data.data.email,
        phone: data.data.phone,
        country_id: data.data.country_id,
      });
    }
  }, [data, reset, isFetching]);

  const {mutate, isPending} = useMutation({
    mutationFn: apiUpdateProfile,
  });

  const onSubmit = (data: IProfileForm) => {
    mutate(data, {
      onSuccess: () => {
        toast.success(t("common.profile_updated_successfully"));
      },
    });
  };

  return (
    <div>
      <h1 className='mb-6 text-2xl font-bold'>
        {isFetching && <Spinner className='!loading-sm' />} Profile Information
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <LabeledInput
          wrapperClassName='w-full'
          placeholder={t("common.name")}
          icon={
            <FaUser className='absolute left-4 top-1/2 size-[1.2rem] -translate-y-1/2 text-colors-grey-colors-800' />
          }
          className='mt-1.5rem ps-[3rem]'
          {...register("name")}
        />
        <ErrorMsg msg={errors.name?.message} />

        <LabeledInput
          wrapperClassName='w-full'
          placeholder={t("common.email")}
          icon={
            <FaEnvelope className='absolute left-4 top-1/2 size-[1.2rem] -translate-y-1/2 text-colors-grey-colors-800' />
          }
          className='mt-1.5rem ps-[3rem]'
          {...register("email")}
        />
        <ErrorMsg msg={errors.email?.message} />

        <LabeledInput
          wrapperClassName='w-full'
          placeholder={t("common.phone")}
          icon={
            <FaPhoneAlt className='absolute left-4 top-1/2 size-[1.2rem] -translate-y-1/2 text-colors-grey-colors-800' />
          }
          className='mt-1.5rem ps-[3rem]'
          {...register("phone")}
        />
        <ErrorMsg msg={errors.phone?.message} />

        <div className='space-y-2'>
          <SelectInput
            onValueChange={(value) => {
              setValue("country_id", +value, {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
              });
            }}
            placeholder={t("common.country")}
            options={AppHelper.handleSelectBoxOptions(countries, "name_en", "id") as SelectOption[]}
            icon={<PiFlagFill className='size-[1.2rem]' />}
            value={getValues("country_id")?.toString()}
          />
        </div>

        <Button
          isLoading={isPending}
          type='submit'
          className='w-full text-white'
          disabled={isPending}
        >
          Update Profile
        </Button>
      </form>
    </div>
  );
}
