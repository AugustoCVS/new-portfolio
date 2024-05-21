import React from "react";

import { InfosList } from "./infos.constants";
import { Card } from "@/components/common/Card";
import {
  Building2,
  PocketKnife,
  SearchCheck,
  ShoppingBag,
  TabletSmartphone,
  Wallpaper,
} from "lucide-react";

export const Infos: React.FC = () => {
  const renderIcons: Record<string | number | symbol, string | JSX.Element> = {
    lp: <Wallpaper size={40} color="#9333EA" />,
    optimization: <PocketKnife size={40} color="#9333EA" />,
    seo: <SearchCheck size={40} color="#9333EA" />,
    institutional: <Building2 size={40} color="#9333EA" />,
    ecommerce: <ShoppingBag size={40} color="#9333EA" />,
    mobile: <TabletSmartphone size={40} color="#9333EA" />,
  };

  return (
    <Card.Root>
      {InfosList.map((info) => (
        <Card.Wrapper dataAos={info.dataAos} key={info.id.toString()}>
          <Card.Title text={info.title}>{renderIcons[info.icon]}</Card.Title>
          <Card.Description description={info.description} />
        </Card.Wrapper>
      ))}
    </Card.Root>
  );
};
