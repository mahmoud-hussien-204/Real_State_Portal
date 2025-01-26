import {AppHelper} from "@/helpers/appHelper";

import {Link} from "@/i18n/routing";

export type IButtonVariant =
  | "primary-400"
  | "primary-600"
  | "secondary"
  | "neutral"
  | "danger"
  | "sub-danger"
  | "ghost"
  | "success"
  | "outline";

interface IProps {
  children: React.ReactNode;
  variant?: IButtonVariant;
  href: string;
  className?: string;
  locale?: string | undefined;
}

const LinkButton = ({children, className, variant = "primary-400", ...props}: IProps) => {
  return (
    <Link
      className={AppHelper.className(
        "btn min-h-0 rounded-0.75rem border-none font-bold font-16",
        className,
        {
          "bg-colors-primary-colors-400 text-colors-grey-colors-100 hover:bg-colors-primary-colors-500":
            variant === "primary-400",
          "bg-colors-primary-colors-600 text-colors-grey-colors-100 hover:bg-colors-primary-colors-800":
            variant === "primary-600",
          "bg-colors-grey-colors-1000 text-colors-grey-colors-100 hover:bg-colors-grey-colors-900":
            variant === "secondary",
          "bg-neural-colors-50 text-colors-grey-colors-800 hover:bg-colors-neutral-200":
            variant === "neutral",
        }
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
