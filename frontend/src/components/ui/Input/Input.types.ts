export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  classNames?: string;
  variant?: "primary" | "secondary";
}
