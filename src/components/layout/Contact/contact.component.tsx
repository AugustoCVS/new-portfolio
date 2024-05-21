import { Information } from "@/components/common/Information";
import { TITLE_MESSAGE } from "./contact.constants";
import { Form } from "./components/form/form.component";
import { SocialMedia } from "./components/SocialMedia/social-media.component";

export const Contact: React.FC = () => {
  return (
    <Information.Root id="contact">
      <Information.TextWrapper dataAos="fade-up">
        <Information.Title text={TITLE_MESSAGE} />
      </Information.TextWrapper>
      <Form />
      <Information.Wrapper dataAos="fade-up">
        <SocialMedia />
      </Information.Wrapper>
    </Information.Root>
  );
};
