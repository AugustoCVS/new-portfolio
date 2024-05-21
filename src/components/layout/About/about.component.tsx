import React from "react";
import { Title } from "./components/Title/title.component";
import { Information } from "@/components/common/Information";
import { Text } from "./components/Text/text.component";
import { Animation } from "@/components/common/Animation/animation.component";

import animationData from "@/assets/lotties/about-animation.json";

export const About: React.FC = () => {
  return (
    <Information.Root id="about">
      <Title />
      <div className="mt-[-60px] sm:mt-[-100px]">
        <Information.Wrapper isAbout>
          <Animation animation={animationData} dataAos="fade-up" />
          <Text />
        </Information.Wrapper>
      </div>
    </Information.Root>
  );
};
