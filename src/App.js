import React from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      
      <Navbar title="Text-Utils" about="About Us" />
      <TextForm heading="Enter the text to analyze" />
      <Footer />
    </>
  );
}

export default App;
