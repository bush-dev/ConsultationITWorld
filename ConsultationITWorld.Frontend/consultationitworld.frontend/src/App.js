import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import "./App.css";
import LoginContainer from "./containers/LoginContainer";
import MenuContainer from "./containers/MenuContainer";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="Header">
          <MenuContainer/>
        </div>
        <div className="Body">
          <Routes/>
        </div>
        <div className="Footer">©2020 ConsultationITWorld. All rights reserved.</div>
      </div>
    </Router>
    )
  } 
}

export default App;
