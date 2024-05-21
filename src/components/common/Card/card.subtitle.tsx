import { TextProps } from "./card.types";

export const Subtitle: React.FC<TextProps> = ({ children, dataAos, text }) => {
  return (
    <>
      {text && (
        <p
          className="font-bold text-gray-600"
          data-aos={dataAos}
          data-aos-duration="1500"
        >
          {text}
        </p>
      )}

      {children}
    </>
  );
};
