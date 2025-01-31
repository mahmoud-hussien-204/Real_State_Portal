import {translate} from "@/helpers/translate";
import {LabeledInput} from "./LabeledInput";

const RangeInput = ({
  labelText,
  icon,
  className,
}: {
  labelText: string;
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={className}>
      <label className='mb-3 ms-2 flex items-center gap-3'>
        {icon}
        {labelText}
      </label>
      <div className='grid grid-cols-2 gap-3'>
        <LabeledInput type='number' placeholder={translate("common.from") as string} />
        <LabeledInput type='number' placeholder={translate("common.to") as string} />
      </div>
    </div>
  );
};

export default RangeInput;
