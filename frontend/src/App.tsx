import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const [userInput, setUserInput] = useState<string>("");

  return (
    <div className="fixed bottom-20 w-full">
      <div className="flex justify-center">
        <Input
          className="w-[750px] h-[50px]"
          type="text"
          variant="primary"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="What would you like me to summarize?"
        />
      </div>
    </div>
  );
}
