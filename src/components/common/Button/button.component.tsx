import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  onClick,
  className,
  type,
}) => {
  return (
    <button
      className={
        className
          ? className
          : "px-4 py-2 border border-purple-600 bg-transparent text-purple-600 font-regular hover:bg-purple-600 hover:text-white rounded-full"
      }
      onClick={onClick}
      disabled={loading}
      type={type}
    >
      {children}
    </button>
  );
};
