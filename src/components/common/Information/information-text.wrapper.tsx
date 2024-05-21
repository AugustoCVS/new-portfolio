export const TextWrapper: React.FC<{
  children: React.ReactNode;
  dataAos?: string;
}> = ({ children, dataAos }) => {
  return (
    <div
      className="w-full flex items-center justify-center flex-col py-4 z-10"
      data-aos={dataAos}
      data-aos-duration="1500"
    >
      {children}
    </div>
  );
};
