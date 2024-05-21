import { Button } from "@/components/common/Button/button.component";
import { Information } from "@/components/common/Information";

import React from "react";

export const Title: React.FC = () => {
  return (
    <Information.Content>
      <Information.Title
        text="Eleve seu negócio para o próximo nível com"
        isFirstTitle
      >
        <p className="text-purple-600 flex-1"> excelência</p>
      </Information.Title>
      <Information.Subtitle text="Desenvolvido por AGT | DEVELOPER" />

      <div className="mt-8">
        <Button>Venha conhecer</Button>
      </div>
    </Information.Content>
  );
};
