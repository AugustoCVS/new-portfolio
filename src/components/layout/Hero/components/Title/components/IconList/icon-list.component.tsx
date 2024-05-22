import { FaAngular, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { SiJest } from "react-icons/si";

export const IconList: React.FC = () => {
  return (
    <div className="flex flex-row gap-2 mt-4">
      <FaReact size={32} color="#61DAFB" />
      <BiLogoTypescript size={32} color="#3178C6" />
      <SiNextdotjs size={32} color="#000000" />
      <FaNodeJs size={32} color="#68A063" />
      <TbBrandReactNative size={32} color="#61DAFB" />
      <RiTailwindCssFill size={32} color="#06B6D4" />
      <SiNestjs size={32} color="#E0234E" />
      <SiJest size={30} color="#C21325" />
      <FaAngular size={32} color="#DD0031" />
    </div>
  );
};
