import React from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      
      <Switch>
      <Route exact path="/" component={TextForm} />
      <Route  path="/TextUtils" component={TextForm} />
      <Route  path="/About" component={About} />
      <Route  path="/Contact" component={Contact} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
