export type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  isInvalid?: boolean;
  defaultValue?: string;
};