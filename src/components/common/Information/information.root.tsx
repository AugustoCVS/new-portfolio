import { RootProps } from "./information.type";

export const Root: React.FC<RootProps> = ({ children, id, dataAos }) => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full px-8 py-4 z-10"
      id={id}
      data-aos={dataAos}
      data-aos-duration="1500"
    >
      {children}
    </section>
  );
};
