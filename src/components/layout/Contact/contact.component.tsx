import { Information } from "@/components/common/Information";
import { TITLE_MESSAGE } from "./contact.constants";
import { Form } from "./components/form/form.component";

export const Contact: React.FC = () => {
  return (
    <Information.Root id="contact">
      <Information.TextWrapper>
        <Information.Title text={TITLE_MESSAGE} dataAos="fade-up" />
      </Information.TextWrapper>
      <Form />
    </Information.Root>
  );
};
