import { Information } from "@/components/common/Information";
import React from "react";

export const Title: React.FC = () => {
  return (
    <Information.TextWrapper>
      <Information.Title
        text="Projetos Desenvolvidos"
        dataAos="fade-up"
        isFirstTitle
      />

      <Information.Subtitle
        text="Eleve seu time com um desenvolvedor de qualidade"
        dataAos="fade-down"
      />
    </Information.TextWrapper>
  );
};
