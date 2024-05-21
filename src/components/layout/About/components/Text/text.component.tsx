import { Information } from "@/components/common/Information";
import { DescriptionText } from "./text.constants";

export const Text: React.FC = () => {
  return (
    <Information.Content dataAos="flip-right">
      <div className="rounded-md backdrop-blur-sm">
        {DescriptionText.map((description) => (
          <Information.Description
            key={description.id}
            text={description.text}
          />
        ))}
      </div>
    </Information.Content>
  );
};
