import React from "react";

import { InfosList } from "./infos.constants";
import { Card } from "@/components/common/Card";

import RickAndMorty from "@/assets/images/rick_and_morty.jpeg";
import Portfolio from "@/assets/images/portfolio.jpeg";
import Store from "@/assets/images/store.jpeg";
import Finnance from "@/assets/images/finnance_controller.jpeg";

import { TabletSmartphone } from "lucide-react";

import { FaAngular, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

import { Buttons } from "./components/Buttons/buttons.component";
import { ToastProps } from "@/components/layout/Contact/components/form/form.types";
import { toast } from "react-toastify";

export const Infos: React.FC = () => {
  const renderImage: Record<string | number | symbol, string | JSX.Element> = {
    urbuy: <TabletSmartphone size={40} color="#9333EA" />,
    rickAndMorty: <img src={RickAndMorty} className="rounded-md" />,
    portfolio: <img src={Portfolio} className="rounded-md" />,
    store: <img src={Store} className="rounded-md" />,
    finnance: <img src={Finnance} className="rounded-md" />,
  };

  const techIconMap: Record<string | number | symbol, string | JSX.Element> = {
    react: <FaReact size={32} color="#61DAFB" />,
    typescript: <BiLogoTypescript size={32} color="#3178C6" />,
    next: <SiNextdotjs size={32} color="#000000" />,
    node: <FaNodeJs size={32} color="#68A063" />,
    reactNative: <TbBrandReactNative size={32} color="#61DAFB" />,
    tailwind: <RiTailwindCssFill size={32} color="#06B6D4" />,
    nest: <SiNestjs size={32} color="#E0234E" />,
    jest: <SiJest size={32} color="#C21325" />,
    angular: <FaAngular size={32} color="#DD0031" />,
    sass: <FaSass size={32} color="#CC6699" />,
    redux: <SiRedux size={32} color="#764ABC" />,
    styledComponents: <SiStyledcomponents size={32} color="#DB7093" />,
    prisma: <SiPrisma size={32} color="#2D3748" />,
    postgresql: <SiPostgresql size={32} color="#336791" />,
  };

  const handleSendToast = ({ message, type }: ToastProps) => {
    return type === "error" ? toast.error(message) : toast.success(message);
  };

  const handleGoTo = ({ link }: { link: string }) => {
    if (link === "") {
      handleSendToast({
        message: "Projeto não disponível",
        type: "error",
      });

      return;
    }

    window.open(link, "_blank");
  };

  return (
    <Card.Root>
      {InfosList.map((info) => (
        <Card.Wrapper dataAos={info.dataAos} key={info.id.toString()}>
          <Card.Title text={info.title} />
          {renderImage[info.tag]}

          <div className="flex items-center gap-1">
            {info.techs.map((tech) => (
              <span key={tech}>{techIconMap[tech]}</span>
            ))}
          </div>

          <Card.Description description={info.description} />

          <Buttons
            handleGoToCode={() => handleGoTo({ link: info.linkGithub })}
            handleGoToProject={() => handleGoTo({ link: info.linkProject })}
          />
        </Card.Wrapper>
      ))}
    </Card.Root>
  );
};
