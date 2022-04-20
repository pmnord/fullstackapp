import React, { PropsWithChildren } from "react";

type Props = {
  size?: "sm" | "md" | "lg";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  size = "md",
  ...props
}) => {
  return (
    <button
      className={`${size} color rounded bg-gradient-to-br from-green-400 to-green-800 font-bold text-green-50 shadow-lg active:translate-y-0.5`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
