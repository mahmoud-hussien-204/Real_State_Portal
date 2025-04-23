import Box, {BoxText} from "./Box";
import {useTranslations} from "next-intl";

function SectionAboutTheOffice() {
  const t = useTranslations();

  return (
    <Box title={t("common.about_office")}>
      <BoxText variant='primary'>
        Copen Gate Project The name of the project is inspired by the Danish capital, Copen Hagen.
        The project is a mini compound, which is a group of buildings. The project location is in
        the small investor of distinguished housing on the new tourist road. Compound services
        (garage, gym, kids area). Copen Gate Project The name of the project is inspired by the
        Danish capital, Copen Hagen. The project is a mini compound, which is a group of buildings.
      </BoxText>
    </Box>
  );
}

export default SectionAboutTheOffice;
