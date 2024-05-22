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
        <a href={`/#contact`} className="decoration-none">
          <Button>Entre em contato</Button>
        </a>
      </div>
    </Information.Content>
  );
};
