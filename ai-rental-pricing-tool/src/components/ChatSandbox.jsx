import { useState } from "react";

export default function ChatSandbox({ onSubmit }) {
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(input);
        setInput("");
      }}
      className="flex gap-2"
    >
      <input
        className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-white"
        placeholder="Ask AI..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="bg-purple-600 px-4 rounded-lg">
        Send
      </button>
    </form>
  );
}
