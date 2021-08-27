import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
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

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h1>Enter the text to analyze</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter Text Here"
            autoComplete="off"
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-outline-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-outline-primary my-1 mx-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-outline-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="btn btn-outline-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-outline-danger my-1 mx-1"
          onClick={handleClear}
        >
          Clear Text
        </button>

        <div className="container my-4">
          <h2>Your Text Summmary</h2>
          <p>
            <b> {text.split(" ").length} </b> words and <b> {text.length} </b>
            characters
          </p>
          <p>
            It will take <b> {0.008 * text.split(" ").length} </b> minute(s) to
            read.
          </p>
        </div>

        <h3> Preview</h3>
        <hr />
        <p>{text}</p>
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
};
