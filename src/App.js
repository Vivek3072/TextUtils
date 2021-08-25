import React from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      
      <Navbar title="Text-Utils" about="About Us" />
      <TextForm heading="Enter the text to analyze" />

    </>
  );
}

export default App;
