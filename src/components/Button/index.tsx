import React from "react";

interface IProps {
  variant?: string;
  className?: string;
  text?: string;
  disabled?: any;
  type?: any;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({
  variant,
  onClick,
  text,
  className,
  type,
  disabled,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`${
          variant == "primary"
            ? "bg-primary-500 text-[white] "
            : "bg-[white]  text-primary-800 hover:text-[white] border  hover:bg-primary-500  border-primary-500"
        } p-2 capitalize rounded-xl px-3 cursor-pointer font-medium hover:bg-primary-700  transition ease-in-out duration-800 ${className} 
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
