import { TextProps } from "./information.type";

export const Subtitle: React.FC<TextProps> = ({ text, children, dataAos }) => {
  return (
    <p
      className="text-lg text-gray-600 text-center mt-1 z-10"
      data-aos={dataAos}
      data-aos-duration="1500"
    >
      {text}
      {children ?? children}
    </p>
  );
};
