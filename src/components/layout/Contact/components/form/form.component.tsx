import { Information } from "@/components/common/Information";
import { Input } from "@/components/common/Input/input.component";
import { Controller, useForm } from "react-hook-form";
import { FormFieldProps, formProps, nameOptions } from "./form.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema, formFields } from "./form.constants";
import { Button } from "@/components/common/Button/button.component";
import { useContactForm } from "./form.hook";
import { TextArea } from "@/components/common/TextArea/text-area.component";
import { LoaderCircle } from "lucide-react";

export const Form: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<formProps>({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { states, actions } = useContactForm();

  const renderTextArea = (data: FormFieldProps) => {
    return (
      <Controller
        key={data.id}
        name={data.name as nameOptions}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextArea
            value={value}
            onChange={onChange}
            placeholder={data.placeholder}
            errorMessage={errors[data.name as nameOptions]?.message}
            rows={4}
            defaultValue=""
          />
        )}
      />
    );
  };

  const renderInput = (data: FormFieldProps) => {
    return (
      <Controller
        key={data.id}
        name={data.name as nameOptions}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder={data.placeholder}
            type={data.type}
            value={value}
            onChange={onChange}
            errorMessage={errors[data.name as nameOptions]?.message}
            defaultValue=""
          />
        )}
      />
    );
  };

  //TODO: ADD RESET NO FORMULARIO, E ADD SPINNER NO BOTÃO DE ENVIAR
  return (
    <Information.Wrapper>
      <form
        className="flex flex-col gap-4 w-full items-center"
        onSubmit={handleSubmit(actions.handleSendEmail)}
      >
        {formFields.map((field) => {
          if (field.type === "textarea") {
            return renderTextArea(field);
          }

          return renderInput(field);
        })}
        <div className="w-[318px]">
          <Button
            type="submit"
            className="px-4 py-2 border border-purple-600 bg-transparent text-purple-600 font-regular hover:bg-purple-600 hover:text-white rounded-full w-full"
            loading={states.loading}
            onClick={isSubmitSuccessful ? reset : undefined}
          >
            {states.loading ? (
              <LoaderCircle className="animate-spin w-full items-center justify-center" />
            ) : (
              "Enviar"
            )}
          </Button>
        </div>
      </form>
    </Information.Wrapper>
  );
};
