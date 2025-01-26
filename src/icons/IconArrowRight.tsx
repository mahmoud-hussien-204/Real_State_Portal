const IconArrowRight = ({svgProps}: ISVGProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='24'
      fill='none'
      viewBox='0 0 25 24'
      {...svgProps}
    >
      <path
        className='fill-current'
        d='M24.49 12c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12m-12.267 5.27a.924.924 0 0 1-.006-1.305l3.019-3.042H7.529a.923.923 0 0 1 0-1.846h7.707l-3.019-3.042a.923.923 0 1 1 1.312-1.3l4.58 4.615a.923.923 0 0 1 0 1.3l-4.58 4.616a.923.923 0 0 1-1.306.005'
      ></path>
    </svg>
  );
};

export default IconArrowRight;
