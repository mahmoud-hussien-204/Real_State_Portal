import {cn} from "@/lib/utils";
import * as React from "react";
import {Input} from "../ui/input";
import {Label} from "../ui/label";

type LabeledInputProps = React.ComponentProps<"input"> & {
  label?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputWrapperClassName?: string;
  icon?: React.ReactNode;
};

const LabeledInput = React.forwardRef<HTMLInputElement, LabeledInputProps>(
  (
    {label, id, wrapperClassName, labelClassName, inputWrapperClassName, icon, className, ...props},
    ref
  ) => {
    return (
      <div className={wrapperClassName}>
        {label && (
          <Label htmlFor={id} className={labelClassName}>
            {label}
          </Label>
        )}
        <div className={cn("relative", inputWrapperClassName)}>
          {icon}
          <Input
            id={id}
            className={cn(
              "h-3.25rem rounded-full border-none bg-[#F6F6F6] px-4 text-colors-grey-colors-900 shadow-sm",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }
);

LabeledInput.displayName = "LabeledInput";

export {LabeledInput};
