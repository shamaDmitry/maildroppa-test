import React from "react";

interface HeadlineProps extends React.PropsWithChildren {
  className?: string;
}

const Headline = ({ children, className }: HeadlineProps) => {
  return <h1 className={`${className} text-3xl text-gray-900`}>{children}</h1>;
};

export default Headline;
