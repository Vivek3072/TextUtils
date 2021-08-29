import React from "react";
import darkLogo from "../darkLogo.png";
import myLogo from "../myLogo.png";

export default function About(props) {

  return (
    <>
      <div className= {`container-fluid my-4 text-${props.mode === "light" ? "dark" : "white"}`}>
        <h1>
          <img
            src={darkLogo}
            className="mx-3"
            style={{
              width: "80px",
              display: props.mode === "light" ? "" : "none",
            }}
            alt="appLogo"
          />
          <img
            src={myLogo}
            className="mx-3"
            style={{
              width: "80px",
              display:props.mode === "dark" ? "" : "none",
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
        <button className="btn btn-primary mx-2">
         <a style={{color:"white" , textDecoration:"none"}} href="https://github.com/Vivek3072"> View github Profile </a></button>
      </div>
    </>
  );
}
