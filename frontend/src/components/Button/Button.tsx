import type { ButtonProps } from "./Button.types";

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded font-medium transition cursor-pointer";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
