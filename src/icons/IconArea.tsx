const IconArea = ({className}: {className?: string}) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clipPath='url(#clip0_127_4745)'>
        <rect x='2.34375' y='3.14453' width='19.2972' height='19.2972' stroke='#327BA3' />
        <rect x='18.4512' y='0.800781' width='5.53561' height='5.53561' fill='#327BA3' />
        <rect x='18.4512' y='19.252' width='5.53561' height='5.53561' fill='#327BA3' />
        <rect y='0.800781' width='5.53561' height='5.53561' fill='#327BA3' />
        <rect y='19.252' width='5.53561' height='5.53561' fill='#327BA3' />
      </g>
      <defs>
        <clipPath id='clip0_127_4745'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconArea;
