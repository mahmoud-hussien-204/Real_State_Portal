import {useLocale, useTranslations} from "next-intl";
import DeveloperCard from "./DeveloperCard";
import Box, {BoxText} from "./Box";

function SectionAboutDeveloper({
  aboutDeveloper,
  developerCard,
}: {
  aboutDeveloper?: IAboutDeveloper;
  developerCard?: ICardDeveloper;
}) {
  const t = useTranslations();
  const locale = useLocale();
  const displayedText =
    locale === "en"
      ? aboutDeveloper?.about_en
      : aboutDeveloper?.about_ar ||
        "Copen Gate Project The name of the project is inspired by the Danish capital, Copen Hagen.The project is a mini compound, which is a group of buildings. The project location is in the small investor of distinguished housing on the new tourist road. Compound services (garage, gym, kids area)";

  const displayedName = locale === "en" ? developerCard?.name_en : developerCard?.name_ar;
  return (
    <Box title={t("common.about_developer")}>
      <Box variant='secondary'>
        <BoxText>{displayedText}</BoxText>
      </Box>

      <DeveloperCard
        developerPhone={developerCard?.phone || "0542285830"}
        developerName={displayedName || "Kamal AbdelGhany"}
        developerEmail={developerCard?.website || ""}
      />
    </Box>
  );
}

export default SectionAboutDeveloper;
