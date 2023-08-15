import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ children, className = "w-max" }: ButtonProps) {
  return (
    <button
      className={
        "px-4 py-2 text-white bg-gradient-to-r hover:bg-gradient-to-l shadow-md shadow-blue/20 hover:shadow-xl hover:shadow-blue/60 from-pink to-blue hover:-translate-y-1 rounded-md transition-all delay-75" +
        `${className}`
      }
    >
      {children}
    </button>
  );
}

export default Button;
