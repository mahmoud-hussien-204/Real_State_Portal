import Container from "@/components/Container";
import emailImage from "@/app/assets/contact-us/email.png";
import locationImage from "@/app/assets/contact-us/location.png";
import phoneImage from "@/app/assets/contact-us/phone.png";
import Image from "next/image";
const info = [
  {
    image: locationImage,
    title: "العنوان",
    subtitle: "جدة - السعودية",
    link: "#",
  },
  {
    image: phoneImage,
    title: "رقم الهاتف",
    subtitle: "+9763665462132",
    link: "tel:+9763665462132",
  },
  {
    image: emailImage,
    title: "البريد الإلكتروني",
    subtitle: "Info.Montaleg@gmail.com",
    link: "mailto:Info.Montaleg@gmail.com",
  },
];
const ContactInfoSection = () => {
  return (
    <section className='bg-neural-colors-50 py-[7rem]'>
      <Container>
        <div className='mx-auto flex max-w-[60rem] flex-wrap justify-center gap-y-6 md:justify-between'>
          {info.map((item, index) => (
            <a
              key={index}
              className='flex aspect-[4/3] w-[18rem] flex-col items-center justify-center rounded-lg'
              style={{
                background: "linear-gradient(to right, #fce4e4 0%, #fce4e4 100%)",
              }}
              href={item.link}
            >
              <Image className='w-[3.5rem]' src={item.image} alt={item.title} />
              <span className='mb-2 mt-4 block text-24 font-bold text-colors-grey-colors-2000'>
                {item.title}
              </span>
              <span className='block text-sm text-colors-grey-colors-900'>{item.subtitle}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactInfoSection;
