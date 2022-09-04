import { useState } from "react";
import "./App.css";

function App() {
  const [colorButtonStyling, setColorButtonStyling] = useState({
    backgroundColor: "red",
  });

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
      <button style={colorButtonStyling} onClick={handleColorButtonChange}>
        {colorButtonStyling.backgroundColor === "red"
          ? "Change To Blue"
          : "Change To Red"}
      </button>
    </div>
  );
}

export default App;
