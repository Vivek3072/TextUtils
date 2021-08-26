import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("up case was clicked " + text);
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
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   const [text, setText] = useState("Enter your text");
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
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
        <button className="btn btn-outline-primary " onClick={handleUpClick}>
          Convert to Uppercase
        </button> 
        <button className="btn btn-outline-primary mx-2" onClick={handleLowClick}>
           Convert to Lowercase
        </button> 
        <button className="btn btn-outline-danger" onClick={handleClear}>
          Clear Text
        </button>

      <div className="container my-4">
        <h2>Your Text Summmary</h2>
        <p> <b> {text.split(" ").length} </b> words and <b>  {text.length} </b> characters </p> <hr />
        <p>It will take <b> {0.008*text.split(" ").length} </b> minute(s) to read.</p> <hr />
      </div>

      <h3> Preview</h3>
      <p>{text}</p>
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
