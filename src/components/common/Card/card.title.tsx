import { TextProps } from "./card.types";

export const Title: React.FC<TextProps> = ({ children, dataAos, text }) => {
  return (
    <div className="flex flex-col items-center">
      {children}

      {text && (
        <h3
          className="text-xl font-semibold text-gray-700 text-center"
          data-aos={dataAos}
          data-aos-duration="1500"
        >
          {text}
        </h3>
      )}
    </div>
  );
};
