import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isPc = useMediaQuery({ query: "(min-width: 1024px)" });

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return {
    states: {
      isOpen,
      isPc,
    },
    actions: {
      toggleMenu,
    },
  };
};
