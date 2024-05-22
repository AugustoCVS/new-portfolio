import * as yup from 'yup';
import { FormFieldProps, ToastType } from './form.types';

export const FormSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
  message: yup.string().required('A descrição é obrigatória'),
});

export const formFields: FormFieldProps[] = [
  {
    id: 0,
    name: 'name',
    placeholder: 'Nome',
    type: 'text',
  },
  {
    id: 1,
    name: 'email',
    placeholder: 'Preencha com seu melhor e-mail',
    type: 'email',
  },
  {
    id: 3,
    name: 'message',
    placeholder: 'Faça uma breve descrição da vaga',
    type: 'textarea',
  },
];

export const EMAIL_SERVICE_ID = "service_2kv1acj";
export const EMAIL_TEMPLATE_ID = "template_e89dc4g";
export const EMAIL_PUBLIC_KEY = "wZHTFxtZRfnd9ChHf";


export const EMAIL_TOAST_SUCCESS = "Email enviado com sucesso! Em breve entraremos em contato.";
export const EMAIL_TOAST_ERROR = "Erro ao enviar email. Tente novamente mais tarde.";

export const TOAST_TYPE = {
  ERROR: 'error' as ToastType,
  SUCCESS: 'success' as ToastType,
}