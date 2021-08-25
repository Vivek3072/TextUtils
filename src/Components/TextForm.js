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
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
    // alert("clicked")
  };
  const [text, setText] = useState("");
  //   const [text, setText] = useState("Enter your text");
  // setText("helloooooo"); correct way to change the state of variable
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
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase 
        </button> 
        <button className="btn btn-secondary" onClick={handleLowClick}>
           Convert to Lowercase
        </button>
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
