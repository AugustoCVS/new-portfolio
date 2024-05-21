export type RootProps = {
  children: React.ReactNode
  dataAos?: string
  id?: string
}

export type WrapperProps = {
  children: React.ReactNode
  dataAos?: string
  key?: string
}

export type TextProps = {
  text?: string
  dataAos?: string
  children?: React.ReactNode
}

export type DescriptionProps = {
  description?: string
  dataAos?: string
  children?: React.ReactNode
}