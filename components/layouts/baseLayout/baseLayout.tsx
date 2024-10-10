import React, { FC, ReactElement } from "react";
import { Navbar } from "../../navbar/Navbar";
import { TBaseLayoutProps } from "./TBaseLayoutProps";

export const BaseLayout: FC<TBaseLayoutProps> = ({
  children,
}): ReactElement => {
  return (
    <div className="w-full h-full min-h-screen">
      <Navbar />
      <section className="pt-32 w-full h-full px-[5%] md:px-[10%]">
        {children}
      </section>
    </div>
  );
};
