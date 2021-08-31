import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#36454F";
      handleAlert("Dark Mode Enabled ^_^","primary");
      document.title="TextUtils - DarkMode"
      // setInterval(() => {
      //   document.title="Install now DarkMode"
        
      // }, 2000);  
      //   setInterval(() => {
      //   document.title="Why r u waiting"
        
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
      handleAlert("Light Mode Enabled ^_^","primary");
      document.title="TextUtils - LightMode"
    }
  };
     
  const [alert, setAlert] = useState(null);
  const handleAlert = (message,type) => {
   setAlert( {
     msg : message ,
     type : type
    }
   )
  setTimeout(() => {
    setAlert(null);
  }, 1500);

  };

  return (
    <>
      <Navbar mode={mode} handleMode={handleMode} />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/">
          <TextForm mode={mode}  handleAlert={handleAlert}/>
        </Route>
        <Route path="/TextUtils">
        <TextForm mode={mode}  handleAlert={handleAlert} />
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
