import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState,useEffect } from "react";
import TextForm from "./components/TextForm";
import Biotechnology from "./components/Biotechnology";
import About from "./components/About";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Alert from "./components/Alert";
import Immunology from "./components/Immunology";
import "./components/style.css";
import Sidebar from "./components/Sidebar";


function App() {
  const [mode, setmode] = useState("light");
  useEffect(() => {
    document.body.style.backgroundColor = "#B9DFE3";
  }, [])
    
  const toggleMode = () => {
    
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#00203F";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#B9DFE3";
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        {/* <Sidebar/> */}
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
