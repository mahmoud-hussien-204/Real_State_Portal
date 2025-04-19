import {useTranslations} from "next-intl";
import DeveloperCard from "./DeveloperCard";
import Box, {BoxText} from "./Box";

function SectionAboutDeveloper() {
  const t = useTranslations();

  return (
    <Box title={t("common.about_developer")}>
      <Box variant='secondary'>
        <BoxText>
          Copen Gate Project The name of the project is inspired by the Danish capital, Copen Hagen.
          The project is a mini compound, which is a group of buildings. The project location is in
          the small investor of distinguished housing on the new tourist road. Compound services
          (garage, gym, kids area)
        </BoxText>
        <BoxText>
          Copen Gate Project The name of the project is inspired by the Danish capital, Copen Hagen.
          The project is a mini compound, which is a group of buildings.
        </BoxText>
      </Box>

      <DeveloperCard
        developerPhone='0542285830'
        developerName='Kamal AbdelGhany'
        developerEmail='info@aera-capital.com'
      />
    </Box>
  );
}

export default SectionAboutDeveloper;
