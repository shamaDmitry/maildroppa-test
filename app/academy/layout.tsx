import AcademyHeader from "@/Components/AcademyHeader";
import React from "react";
interface AcademyLayoutProps extends React.PropsWithChildren {}

const AcademyLayout = ({ children }: AcademyLayoutProps) => {
  return (
    <>
      <AcademyHeader />

      <section>{children}</section>
    </>
  );
};

export default AcademyLayout;
