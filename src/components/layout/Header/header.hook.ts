import { useState } from "react";

export const useHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return {
    states: {
      isOpen,
    },
    actions: {
      toggleMenu,
    },
  };
};
