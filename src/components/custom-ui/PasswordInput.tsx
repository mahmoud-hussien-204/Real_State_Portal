import {cn} from "@/lib/utils";
import {Eye, EyeOff} from "lucide-react";
import React, {useState} from "react";
import {LabeledInput} from "./LabeledInput";
import {IoMdLock} from "react-icons/io";

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({className, ...props}, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={cn("relative", className)}>
        <IoMdLock className='absolute left-4 top-1/2 z-[1] size-[1.2rem] -translate-y-1/2 text-colors-grey-colors-800' />
        <LabeledInput
          type={showPassword ? "text" : "password"}
          className='pe-10 ps-[3rem]'
          ref={ref}
          {...props}
        />
        <button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          className='absolute inset-y-0 right-3 flex items-center'
        >
          {showPassword ? (
            <EyeOff className='text-muted-foreground size-[1.2rem]' />
          ) : (
            <Eye className='text-muted-foreground size-[1.2rem]' />
          )}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export {PasswordInput};
