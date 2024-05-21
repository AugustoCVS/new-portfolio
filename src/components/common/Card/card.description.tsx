import { DescriptionProps } from "./card.types";

export const Description: React.FC<DescriptionProps> = ({
  children,
  dataAos,
  description,
}) => {
  return (
    <>
      {description && (
        <p
          className="text-gray-600 text-center text-sm"
          data-aos={dataAos}
          data-aos-duration="1500"
        >
          {description}
        </p>
      )}

      {children}
    </>
  );
};
