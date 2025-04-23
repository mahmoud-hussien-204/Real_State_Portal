import {useTranslations} from "next-intl";
import Box from "./Box";
import Item from "./Item";

function SectionPurchasingProcedures({
  purchaseingProcedures,
}: {
  purchaseingProcedures?: IPurchasingProcedures;
}) {
  const t = useTranslations();
  return (
    <Box>
      <Box variant='secondary' title={t("common.purchasing_procedures")}>
        <Item
          title={"Booking Account"}
          subtitle={`${purchaseingProcedures?.booking_account}`}
          className='mt-4'
        />
        <Item
          title={"Down Payment/Full Cash"}
          subtitle={`${purchaseingProcedures?.down_Payment}`}
          className='mt-4'
        />

        <Item
          title={"Property Registration Fees %"}
          subtitle={`${purchaseingProcedures?.registration_fees}`}
          className='mt-4'
        />
        <Item
          title={"Admin Fees"}
          subtitle={`${purchaseingProcedures?.admin_Fees}`}
          className='mt-4'
        />

        <Item
          title={"Extra Fees:"}
          subtitle={`${purchaseingProcedures?.extra_fees}`}
          className='mt-4'
        />

        <Item
          title={"Furniture Package:"}
          subtitle={`${purchaseingProcedures?.furniture_package}`}
          className='mt-4'
        />
      </Box>
    </Box>
  );
}

export default SectionPurchasingProcedures;
