import {AppHelper} from "@/helpers/appHelper";

interface IProps extends React.PropsWithChildren {
  className?: string;
}

const Container = ({children, className}: IProps) => {
  return <div className={AppHelper.className("container", className)}>{children}</div>;
};

export default Container;
