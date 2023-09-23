import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

const Wrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`w-full container max-w-screen-2xl mx-auto ${className || ""}`}>
      {children}
    </div>
  );
};

export default Wrapper;
