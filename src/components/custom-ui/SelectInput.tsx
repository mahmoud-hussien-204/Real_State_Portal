import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {cn} from "@/lib/utils";
import {SelectProps} from "@radix-ui/react-select";
export type SelectOption = {
  label: string;
  value: string | number;
};
export type SelectInputProp = {
  placeholder?: string;
  options: SelectOption[];
  className?: string;
  icon?: React.ReactNode;
  emptyMessage?: string;
  allowClear?: boolean;
} & SelectProps;

const SelectInput = ({
  placeholder,
  options,
  className,
  icon,
  emptyMessage = "No options available",

  ...selectProps
}: SelectInputProp) => {
  return (
    <Select {...selectProps}>
      <SelectTrigger
        className={cn(
          "rounded-full border-none bg-[#F6F6F6] px-4 py-6 text-colors-grey-colors-900 shadow-sm",
          className
        )}
      >
        {icon}
        <SelectValue placeholder={<span className='opacity-50'>{placeholder}</span>} />
      </SelectTrigger>
      <SelectContent className='z-[10001] bg-white'>
        {options.length > 0 ? (
          options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value?.toString()}
              className='hover:bg-colors-primary-colors-100'
            >
              {option.label}
            </SelectItem>
          ))
        ) : (
          <div className='px-2 py-2 text-center text-sm text-gray-500'>{emptyMessage}</div>
        )}
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
