import { X } from "lucide-react";
import { MenuButtonsProps } from "./menu-buttons.types";

export const MenuButtons: React.FC<MenuButtonsProps> = ({ toggleMenu }) => {
  return (
    <X
      className="text-purple-600 cursor-pointer"
      size={32}
      onClick={toggleMenu}
    />
  );
};
