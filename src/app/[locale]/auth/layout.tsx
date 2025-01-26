type IProps = React.PropsWithChildren;

const layout = ({children}: IProps) => {
  return <div>layout auth {children}</div>;
};

export default layout;
