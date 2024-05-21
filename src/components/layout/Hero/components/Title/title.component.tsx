import { Button } from "@/components/common/Button/button.component";
import { Information } from "@/components/common/Information";

import React from "react";
import { IconList } from "./components/IconList/icon-list.component";

export const Title: React.FC = () => {
  return (
    <Information.Content>
      <Information.Title text="Desenvolvedor fullstack" isFirstTitle />
      <IconList />

      <div className="mt-8">
        <Button>Venha conhecer</Button>
      </div>
    </Information.Content>
  );
};
