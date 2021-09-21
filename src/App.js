import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import TextForm from "./components/TextForm";
import Biotechnology from "./components/Biotechnology";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Immunology from "./components/Immunology";
import "./components/style.css";
import Bioinformatics from "./components/Bioinformatics";
import Virology from "./components/Virology";
import Microbiology from "./components/Microbiology";
import ImmunoAg from "./components/ImmunoAg";
import ImmunoAb from "./components/ImmunoAb";
import Immunocis from "./components/Immunocis";
import Immunois from "./components/Immunois";

function App() {
  const [mode, setmode] = useState("light");
  useEffect(() => {
    document.body.style.backgroundColor = "#f0ffff";
  }, []);

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#0A0B1D";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#f0ffff";
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
            <Route path="/ImmunoAg">
              <ImmunoAg mode={mode} />
              <Route path="/ImmunoAb">
                <ImmunoAb mode={mode} />
              </Route>
              <Route path="/Immunocis">
                <Immunocis mode={mode} />
              </Route>
              <Route path="/Immunois">
                <Immunois mode={mode} />
              </Route>
            </Route>
            <Route path="/Bioinformatics">
              <Bioinformatics mode={mode} />
            </Route>
            <Route path="/Virology">
              <Virology mode={mode} />
            </Route>
            <Route path="/Microbiology">
              <Microbiology mode={mode} />
            </Route>
            <Route path="/">
              <TextForm mode={mode} toggleMode={toggleMode} />
            </Route>
          </Switch>
        </div>

        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
