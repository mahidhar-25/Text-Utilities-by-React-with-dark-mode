import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const changeText = (event) => {
    setText(event.target.value);
  };
  const toupper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const tolower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const cleantext = () => {
    setText("");
  };
  const copytext = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  return (
    <>
      <div
        className="mb-3 container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>

        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          onChange={changeText}
          value={text}
          style={{
            color: props.mode === "dark" ? "white" : "black",
            background: props.mode === "dark" ? "grey" : "white",
          }}
        ></textarea>
        <button type="button" className="btn btn-primary m-3" onClick={toupper}>
          convert to Uppercase
        </button>
        <button type="button" className="btn btn-primary m-3" onClick={tolower}>
          convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={copytext}
        >
          copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={cleantext}
        >
          clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Text summary</h3>
        <p>
          No of words in text : {text.length > 0 ? text.split(" ").length : "0"}
        </p>
        <p>No of characters in text : {text.length}</p>
        <p>
          Avgtime to read text is :{" "}
          {text.length > 0 ? 0.008 * text.split(" ").length : 0} sec
        </p>
        <h3>preview</h3>
        <p>{text.length > 0 ? text : "enter text above to  preview"}</p>
      </div>
    </>
  );
}
