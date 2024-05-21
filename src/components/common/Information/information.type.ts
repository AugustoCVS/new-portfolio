export type RootProps = {
  children: React.ReactNode;
  id?: string;
  dataAos?: string;
}

export type TextProps = {
  text: string;
  children?: React.ReactNode;
  isFirstTitle?: boolean
  dataAos?: string;
}

export type WrapperProps = {
  children: React.ReactNode;
  id?: string;
  dataAos?: string;
  isAbout?: boolean;
}
