import formBackground from "@/app/assets/contact-us/form-bg.png";
import Button from "@/components/Button";
import SelectInput from "@/components/custom-ui/SelectInput";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/text-area";
import {fakePropertyTypeOptions} from "@/constants";
import {ArrowRight} from "lucide-react";
import {useTranslations} from "next-intl";
import {BsChatLeftTextFill, BsFillPersonFill} from "react-icons/bs";
import {IoMail} from "react-icons/io5";
const ContactFormSection = () => {
  const t = useTranslations();
  return (
    <section
      className='bg-cover bg-center py-4.5rem'
      style={{
        backgroundImage: `url(${formBackground.src})`,
      }}
    >
      <form className='mx-auto flex max-w-[90%] flex-col rounded-lg bg-[#FFFFFF42] px-[1.5rem] py-[1.5rem] backdrop:blur-lg md:max-w-[35rem] md:px-[2.5rem]'>
        <h2 className='mx-auto mb-2 text-32 font-bold text-white'>
          {t("contact_us.contact_form")}
        </h2>
        <p className='text-center text-[#FFFFFFC7]'>{t("contact_us.fill_out")}</p>
        <div className='mt-[1.5rem] flex flex-col gap-4'>
          <div className='w-full'>
            <label className='ms-1 font-semibold text-white'>{t("contact_us.your_name")}</label>
            <div className='mt-2 flex w-full items-center gap-2 rounded-full bg-[#FFFFFF1F] px-4 py-2'>
              <Input
                className='flex-1 rounded-none border-none bg-transparent font-medium text-white placeholder:text-white placeholder:opacity-70 focus-visible:ring-0 focus-visible:ring-offset-0'
                placeholder={t("contact_us.full_name")}
              />
              <BsFillPersonFill className='text-white' />
            </div>
          </div>
          <div className='w-full'>
            <label className='ms-1 font-semibold text-white'>
              {t("contact_us.email_or_phone")}
            </label>
            <div className='mt-2 flex w-full items-center gap-2 rounded-full bg-[#FFFFFF1F] px-4 py-2'>
              <Input
                className='flex-1 rounded-none border-none bg-transparent font-medium text-white placeholder:text-white placeholder:opacity-70 focus-visible:ring-0 focus-visible:ring-offset-0'
                placeholder={t("contact_us.email_or_phone")}
              />
              <IoMail className='text-white' fill='#fff' />
            </div>
          </div>
          <div className='w-full'>
            <label className='ms-1 font-semibold text-white'>{t("common.property_type")}</label>
            <div className='mt-2 flex w-full items-center gap-2 rounded-full bg-[#FFFFFF1F] px-4 py-2'>
              <SelectInput
                className='flex-1 rounded-none border-none bg-transparent py-0 font-medium text-white placeholder:text-white placeholder:opacity-70 focus:ring-0 focus:ring-offset-0 [&>svg]:text-white'
                placeholder={t("common.property_type")}
                options={fakePropertyTypeOptions}
              />
            </div>
          </div>
          <div className='w-full'>
            <label className='ms-1 font-semibold text-white'>{t("contact_us.message")}</label>
            <div className='mt-2 flex w-full gap-2 rounded-lg bg-[#FFFFFF1F] px-4 py-2'>
              <Textarea
                className='h-[11rem] flex-1 rounded-none border-none bg-transparent font-medium text-white placeholder:text-white placeholder:opacity-70 focus-visible:ring-0 focus-visible:ring-offset-0'
                placeholder={t("contact_us.your_message")}
              />
              <BsChatLeftTextFill className='mt-2 text-white' fill='#fff' />
            </div>
          </div>
        </div>
        <Button
          className='mt-5 flex w-full items-center justify-center gap-2 rounded-full border-none'
          variant='primary-600'
        >
          {t("contact_us.send_request")}
          <div className='flex size-[1.2rem] items-center justify-center rounded-full bg-white'>
            <ArrowRight className='size-[1rem] text-colors-primary-colors-600' />
          </div>
        </Button>
      </form>
    </section>
  );
};

export default ContactFormSection;
