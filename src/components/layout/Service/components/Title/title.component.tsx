import { Information } from "@/components/common/Information";
import React from "react";

export const Title: React.FC = () => {
  return (
    <Information.TextWrapper>
      <Information.Title
        text="Serviços AGT | DEV"
        dataAos="fade-up"
        isFirstTitle
      />

      <Information.Subtitle
        text="Melhor solução para o seu negócio no"
        dataAos="fade-down"
      >
        <p className="text-purple-600 flex-1">mundo digital</p>
      </Information.Subtitle>
    </Information.TextWrapper>
  );
};
