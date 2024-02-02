import { useState } from "react";
import "./App.css";
const customDictionary = {
  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example",
};

export default function App() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    const words = inputText.split(" ");
    const correctedWords = words.map((el) => {
      const correctedWord = customDictionary[el.toLowerCase()];
      return correctedWord || el;
    });
    const correctedText = correctedWords.join(" ");
    const firstCorrection = correctedWords.find((el, idx) => {
      return el !== words[idx];
    });
    setSuggestions(firstCorrection || "");
  };
  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestions !== "" && (
        <p>
          Did you mean: <strong>{suggestions}</strong>?
        </p>
      )}
    </div>
  );
}