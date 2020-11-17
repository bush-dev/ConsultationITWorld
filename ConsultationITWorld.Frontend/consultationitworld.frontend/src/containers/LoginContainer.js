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
        errorLogin: false,
        errorPassword: false,

        isOpenedRegisterModal: false,
        registerUsername: "",
        registerPassword: "",
        registerFirstName: "",
        registerLastName: "",
        registerAddress: "",
        registerCountry: "",
        registerEmail: "",
        registerPhoneNumber: "",
        errorRegisterUsername: false,
        errorRegisterPassword: false,
        errorRegisterFirstName: false,
        errorRegisterLastName: false,
        errorRegisterAddress: false,
        errorRegisterCountry: false,
        errorRegisterEmail: false,
        errorRegisterPhoneNumber: false,
        showAlertSuccessfulRegistration: false

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

    handleOpenRegisterModal = () => {
        this.setState({ isOpenedRegisterModal: true})
    }

    handleCloseRegisterModal = () => {
        this.setState({ 
            isOpenedRegisterModal: false,
            errorRegisterUsername: false,
            errorRegisterPassword: false,
            errorRegisterFirstName: false,
            errorRegisterLastName: false,
            errorRegisterAddress: false,
            errorRegisterCountry: false,
            errorRegisterEmail: false,
            errorRegisterPhoneNumber: false
        })
    }

    handleLoginSubmit = e => {
        e.preventDefault();
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

        if(this.handleValidationLogin())
        {
            axios
            .post(BASE_URL + "user/authenticate", data, axiosConfig)
            .then(response => {
                if(response.data) {
                    this.setState({user: response.data, isLogged: true});
                    this.redirectToHome();
                }
                else {
                    console.log("We have a problem!")
                }
            });
        }
    };

    handleValidationLogin() {
        if(!this.state.username || !this.state.password)
        {
            if(!this.state.username)
                this.setState({errorLogin: true})
            else
                this.setState({errorLogin: false})

            if(!this.state.password)
                this.setState({errorPassword: true})
            else
                this.setState({errorPassword: false})
            return false;
        }
        return true;
    }

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

    saveDataToLocalStorage = () => {
        localStorage.setItem("token", JSON.stringify(this.state.user.token));
        localStorage.setItem("username", JSON.stringify(this.state.user.username));
        localStorage.setItem("firstName", JSON.stringify(this.state.user.firstName));
        localStorage.setItem("lastName", JSON.stringify(this.state.user.login));
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

        if(this.handleValidationRegistration())
        {
            axios
            .post(BASE_URL + "user/register", data, axiosConfig)
            .then(response => {
                if(response.data) {
                    this.setState({isOpenedRegisterModal: false, showAlertSuccessfulRegistration: true});
                }
                else {
                    console.log("We have a problem!")
                }
            });
        }
    };

    handleValidationRegistration() {
        if(!this.state.registerUsername || !this.state.registerPassword || !this.state.registerFirstName || !this.state.registerLastName || !this.state.registerAddress || 
            !this.state.registerCountry || !this.state.registerEmail || !this.state.registerPhoneNumber)
        {
            if(!this.state.registerUsername)
                this.setState({errorRegisterUsername: true})
            else
                this.setState({errorRegisterUsername: false})

            if(!this.state.registerPassword)
                this.setState({errorRegisterPassword: true})
            else
                this.setState({errorRegisterPassword: false})
            
            if(!this.state.registerFirstName)
                this.setState({errorRegisterFirstName: true})
            else
                this.setState({errorRegisterFirstName: false})
            
            if(!this.state.registerLastName)
                this.setState({errorRegisterLastName: true})
            else
                this.setState({errorRegisterLastName: false})
            
            if(!this.state.registerAddress)
                this.setState({errorRegisterAddress: true})
            else
                this.setState({errorRegisterAddress: false})

            if(!this.state.registerCountry)
                this.setState({errorRegisterCountry: true})
            else
                this.setState({errorRegisterCountry: false})
            
            if(!this.state.registerEmail)
                this.setState({errorRegisterEmail: true})
            else
                this.setState({errorRegisterEmail: false})

            if(!this.state.registerPhoneNumber)
                this.setState({errorRegisterPhoneNumber: true})
            else
                this.setState({errorRegisterPhoneNumber: false})

            return false;
        }
        return true;
    }

    handleCloseAlertSuccessfulRegistration = e => {
        this.setState({showAlertSuccessfulRegistration: false})
    }



    render() {
        return (
            <div>
                <LoginComponent
                handleLoginSubmit={this.handleLoginSubmit}
                handlePasswordChange={this.handlePasswordChange}
                handleUsernameChange={this.handleUsernameChange}
                handleOpenRegisterModal={this.handleOpenRegisterModal}
                errorLogin={this.state.errorLogin}
                errorPassword={this.state.errorPassword}
                showAlertSuccessfulRegistration={this.state.showAlertSuccessfulRegistration}
                handleCloseAlertSuccessfulRegistration={this.handleCloseAlertSuccessfulRegistration}
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
                handleCloseRegisterModal={this.handleCloseRegisterModal}
                errorRegisterUsername={this.state.errorRegisterUsername}
                errorRegisterPassword={this.state.errorRegisterPassword}
                errorRegisterFirstName={this.state.errorRegisterFirstName}
                errorRegisterLastName={this.state.errorRegisterLastName}
                errorRegisterAddress={this.state.errorRegisterAddress}
                errorRegisterCountry={this.state.errorRegisterCountry}
                errorRegisterEmail={this.state.errorRegisterEmail}
                errorRegisterPhoneNumber={this.state.errorRegisterPhoneNumber}
                />
            </div>
        );
    }
}



export default LoginContainer;