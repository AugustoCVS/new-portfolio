import { TextProps } from "./information.type";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Title: React.FC<TextProps> = ({
  text,
  children,
  isFirstTitle,
  dataAos,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  if (isFirstTitle) {
    return (
      <h1
        className="text-3xl font-bold text-center text-gray-800 flex-1 z-10 mt-8 md1:mt-0"
        data-aos={dataAos}
        data-aos-duration="1500"
      >
        {text}
        {children ?? children}
      </h1>
    );
  }

  return (
    <h2
      className="text-2xl flex-1 text-center text-gray-800 z-1 "
      data-aos={dataAos}
      data-aos-duration="1500"
    >
      {text}
      {children ?? children}
    </h2>
  );
};
