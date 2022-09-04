import { useState } from "react";
import "./App.css";

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const disabledButtonStyling = {
    backgroundColor: "gray",
  };
  const [colorButtonStyling, setColorButtonStyling] = useState({
    backgroundColor: "red",
  });
  const [isDisabled, setIsDisabled] = useState(false);

  const handleColorButtonOnClick = () => {
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
        style={isDisabled ? disabledButtonStyling : colorButtonStyling}
        onClick={handleColorButtonOnClick}
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
