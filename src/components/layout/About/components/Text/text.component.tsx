import { Information } from "@/components/common/Information";
import { DescriptionText } from "./text.constants";

export const Text: React.FC = () => {
  return (
    <Information.Content dataAos="flip-right">
      <Information.Title text="Construindo seu Espaço Online" />

      <Information.Description text={DescriptionText} dataAos="fade-left" />
    </Information.Content>
  );
};
