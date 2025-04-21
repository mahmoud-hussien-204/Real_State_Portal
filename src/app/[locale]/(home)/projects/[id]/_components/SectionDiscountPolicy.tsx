import {useTranslations} from "next-intl";
import Box from "./Box";
import Item from "./Item";

function SectionDiscountPolicy({discountPolicy}: {discountPolicy?: IDiscountPolicy}) {
  const t = useTranslations();
  return (
    <Box title={t("common.discount_policy")}>
      <Box variant='secondary'>
        <Item
          title={t("common.full_cash")}
          subtitle={`${discountPolicy?.full_cash || 5}%`}
          className='mb-4'
        />
        <Item
          title={t("common.payment_plan")}
          subtitle={`${discountPolicy?.payment_plan || 15}%`}
        />
      </Box>
    </Box>
  );
}

export default SectionDiscountPolicy;
