export type TextAreaProps = {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  errorMessage?: string;
  isInvalid?: boolean;
  rows?: number;
  defaultValue?: string;
};