import React from "react";

import emailJs from "@emailjs/browser";
import { ToastProps, formProps } from "./form.types";
import * as C from "./form.constants";
import { toast } from 'react-toastify';

export const useContactForm = () => {

  const [loading, setLoading] = React.useState<boolean>(false);

  const templateParams = (data: formProps) => {
    return {
      from_name: data.name,
      email: data.email,
      message: data.message,
    };
  }

  const handleSendToast = ({message, type}: ToastProps) => {
    return type === "error" ? toast.error(message) : toast.success(message);
  }

  const handleSendEmail = async (data: formProps): Promise<void> => {
    setLoading(true);
    await C.FormSchema.validate(data, { abortEarly: false });
    emailJs.send(C.EMAIL_SERVICE_ID, C.EMAIL_TEMPLATE_ID, templateParams(data), C.EMAIL_PUBLIC_KEY)
    .then(() => {
      handleSendToast({
        message: C.EMAIL_TOAST_SUCCESS,
        type: C.TOAST_TYPE.SUCCESS,
      });
    })
    .catch(() => {
      handleSendToast({
        message: C.EMAIL_TOAST_ERROR,
        type: C.TOAST_TYPE.ERROR,
      });
    })
    .finally(() => setLoading(false));
  }

  return {
    states: {
      loading,
    },
    actions: {
      handleSendEmail,
    }
  }
}