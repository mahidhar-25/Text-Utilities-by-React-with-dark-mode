import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";

function App() {
  const [Mode, setMode] = useState("light");

  const ToggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <NavBar title="Text Utils" mode={Mode} togglemode={ToggleMode} />
      <div className="container">
        <TextForm heading="Enter text to Analyze" mode={Mode} />
      </div>
    </>
  );
}

export default App;
