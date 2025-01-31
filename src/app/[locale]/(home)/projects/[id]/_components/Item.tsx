type IProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
};

const Item = ({icon, subtitle, title}: IProps) => {
  return (
    <div className='flex h-3.75rem flex-1 items-center justify-between rounded-0.75rem bg-white px-1rem'>
      <div className='flex items-center gap-0.5rem'>
        <span className='flex size-2rem items-center justify-center rounded-full bg-colors-primary-colors-50 text-colors-primary-colors-400'>
          {icon}
        </span>
        <h6 className='font-sem text-12 text-colors-grey-colors-800'>{title}</h6>
      </div>
      <h6 className='text-16 font-bold text-colors-grey-colors-1000'>{subtitle}</h6>
    </div>
  );
};

export default Item;
