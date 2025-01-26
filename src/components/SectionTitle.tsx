import {AppHelper} from "@/helpers/appHelper";

interface IProps {
  title: React.ReactNode;
  subtitle: string;
  className?: string;
}

const SectionTitle = ({subtitle, title, className}: IProps) => {
  return (
    <div className='mb-3.5rem'>
      <span className='mb-1.25rem inline-flex h-2.5rem min-w-[15rem] items-center justify-center rounded-full bg-colors-primary-colors-600 px-0.5rem text-14 font-semibold uppercase tracking-[0.175rem] text-colors-grey-colors-100'>
        {subtitle}
      </span>
      <h3
        className={AppHelper.className(
          "font-bold capitalize leading-3.5rem text-colors-grey-colors-2000 font-48 [&>span]:text-colors-primary-colors-600",
          className
        )}
      >
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
