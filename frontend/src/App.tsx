import { useState } from "react";
import Input from "./components/Input"; // Custom Input component
import { FaArrowUp } from "react-icons/fa";

export default function App() {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <div className="fixed bottom-20 w-full">
      <div className="flex justify-center">
        <div className="relative w-[750px]">
          <Input
            className="w-full h-[50px] pr-12 border-slate-700 text-slate-300"
            type="text"
            variant="primary"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="What bull@#$% should I summarize?"
          />
          <FaArrowUp
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 cursor-pointer"
            size={20}
          />
        </div>
      </div>
    </div>
  );
}
