import { ReactNode } from "react";
import Transition from "../transition";
import HeaderLanding from "../header/HeaderLanding";
import FooterLanding from "../footer/FooterLanding";

type Props = {
  children?: ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <Transition>
      <div className="relative flex flex-col">
        <HeaderLanding />
        {children}
        <FooterLanding />
      </div>
    </Transition>
  );
};

export default PageLayout;
