import React from "react";
import { Icon } from "./components/Icon/icon.component";
import { Options } from "./components/Options/options.component";
import { MenuButtons } from "./components/MenuButtons/menu-buttons.component";
import { useHeader } from "./header.hook";
import { Button } from "@/components/common/Button/button.component";

export const Header: React.FC = () => {
  const { states, actions } = useHeader();

  if (states.isPc) {
    return (
      <header
        className={`flex flex-row items-center justify-between py-4 px-8 flex-1 w-full fixed backdrop-blur-md z-20`}
      >
        <Icon />
        <Options />
        <Button> Fale Conosco</Button>
      </header>
    );
  }

  return (
    <header
      className={`flex flex-col items-start justify-between py-4 px-8 flex-1 w-full fixed ${states.isOpen ? "h-full" : "h-16"} backdrop-blur-md z-20`}
    >
      <Icon />
      <div
        className={`flex flex-col items-center flex-1 py-4 transition-all duration-300 ease-in-out delay-75 w-full ${states.isOpen ? "visible" : "invisible"}`}
        style={{ maxHeight: states.isOpen ? "100vh" : 0, overflow: "hidden" }}
      >
        <Options onClick={actions.toggleMenu} />
        <Button className="px-4 py-2 border border-purple-600 font-semibold bg-purple-600 text-white rounded-full">
          Fale Conosco
        </Button>
      </div>

      <div className="flex flex-row items-center absolute top-[21px] right-4">
        <MenuButtons isOpen={states.isOpen} toggleMenu={actions.toggleMenu} />
      </div>
    </header>
  );
};
