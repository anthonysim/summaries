import { useState } from "react";
import Response from "./components/Response";
import Input from "./components/ui/Input";
import SearchButton from "./components/SearchButton";

export default function App() {
  const [userInput, setUserInput] = useState<string>("");

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("wtf");
  };

  return (
    <>
      <Response />
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  console.log("Enter key pressed", userInput);
                }
              }}
            />
            <SearchButton submitHandler={submitHandler} />
          </div>
        </div>
      </div>
    </>
  );
}
