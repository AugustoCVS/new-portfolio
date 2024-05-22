import { Button } from "@/components/common/Button/button.component";
import { ButtonsProps } from "./buttons.types";

export const Buttons: React.FC<ButtonsProps> = ({
  handleGoToProject,
  handleGoToCode,
}) => {
  return (
    <div className="flex flex-row gap-2">
      <Button onClick={handleGoToProject}>Projeto</Button>
      <Button onClick={handleGoToCode}>Codigo</Button>
    </div>
  );
};
