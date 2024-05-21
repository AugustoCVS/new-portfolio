import { RootProps } from "./card.types";

export const Root: React.FC<RootProps> = ({ children, dataAos, id }) => {
  return (
    <div
      className="grid md1:grid-cols-3 md:grid-cols-2 grid-cols-1 p-8 gap-8 mt-4 overflow-hidden"
      data-aos={dataAos}
      id={id}
      data-aos-duration="1500"
    >
      {children}
    </div>
  );
};
