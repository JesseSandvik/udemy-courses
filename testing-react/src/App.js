import { useState } from "react";
import "./App.css";

function App() {
  const [colorButtonStyling, setColorButtonStyling] = useState({
    backgroundColor: "red",
  });
  const [isDisabled, setIsDisabled] = useState(false);

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
        disabled={isDisabled}
        style={colorButtonStyling}
        onClick={handleColorButtonChange}
      >
        {colorButtonStyling.backgroundColor === "red"
          ? "Change To Blue"
          : "Change To Red"}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        aria-checked={isDisabled}
        defaultChecked={isDisabled}
        onChange={(event) => setIsDisabled(event.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </div>
  );
}

export default App;
