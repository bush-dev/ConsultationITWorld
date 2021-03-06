import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import "../styles/menu.css";


class MenuComponent extends Component {
    render() {
        return(
            <Navbar  expand="lg">
                <Navbar.Brand className= {this.props.isLogout ? "brandLogout" : "brandLogin"}>ConsultationITWorld</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                
                {!this.props.isLogout 
                ? ( 
                    <Form inline>
                    <Nav className="mr-auto">
                        <Nav.Link className="color-white"> Home </Nav.Link>
                        <Nav.Link className="color-white"> Offers </Nav.Link>
                        <Nav.Link className="color-white"> Mentors </Nav.Link>
                        <Nav.Link className="color-white"> My profile </Nav.Link>
                        <Nav.Link className="color-white"> FAQ </Nav.Link>
                    </Nav>
                </Form> )  
                : <div></div>
                }
                <Form inline>
                    <Form inline>
                        <Button variant="link" onClick={this.props.handleLoginLogout}> {this.props.isLogout ? "Log in" : "Log out"}</Button>
                    </Form>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="dark">Search</Button>
                    </Form>
                </Form> 
                </Navbar.Collapse>
            </Navbar>
            
        )
    }
}

export default MenuComponent;