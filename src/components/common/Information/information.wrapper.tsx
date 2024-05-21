import { WrapperProps } from "./information.type";

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  id,
  dataAos,
  isAbout,
}) => {
  return (
    <div
      className={`flex flex-col ${isAbout ? "md1:flex-row" : "md:flex-row"} w-full p-8 items-center z-10`}
      id={id}
      data-aos={dataAos}
      data-aos-duration="1500"
    >
      {children}
    </div>
  );
};
