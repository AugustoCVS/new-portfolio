import React from "react";
import { Animation } from "@/components/common/Animation/animation.component";
import { Title } from "./components/Title/title.component";

import animationData from "@/assets/lotties/hero-animation.json";
import { Information } from "@/components/common/Information";

import Particles from "@tsparticles/react";

import { useHero } from "./hero.hook";

export const Hero: React.FC = () => {
  const { states, actions } = useHero();

  const shouldRenderParticles = () => {
    if (states.init) {
      return (
        <Particles
          id="tsparticles"
          particlesLoaded={actions.particlesLoaded}
          options={states.options}
          style={{ zIndex: 0 }}
        />
      );
    }
  };

  return (
    <>
      {shouldRenderParticles()}
      <Information.Wrapper id="hero">
        <Title />
        <Animation animation={animationData} />
      </Information.Wrapper>
    </>
  );
};
