import React, { Component } from "react";
import MenuComponent from "../components/MenuComponent";

class MenuContainer extends Component {

    state = {
        isLogout: true
    }

    componentDidMount() {
        debugger;
        if(localStorage.getItem("token"))
        {
            this.setState({isLogout: false});
        }
        else
        {
            this.setState({isLogout: true});
        }
    }
    
    redirectToHome = () => {
        this.context.router.history.push("/");
    };

    handleLoginLogout = () => {
        if(localStorage.getItem("token"))
        {
            localStorage.clear();
            window.location.href = "/";
            this.setState({isLogout: false})
        }
        
    }

    render() {
        return <MenuComponent 
        redirectToHome={this.redirectToHome}
        handleLoginLogout={this.handleLoginLogout} 
        isLogout={this.state.isLogout}
        />;
    }
}

export default MenuContainer;