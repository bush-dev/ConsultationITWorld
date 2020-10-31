import React, { Component } from "react";
import LoginComponent from "../components/LoginComponent"
import { BASE_URL } from "../constants";
import axios from "axios";
import RegisterComponent from "../components/RegisterComponent";

class LoginContainer extends Component {
    
    state = {
        username: "",
        password: "",
        isLogged: false,
        user: [],

        isOpenedRegisterModal: false,
        registerUsername: "",
        registerPassword: "",
        registerFirstName: "",
        registerLastName: "",
        registerAddress: "",
        registerCountry: "",
        registerEmail: "",
        registerPhoneNumber: ""
    }

    handleUsernameChange = e => {
        this.setState({ username: e.target.value })
    }

    handlePasswordChange = e => {
        this.setState({ password: e.target.value })
    }

    handleRegisterUsernameChange = e => {
        this.setState({ registerUsername: e.target.value })
    }

    handleRegisterPasswordChange = e => {
        this.setState({ registerPassword: e.target.value })
    }

    handleRegisterFirstNameChange = e => {
        this.setState({ registerFirstName: e.target.value })
    }

    handleRegisterLastNameChange = e => {
        this.setState({ registerLastName: e.target.value })
    }

    handleRegisterAddressChange = e => {
        this.setState({ registerAddress: e.target.value })
    }

    handleRegisterCountryChange = e => {
        this.setState({ registerCountry: e.target.value })
    }

    handleRegisterEmailChange = e => {
        this.setState({ registerEmail: e.target.value })
    }

    handleRegisterPhoneNumberChange = e => {
        this.setState({ registerPhoneNumber: e.target.value })
    }

    handleLoginSubmit = e => {
        e.preventDefault();
        debugger;
        const data = {
            login: this.state.username,
            password: this.state.password
        };

        let axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        axios
        .post(BASE_URL + "user/authenticate", data, axiosConfig)
        .then(response => {
            debugger;
            if(response.data) {
                this.setState({user: response.data, isLogged: true});
                this.redirectToHome();
            }
            else {
                console.log("We have a problem!")
            }
        });
    };

    redirectToHome = e => {
        this.saveDataToLocalStorage();
        window.location.reload();
        return this.props.history.push({
        pathname: "/",
        state: {
            user: this.state.user,
            isLogged: this.state.isLogged
        }
        });
    };

    handleOpenRegisterModal = e => {
        debugger;
        this.setState({isOpenedRegisterModal: true})
    }

    saveDataToLocalStorage = () => {
        localStorage.setItem("token", JSON.stringify(this.state.user.token));
        localStorage.setItem("username", JSON.stringify(this.state.user.username));
        localStorage.setItem("firstName", JSON.stringify(this.state.user.firstName));
        localStorage.setItem("lastName", JSON.stringify(this.state.user.login));
        debugger;
      };

    
      
    handleRegisterSubmit = e => {
        e.preventDefault();
        const data = {
            login: this.state.registerUsername,
            password: this.state.registerPassword,
            firstName: this.state.registerFirstName,
            lastName: this.state.registerLastName,
            address: this.state.registerAddress,
            country: this.state.registerCountry,
            email: this.state.registerEmail,
            phoneNumber: this.state.registerPhoneNumber
        };

        let axiosConfig = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        axios
        .post(BASE_URL + "user/register", data, axiosConfig)
        .then(response => {
            debugger;
            if(response.data) {
                this.redirectToHome();
            }
            else {
                console.log("We have a problem!")
            }
        });
    };



    render() {
        return (
            <div>
                <LoginComponent
                handleLoginSubmit={this.handleLoginSubmit}
                handlePasswordChange={this.handlePasswordChange}
                handleUsernameChange={this.handleUsernameChange}
                handleOpenRegisterModal={this.handleOpenRegisterModal}
                />
                <RegisterComponent 
                isOpenedRegisterModal={this.state.isOpenedRegisterModal} 
                handleRegisterSubmit={this.handleRegisterSubmit}  
                handleRegisterUsernameChange={this.handleRegisterUsernameChange}
                handleRegisterPasswordChange={this.handleRegisterPasswordChange}
                handleRegisterFirstNameChange={this.handleRegisterFirstNameChange}
                handleRegisterLastNameChange={this.handleRegisterLastNameChange}
                handleRegisterAddressChange={this.handleRegisterAddressChange}
                handleRegisterCountryChange={this.handleRegisterCountryChange}
                handleRegisterEmailChange={this.handleRegisterEmailChange}
                handleRegisterPhoneNumberChange={this.handleRegisterPhoneNumberChange}
                />
            </div>
        );
    }
}



export default LoginContainer;