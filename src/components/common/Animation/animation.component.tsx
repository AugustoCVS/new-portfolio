import React, { useEffect } from "react";
import Lottie from "react-lottie";
import AOS from "aos";
import "aos/dist/aos.css";

import { AnimationProps } from "./animation.types";

export const Animation: React.FC<AnimationProps> = ({
  animation,
  className,
  autoplay = true,
  loop = true,
  dataAos,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const defaultConfig = {
    loop: loop,
    autoplay: autoplay,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={className ? className : "relative md:w-2/4 w-4/5 flex-1 z-1"}
      data-aos={dataAos}
    >
      <Lottie
        options={defaultConfig}
        style={{ zIndex: 1, flex: 1, width: "100%" }}
      />
    </div>
  );
};
