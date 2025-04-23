type IProps = React.PropsWithChildren & {
  title?: React.ReactNode;
  variant?: "primary" | "secondary";
};

const Box = ({title, children, variant = "primary"}: IProps) => {
  return (
    <div
      className={`h-full rounded-1.25rem ${variant === "primary" ? "bg-white" : "bg-[#F4F4F4]"} px-2rem py-1.5rem`}
    >
      {title && (
        <h4 className='mb-1.5rem border-b border-b-black/20 pb-1.5rem text-28 font-bold text-colors-grey-colors-1000'>
          {title}
        </h4>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Box;

export const BoxText = ({
  children,
  variant,
}: React.PropsWithChildren & {variant?: "primary" | "secondary"}) => {
  return (
    <p
      className={`mb-1.5rem text-20 font-medium leading-2rem text-colors-grey-colors-1000 opacity-60 last:mb-0 ${variant === "primary" ? "bg-white" : "bg-[#F4F4F4]"}`}
    >
      {children}
    </p>
  );
};
