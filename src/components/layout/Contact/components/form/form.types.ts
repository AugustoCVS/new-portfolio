import * as yup from 'yup';
import { FormSchema } from './form.constants';

export type formProps = yup.InferType<typeof FormSchema>

export type nameOptions = "name" | "email" | "phone" | "message"

export type FormFieldProps = {
  id: number;
  name: nameOptions;
  placeholder: string;
  type: string;
}

export type ToastType = "error" | "success"

export type ToastProps = {
  message: string;
  type: ToastType;
}