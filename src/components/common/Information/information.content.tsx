import React from "react";

export const Content: React.FC<{
  children?: React.ReactNode;
  dataAos?: string;
}> = ({ children, dataAos }) => {
  return (
    <div
      className="flex flex-col items-center justify-center md:w-2/4 w-full flex-1 z-10"
      data-aos={dataAos}
      data-aos-duration="1500"
    >
      {children}
    </div>
  );
};
