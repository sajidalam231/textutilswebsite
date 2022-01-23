import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success")
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
     props.showAlert("Converted to Lower Case", "success");
  };

  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text", "success");
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0.9999);
    navigator.clipboard.writeText(text.value);
     props.showAlert("Copy Text", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
     props.showAlert("Remove Extra Spaceses", "success");
  };
  const [text, setText] = useState("Enter text here");
  //text="new text" ; // worng way to change the state
  //setText("new text") ; // correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-success mx-3" onClick={handleLoClick}>
          Convert to lowercase
        </button>

        <button className="btn btn-danger mx-3" onClick={handleClearClick}>
          Clear
        </button>

        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          copy
        </button>

        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter Something to preview it here"}</p>
      </div>
    </>
  );
}
