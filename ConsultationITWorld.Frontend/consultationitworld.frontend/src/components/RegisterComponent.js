import React, { Component } from "react";
import { Card, Button, Form, Modal } from "react-bootstrap";

import "../styles/register.css";

class RegisterComponent extends Component {
    render() {
        return (
            <Modal show={this.props.isOpenedRegisterModal} className="modalRegister">
                <Card className="cardRegister">
                    <Card.Header>
                        <Card.Title>Register in</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.props.handleRegisterSubmit}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="Enter username" onChange={this.props.handleRegisterUsernameChange}/> 
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" onChange={this.props.handleRegisterPasswordChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>First name</Form.Label>
                                <Form.Control  placeholder="Enter first name" onChange={this.props.handleRegisterFirstNameChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control  placeholder="Enter last name" onChange={this.props.handleRegisterLastNameChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control  placeholder="Enter address" onChange={this.props.handleRegisterAddressChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Country</Form.Label>
                                <Form.Control  placeholder="Enter country" onChange={this.props.handleRegisterCountryChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control  placeholder="Enter e-mail" onChange={this.props.handleRegisterEmailChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control  placeholder="Enter phone number" onChange={this.props.handleRegisterPhoneNumberChange}/>
                            </Form.Group>
                            <Button variant="dark" type="submit">Register in</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Modal>
        )
    }
}

export default RegisterComponent;