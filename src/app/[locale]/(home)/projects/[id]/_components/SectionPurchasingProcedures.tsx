import {useTranslations} from "next-intl";
import Box from "./Box";
import Item from "./Item";

function SectionPurchasingProcedures() {
  const t = useTranslations();
  return (
    <Box>
      <Box variant='secondary' title={t("common.purchasing_procedures")}>
        <Item title={"Banking Amount"} subtitle='16%' className='mt-4' />
        <Item title={"Down Payment/Full Cash"} subtitle='' className='mt-4' />

        <Item title={"Property Registration Fees %"} subtitle='16%' className='mt-4' />
        <Item title={"Admin Fees"} subtitle='AUD/USD' className='mt-4' />

        <Item title={"Extra Fees:"} subtitle='16%' className='mt-4' />

        <Item title={"Banking Amount"} subtitle='16%' className='mt-4' />
      </Box>
    </Box>
  );
}

export default SectionPurchasingProcedures;
