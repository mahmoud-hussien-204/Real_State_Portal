import React, {forwardRef} from "react";
import {FiSearch} from "react-icons/fi";
import {twMerge} from "tailwind-merge";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  icon?: React.ReactNode;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({wrapperClassName, icon = <FiSearch />, className, ...rest}, ref) => {
    return (
      <div className={twMerge("relative", wrapperClassName)}>
        <div className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xl text-colors-grey-colors-900'>
          {icon}
        </div>
        <input
          type='text'
          ref={ref}
          className={twMerge(
            "h-12 w-full rounded-full border border-input bg-white pl-10 pr-4 text-colors-grey-colors-1500 outline-none",
            className
          )}
          {...rest}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
