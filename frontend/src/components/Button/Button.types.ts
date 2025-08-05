import React from "react";

export type ButtonTypes = "button" | "submit" | "reset";
export type ButtonVariants = "primary" | "secondary" | "danger" | "outline";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonTypes;
  variant?: ButtonVariants;
}
