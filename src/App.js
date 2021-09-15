import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Biotechnology from "./components/Biotechnology";
import About from "./components/About";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Alert from "./components/Alert";
import Immunology from "./components/Immunology";
import "./components/style.css";

function App() {
  const [mode, setmode] = useState("light");


  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(53, 53, 53)";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#fff";
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="mart">
          <Switch>
            <Route path="/About">
              <About mode={mode} toggleMode={toggleMode} />
            </Route>

            <Route path="/BioTechnology">
              <Biotechnology mode={mode} toggleMode={toggleMode} />
            </Route>
            <Route path="/Immunology">
              <Immunology mode={mode} toggleMode={toggleMode} />
            </Route>
            <Route path="/">
              <TextForm mode={mode} toggleMode={toggleMode} />
            </Route>
          </Switch>
        </div>
        <Alert />
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
