import Button from "./ui/Button";
import { FaArrowUp } from "react-icons/fa";

interface ISearchButtonProps {
  submitHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SearchButton({ submitHandler }: ISearchButtonProps) {
  return (
    <>
      <Button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 cursor-pointer rounded-lg"
        variant="secondary"
        onClick={submitHandler}
      >
        <FaArrowUp size={20} />
      </Button>
    </>
  );
}
