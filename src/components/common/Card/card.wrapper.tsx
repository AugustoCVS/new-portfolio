import { WrapperProps } from "./card.types";

export const Wrapper: React.FC<WrapperProps> = ({ children, dataAos, key }) => {
  return (
    <div
      className="flex flex-col items-center justify-between bg-white shadow-xl rounded-lg px-4 py-8 min-w-[220px] md:min-w-[300px] h-[250px]"
      key={key}
      data-aos={dataAos}
      data-aos-duration="1500"
    >
      {children}
    </div>
  );
};
