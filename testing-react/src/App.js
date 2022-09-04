import { useState } from "react";
import "./App.css";

function App() {
  const [colorButtonStyling, setColorButtonStyling] = useState({
    backgroundColor: "red",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleColorButtonChange = () => {
    if (colorButtonStyling.backgroundColor === "red") {
      setColorButtonStyling({
        backgroundColor: "blue",
      });
    } else {
      setColorButtonStyling({
        backgroundColor: "red",
      });
    }
  };

  return (
    <div className="App">
      <button
        disabled={isChecked}
        style={colorButtonStyling}
        onClick={handleColorButtonChange}
      >
        {colorButtonStyling.backgroundColor === "red"
          ? "Change To Blue"
          : "Change To Red"}
      </button>
      <input
        type="checkbox"
        value={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
    </div>
  );
}

export default App;
