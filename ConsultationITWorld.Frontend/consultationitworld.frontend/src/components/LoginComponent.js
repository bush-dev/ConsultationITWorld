import React, { Component } from "react";
import { Card, Button, Form, Alert} from "react-bootstrap";

import "../styles/login.css";

class LoginComponent extends Component {
    render() {
        return (
            <div>
                <Alert variant="success" dismissible show={this.props.showAlertSuccessfulRegistration} onClose={this.props.handleCloseAlertSuccessfulRegistration}>
                    You have registered correctly. You can login now!
                </Alert>
                <Card className="cardLogin">
                    <Card.Header className="cardHeaderLogin">
                        <Card.Title>Log in</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.props.handleLoginSubmit}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="Enter username" onChange={this.props.handleUsernameChange}/>
                                <Form.Label className="errorUsername" hidden={!this.props.errorLogin}>This value is required.</Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" onChange={this.props.handlePasswordChange}/>
                                <Form.Label className="errorUsername" hidden={!this.props.errorPassword}>This value is required.</Form.Label>
                            </Form.Group>
                            <Button variant="dark" type="submit">Log in</Button>
                        </Form>
                        <Button variant="link" onClick={this.props.handleOpenRegisterModal}>If you are here the first time, create your account!</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default LoginComponent;