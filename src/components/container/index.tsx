import React, { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`container max-screen-xl px-5  lg:max-w-screen-xl mx-auto ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
