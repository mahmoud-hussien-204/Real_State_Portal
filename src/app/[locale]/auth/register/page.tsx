"use client";

import {apiRegister} from "@/api";

import Button from "@/components/Button";

import {LabeledInput} from "@/components/custom-ui/LabeledInput";

import {PasswordInput} from "@/components/custom-ui/PasswordInput";

import SelectInput from "@/components/custom-ui/SelectInput";

import ErrorMsg from "@/components/ErrorMsg";

import {AppHelper} from "@/helpers/appHelper";

import useAppProvider from "@/hooks/useAppProvider";

import useMutation from "@/hooks/useMutation";

import {useRouter} from "@/i18n/routing";

import {yupResolver} from "@hookform/resolvers/yup";

import {ArrowRight} from "lucide-react";

import {useTranslations} from "next-intl";

import {useForm} from "react-hook-form";

import {BsFillPersonFill} from "react-icons/bs";

import {IoMailSharp} from "react-icons/io5";

import {FaPhoneAlt} from "react-icons/fa";

import {PiFlagFill} from "react-icons/pi";

import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  password_confirmation: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  type: Yup.mixed<"investor" | "agent">()
    .oneOf(["investor", "agent"], "Invalid type")
    .required("Type is required"),
  country_id: Yup.number().typeError("Country is required").required("Country is required"),
  phone: Yup.string().required("Phone is required"),
});

const RegisterPage = () => {
  const t = useTranslations();

  const router = useRouter();

  const {
    setValue,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IRegisterForm>({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      type: "agent",
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiRegister,
  });

  const {countries, setUser} = useAppProvider();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: (response) => {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        setUser(response.data.user);
        router.replace("/");
      },
    });
  });

  return (
    <form className='' onSubmit={onSubmit}>
      <div className='flex items-center gap-1rem'>
        <div className='flex-1'>
          <LabeledInput
            wrapperClassName='w-full'
            placeholder={t("contact_us.full_name")}
            icon={
              <BsFillPersonFill className='absolute left-4 top-1/2 size-[1.2rem] -translate-y-1/2 text-colors-grey-colors-800' />
            }
            className='ps-[3rem]'
            {...register("name")}
          />
        </div>
        <SelectInput
          defaultValue='agent'
          onValueChange={(value) => {
            setValue("type", value as "investor" | "agent", {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            });
          }}
          placeholder={t("common.type")}
          options={[
            {label: "Investor", value: "investor"},
            {label: "Agent", value: "agent"},
          ]}
          icon={<BsFillPersonFill className='size-[1.2rem]' />}
          className='max-w-10rem'
        />
      </div>
      <ErrorMsg msg={errors.name?.message} />

      <SelectInput
        onValueChange={(value) => {
          setValue("country_id", +value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
          });
        }}
        placeholder={t("common.country")}
        // @ts-expect-error check it later
        options={AppHelper.handleSelectBoxOptions(countries, "name_en", "id")}
        icon={<PiFlagFill className='size-[1.2rem]' />}
        className='mt-1.5rem flex-1'
      />
      <ErrorMsg msg={errors.country_id?.message} />

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

      <LabeledInput
        wrapperClassName='w-full'
        placeholder={t("common.your_email_address")}
        icon={
          <IoMailSharp className='absolute left-4 top-1/2 size-[1.2rem] -translate-y-1/2 text-colors-grey-colors-800' />
        }
        className='mt-1.5rem ps-[3rem]'
        {...register("email")}
      />
      <ErrorMsg msg={errors.email?.message} />

      <PasswordInput
        className='mt-1.5rem w-full'
        placeholder={t("common.password")}
        {...register("password")}
      />
      <ErrorMsg msg={errors.password?.message} />

      <PasswordInput
        className='mt-1.5rem w-full'
        placeholder={t("common.confirm_password")}
        {...register("password_confirmation")}
      />
      <ErrorMsg msg={errors.password_confirmation?.message} />

      <Button
        type='submit'
        className='mt-[2.5rem] h-3.25rem w-full rounded-full'
        variant='secondary'
        isLoading={isPending}
      >
        {t("common.register")}
        <div className='flex size-[1.3rem] flex-shrink-0 items-center justify-center rounded-full bg-white'>
          <ArrowRight className='size-[1rem] text-colors-grey-colors-1000' />
        </div>
      </Button>
    </form>
  );
};

export default RegisterPage;
