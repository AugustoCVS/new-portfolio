import { TextProps } from "./information.type";

export const Description: React.FC<TextProps> = ({
  text,
  children,
  dataAos,
}) => {
  return (
    <p
      className="text-md text-gray-700 mt-4 z-10 w-full text-center"
      data-aos={dataAos}
      data-aos-duration="1500"
    >
      {text}
      {children ?? children}
    </p>
  );
};
