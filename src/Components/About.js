import React, { useState } from "react";
import darkLogo from "../darkLogo.png";
import myLogo from "../myLogo.png";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    padding: "20px",
  });
  const [darkBtn, setDarkBtn] = useState("Dark Mode");
  const handleDark = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "grey",
        padding: "20px",
      });
      setDarkBtn("Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        padding: "20px",
      });
      setDarkBtn("Dark Mode");
    }
  };

  return (
    <>
      <div className="container-fluid my-4" style={myStyle}>
        <h1>
          <img
            src={darkLogo}
            className="mx-3"
            style={{
              width: "80px",
              display: myStyle.color === "black" ? "" : "none",
            }}
            alt="appLogo"
          />
          <img
            src={myLogo}
            className="mx-3"
            style={{
              width: "80px",
              display: myStyle.color === "white" ? "" : "none",
            }}
            alt="appLogo"
          />
          About Us
        </h1>
        <p>
          I'm working my best to provide you best feature at a single spot. with
          good design , easy to understand and use here is you TextUtils app.
          Now play with your characters , letters, sentences , paragraphs and
          get all the required actions performed here in one place .Change to uppercase , lowercase , copy to clipboard and many more features you will be getting benifitted with here.
        </p>

        <button className="btn btn-outline-dark">
          <a
            rel="noreferrer"
            target="_blank"
            style={{ color: "orange", textDecoration: "none" }}
            href="https://github.com/Vivek3072"
          >
           View Github Profile
          </a>
        </button>

        <br />
        <hr />
        <br />
        <h2>Features</h2>
        <br />
        <ol>
          <li>
            You can bring any kind of text , sentence ,paragraph and convert it
            to uppercase or Lowercase according to your need.
          </li>
          <li>
            You can copy text to clipboard , remove extra spaces from your text .
          </li>
          <li>
            It also can tell you about how much time you will need to read the
            text that you will enter.
          </li>
          <li>
            You can also clear text all at just one click so that you don't have
            to use backspace and hold it so long for clearing your mess.
          </li>
        </ol>
        <hr />
      </div>
      <div className="mx-3 my-3">
        <button onClick={handleDark} className="btn btn-dark mx-2">
          {darkBtn}
        </button>
      </div>
    </>
  );
}
