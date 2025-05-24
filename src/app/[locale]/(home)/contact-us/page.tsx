import PageHeroSection from "@/components/PageHeroSection";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactFormSection from "./components/ContactFormSection";

const ContactUsPage = () => {
  return (
    <>
      <PageHeroSection title='page_hero_title.contact_us' pageName='page_title.contact_us' />
      <ContactInfoSection />
      <ContactFormSection />
      {/* <Partners /> */}
    </>
  );
};

export default ContactUsPage;
