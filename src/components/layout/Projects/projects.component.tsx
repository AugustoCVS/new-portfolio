import React from "react";
import { Title } from "./components/Title/title.component";
import { Information } from "@/components/common/Information";
import { Infos } from "./components/Infos/infos.component";

export const Projects: React.FC = () => {
  return (
    <Information.Root id="projects">
      <Title />
      <Infos />
    </Information.Root>
  );
};
