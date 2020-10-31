import React, { Component } from "react";
import HomeComponent from "../components/HomeComponent";
import LoginContainer from "../containers/LoginContainer";

class HomeContainer extends Component {
  render() {
    return (
      <div>
      {localStorage.getItem("token") ? <HomeComponent/> : <LoginContainer/>}
      </div>
    );
  }
}

export default HomeContainer; 