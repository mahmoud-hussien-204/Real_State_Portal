const IconLogout = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      fill='none'
      viewBox='0 0 18 18'
      className='h-0.75rem w-0.75rem'
    >
      <path
        className='fill-current'
        d='M9 .25a.75.75 0 010 1.5 7.25 7.25 0 000 14.5.75.75 0 010 1.5A8.75 8.75 0 119 .25z'
      ></path>
      <path
        className='fill-current'
        d='M13.47 6.53a.75.75 0 011.06-1.06l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H7a.75.75 0 010-1.5h8.19l-1.72-1.72z'
      ></path>
    </svg>
  );
};

export default IconLogout;

export const LogoutIcon2 = ({pathProps, svgProps}: ISvgIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 22 22'
      width='20'
      height='20'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-log-in'
      {...svgProps}
    >
      <path
        style={{fill: "var(--Text-T-100)"}}
        d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4'
        {...pathProps}
      />
      <polyline points='10 17 15 12 10 7' />
      <line x1='15' y1='12' x2='3' y2='12' />
    </svg>
  );
};
