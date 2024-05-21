import { OptionsList } from "./options.constants";

export const Options: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <ul className="md1:flex md1:flex-row md1:items-center md1:gap-8 md1:mb-0 flex flex-col items-center justify-between mb-4 gap-8">
      {OptionsList.map((option) => {
        return (
          <a
            key={option.id}
            href={`/#${option.id}`}
            className="relative py-2 font-regular hover:text-purple-600 after:absolute after:bg-purple-600 
            after:h-1 after:rounded-md after:left-0 after:bottom-0 after:transition-all after:w-0 after:duration-300 after:ease-in-out after:delay-7 hover:after:w-full"
            onClick={onClick}
          >
            {option.title}
          </a>
        );
      })}
    </ul>
  );
};
