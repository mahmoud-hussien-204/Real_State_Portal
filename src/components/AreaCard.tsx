import {Link} from "@/i18n/routing";

import IconLineArrowRight from "@/icons/IconLineArrowRight";
import Image from "next/image";

interface IProps {
  id: number;
  title: string;
  image: string;
  count: number;
}

const AreaCard = ({id, title, image, count}: IProps) => {
  return (
    <div className='group relative h-[20rem] overflow-hidden rounded-1rem shadow-[4px_10px_30px_0px_rgba(0,0,0,0.06)]'>
      <div className='absolute inset-0 z-10 bg-black/50' />
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className='h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110'
      />
      <div className='absolute bottom-0 left-0 right-0 z-20 p-1.5rem'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-text-shadow mb-0.5rem text-44 font-semibold text-white'>{count}</h2>
            <h4 className='text-22 font-bold text-white'>{title}</h4>
          </div>
          <Link
            href={`/projects/${id}`}
            className='flex size-[2.6875rem] -rotate-45 items-center justify-center rounded-full bg-white/40 backdrop-blur-[10px] transition-colors duration-300 group-hover:bg-white'
          >
            <IconLineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AreaCard;
