import {Paths, translate} from "@/helpers/translate";

export type PageSectionTitleProps = {
  title: Paths<IntlMessages>;
  subtitle: Paths<IntlMessages>;
};
const PageSectionTitle = ({title, subtitle}: PageSectionTitleProps) => {
  return (
    <div>
      <h2 className='mb-2 text-32 font-bold text-[#242526]'>{translate(title)}</h2>
      <p className='text-18 font-medium text-[#24252699]'>{translate(subtitle)}</p>
    </div>
  );
};

export default PageSectionTitle;
