import type { InputProps } from "./Input.types";

export default function Input({
  id,
  label,
  className = "",
  variant = "primary",
  ...props
}: InputProps) {
  const inputId = id || props.name || "input";

  const baseStyles = "border px-3 py-2 text-sm focus:outline-none";

  const variants: Record<NonNullable<InputProps["variant"]>, string> = {
    primary: "rounded-full border-2",
    secondary: "",
  };

  return (
    <>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      />
    </>
  );
}
