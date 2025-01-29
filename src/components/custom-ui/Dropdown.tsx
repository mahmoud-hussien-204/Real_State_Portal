import React, {useRef, useState, ReactNode} from "react";
import {useOutsideClick} from "../../hooks/useClickOutside";
import {twMerge} from "tailwind-merge";

type DropdownProps = {
  renderOpenButton: (handleToggle: () => void) => ReactNode;
  containerClassName?: string;
  menuClassName?: string;
  children: ReactNode;
  closeOnSelect?: boolean;
};
type DropdownChildProps = {
  onClick?: () => void;
  children?: ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({
  renderOpenButton,
  containerClassName,
  menuClassName,
  children,
  closeOnSelect = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      ref={dropdownRef}
      className={twMerge("relative flex items-center justify-center", containerClassName)}
    >
      {renderOpenButton(handleToggle)}
      {isOpen && (
        <ul
          className={twMerge(
            "border-gray-250 absolute right-0 top-[3.5rem] z-[9999] flex max-h-[25rem] w-[12rem] list-none flex-col gap-3 overflow-y-auto rounded-md border bg-white py-4 shadow",
            menuClassName
          )}
        >
          {React.Children.map(children, (child) =>
            React.isValidElement<DropdownChildProps>(child)
              ? React.cloneElement(child, {
                  onClick: () => {
                    child.props.onClick?.();
                    if (closeOnSelect) setIsOpen(false);
                  },
                })
              : child
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
