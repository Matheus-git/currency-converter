import * as React from "react";

import { Header } from "../ui/Header";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
