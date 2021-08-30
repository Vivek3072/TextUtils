import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  
  const handleUpClick = () => {
    let newText1 = text.toUpperCase();
    setText(newText1);
  };
  const handleLowClick = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  // const handleTitleCase = () => {
  //   var words = text.toLowerCase().split(" ");
  //   for (var i = 0; i < words.length; i++) {
  //     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  //   }
  //   setText(words.join(" "));
  // };
  
  return (
    <>
      <div className="container my-3">
        <h1 className={`text-${props.mode === "light" ? "dark" : "white"}`}>
          Enter the text to analyze
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#36454F" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
            placeholder="Enter Text Here"
            autoComplete="off"
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        {/* <button className="btn btn-primary mx-1 my-1" onClick={handleTitleCase}>
          Title Case
        </button> */}
        <button className="btn btn-danger my-1 mx-1" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div
        className={`container my-4 text-${
          props.mode === "light" ? "dark" : "white"
        }`}
      >
        <h2>Your Text Summmary</h2>
        <p>
          <b> {text.split(" ").length} </b> word(s) and <b> {text.length} </b>
          characters
        </p>
        <p>
          It will take <b> {0.008 * text.split(" ").length} </b> minute(s) to
          read.
        </p>

        <h3> Preview</h3>
        <hr />
        <p>{text.length > 0 ? text : "Enter text above to preview it here!"}</p>
        <hr />
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Your heading here!",
 color : "black"
};

