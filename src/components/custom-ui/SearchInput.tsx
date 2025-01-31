import {IoSearch} from "react-icons/io5";
import {twMerge} from "tailwind-merge";

const SearchInput = ({
  placeholder,
  className,
  wrapperClassName,
}: {
  placeholder: string;
  className?: string;
  wrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "border-input input relative h-fit w-fit overflow-hidden rounded-full border bg-white shadow-sm",
        wrapperClassName
      )}
    >
      <IoSearch className='absolute left-5 top-[50%] block size-[1rem] translate-y-[-50%] text-[#0F0F0F99]' />
      <input
        type='search'
        className={twMerge("text-colors-grey-colors-1500 w-full py-2 ps-[2rem]", className)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
