type IProps = React.PropsWithChildren & {
  title: React.ReactNode;
};

const Box = ({title, children}: IProps) => {
  return (
    <div className='h-full rounded-1.25rem bg-white px-2rem py-1.5rem'>
      <h4 className='mb-1.5rem border-b border-b-black/20 pb-1.5rem text-28 font-bold text-colors-grey-colors-1000'>
        {title}
      </h4>
      <div>{children}</div>
    </div>
  );
};

export default Box;

export const BoxText = ({children}: React.PropsWithChildren) => {
  return (
    <p className='mb-1.5rem text-20 font-medium leading-2rem text-colors-grey-colors-1000 opacity-60 last:mb-0'>
      {children}
    </p>
  );
};
