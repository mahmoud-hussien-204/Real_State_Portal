import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {cn} from "@/lib/utils";
export type SelectOption = {
  label: string;
  value: string;
};
export type SelectInputProp = {
  placeholder?: string;
  options: SelectOption[];
  className?: string;
};

const SelectInput = ({placeholder, options, className}: SelectInputProp) => {
  return (
    <Select>
      <SelectTrigger
        className={cn(
          "rounded-full border-none bg-[#F6F6F6] px-4 py-6 text-colors-grey-colors-900 shadow-sm",
          className
        )}
      >
        <SelectValue placeholder={<span className='opacity-50'>{placeholder}</span>} />
      </SelectTrigger>
      <SelectContent className='z-[10001] bg-white'>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className='hover:bg-colors-primary-colors-100'
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
