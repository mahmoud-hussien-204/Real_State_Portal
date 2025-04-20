import {useTranslations} from "next-intl";
import Box from "./Box";
import Item from "./Item";

function SectionDiscountPolicy() {
  const t = useTranslations();
  return (
    <Box title={t("common.discount_policy")}>
      <Box variant='secondary'>
        <Item title={t("common.full_cash")} subtitle='5%' className='mb-4' />
        <Item title={t("common.payment_plan")} subtitle='25%' />
      </Box>
    </Box>
  );
}

export default SectionDiscountPolicy;
