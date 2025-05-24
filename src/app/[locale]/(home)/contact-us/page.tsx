import PageHeroSection from "@/components/PageHeroSection";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactFormSection from "./components/ContactFormSection";
import ContactUsBannerSection from "./components/ContactUsBannerSection";

const ContactUsPage = () => {
  return (
    <>
      <PageHeroSection title='page_hero_title.contact_us' pageName='page_title.contact_us' />
      <ContactUsBannerSection section='1' />
      <ContactInfoSection />
      <ContactUsBannerSection section='2' />
      <ContactFormSection />
      {/* <Partners /> */}
    </>
  );
};

export default ContactUsPage;
