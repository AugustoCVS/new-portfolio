import { Information } from "@/components/common/Information";
import React from "react";

export const Title: React.FC = () => {
  return (
    <Information.TextWrapper>
      <Information.Title text="Sobre mim" dataAos="fade-right" isFirstTitle />
    </Information.TextWrapper>
  );
};
