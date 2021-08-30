import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const [mode, setMode] = useState("light");
  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#36454F";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
    }
  };

  return (
    <>
      <Navbar mode={mode} handleMode={handleMode} />

      <Switch>
        <Route exact path="/">
          <TextForm mode={mode} />
        </Route>

        <Route path="/About">
          <About mode={mode} />
        </Route>
        <Route path="/Contact">
          <Contact mode={mode} />
        </Route>
      </Switch>

      <Footer mode={mode} />
    </>
  );
}

export default App;
