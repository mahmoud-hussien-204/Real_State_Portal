import React from "react";

const IconLineArrowRight = ({svgProps}: ISVGProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='14'
      fill='none'
      viewBox='0 0 18 14'
      {...svgProps}
    >
      <path
        className='fill-current'
        fillRule='evenodd'
        d='M10.47.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H1a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default IconLineArrowRight;
