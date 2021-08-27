import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from 'react'
import  About  from "./components/About";
import  TextForm  from "./components/TextForm";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState('light');
  // const [alert, setAlert] = useState(null);




  const toggleMode = () =>
  {
    if(mode === 'light')
     {setmode  ('dark');
     document.body.style.backgroundColor = 'rgb(53, 53, 53)';}
     
  else{
    setmode  ('light');
    document.body.style.backgroundColor = '#fff';}
    
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode} />
    {/* <Alert /> */}
    <div className="container my-3 "></div>
    <Switch>
          <Route path="/About">
            <About mode={mode} toggleMode={toggleMode}/>
          </Route>
         
          <Route path="/">
          <TextForm />
            
          </Route>
        </Switch>
        </Router>
      
        
        
      
      
    </>
  );
}

export default App;
