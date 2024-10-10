import React, { FC, ReactElement } from "react";
import { Navbar } from "../../navbar/Navbar";
import { TBaseLayoutProps } from "./TBaseLayoutProps";

export const BaseLayout: FC<TBaseLayoutProps> = ({
  children,
}): ReactElement => {
  return (
    <div>
      <Navbar />
      <section className="pt-24">{children}</section>
    </div>
  );
};
