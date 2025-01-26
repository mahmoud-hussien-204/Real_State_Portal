import {useTranslations} from "next-intl";

import LinkButton from "./LinkButton";

import IconArrowRight from "@/icons/IconArrowRight";

interface IProps {
  href: string;
}

const ExploreMoreButton = ({href}: IProps) => {
  const t = useTranslations();

  return (
    <LinkButton
      href={href}
      className='h-3.5rem rounded-full md:min-w-[13.5rem]'
      variant='primary-600'
    >
      {t("home.explore_more")}
      <IconArrowRight />
    </LinkButton>
  );
};

export default ExploreMoreButton;
