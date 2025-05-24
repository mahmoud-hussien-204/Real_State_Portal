import {Paths, useTranslate} from "@/helpers/translate";

export type PageSectionTitleProps = {
  title: Paths<IntlMessages>;
  subtitle: Paths<IntlMessages>;
  count?: number;
};
const PageSectionTitle = ({title, subtitle, count}: PageSectionTitleProps) => {
  const translate = useTranslate();
  return (
    <div>
      <h2 className='mb-2 text-32 font-bold text-[#242526]'>{translate(title)}</h2>
      <p className='text-18 font-medium text-[#24252699]'>
        {count !== undefined && count > 0
          ? translate(subtitle, {count: count.toLocaleString()})
          : translate(subtitle)}
      </p>
    </div>
  );
};

export default PageSectionTitle;
