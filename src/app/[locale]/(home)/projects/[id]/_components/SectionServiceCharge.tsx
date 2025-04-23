import {useTranslations} from "next-intl";
import Box from "./Box";
import Item from "./Item";

function SectionServiceCharge({serviceCharge}: {serviceCharge?: number}) {
  const t = useTranslations();
  return (
    <Box title={t("common.service_charge")}>
      <Box variant='secondary'>
        <Item title={t("common.service_charge")} subtitle={`${serviceCharge} sqft/M2`} />
      </Box>
    </Box>
  );
}

export default SectionServiceCharge;
