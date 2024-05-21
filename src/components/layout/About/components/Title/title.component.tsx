import { Information } from "@/components/common/Information";
import React from "react";

export const Title: React.FC = () => {
  return (
    <Information.TextWrapper>
      <Information.Title
        text="Conheça mais sobre a AGT | DEV"
        dataAos="fade-right"
        isFirstTitle
      />
    </Information.TextWrapper>
  );
};
