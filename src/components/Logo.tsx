import Image from "next/image";

import ImageLogo from "@/app/assets/logo.svg";

interface IProps {
  className?: string;
}

const Logo = ({className}: IProps) => {
  return <Image src={ImageLogo} alt='website logo' className={className} priority />;
};

export default Logo;
