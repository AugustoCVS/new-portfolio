import React from "react";
import { Icon } from "./components/Icon/icon.component";
import { Options } from "./components/Options/options.component";
import { MenuButtons } from "./components/MenuButtons/menu-buttons.component";
import { Button } from "@/components/common/Button/button.component";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "./header.constants";
import { useHeader } from "./header.hook";
import { Menu } from "lucide-react";
import { Curve } from "./components/Curve/curve.component";

export const Header: React.FC = () => {
  const { states, actions } = useHeader();

  const renderMenuContent = () => {
    return (
      <AnimatePresence mode="wait">
        {states.isOpen && (
          <motion.div
            className="w-80 h-screen right-0 top-0 fixed backdrop-blur-md shadow-md flex flex-col items-center justify-center sm:w-[30rem] z-20 gap-4"
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
          >
            <Icon />

            <Options />

            <Button className="px-4 py-2 border border-purple-600 font-semibold bg-purple-600 text-white rounded-full">
              Fale Conosco
            </Button>

            <div className="flex flex-row items-center absolute top-[21px] right-4">
              <MenuButtons toggleMenu={actions.toggleMenu} />
            </div>

            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="fixed w-full flex items-center justify-between p-8 z-20">
      <div className="flex flex-row items-center absolute top-[21px] right-4">
        <Menu
          className="text-purple-600 cursor-pointer"
          size={32}
          onClick={actions.toggleMenu}
        />
      </div>

      {renderMenuContent()}
    </div>
  );
};
