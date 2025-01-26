import Footer from "@/components/Footer";

import Header from "@/components/Header";

interface IProps extends React.PropsWithChildren {}

const layout = ({children}: IProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
