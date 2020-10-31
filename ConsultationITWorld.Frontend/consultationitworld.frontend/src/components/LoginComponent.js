import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";

import "../styles/login.css";

class LoginComponent extends Component {
    render() {
        return (
            <Card className="cardLogin">
                <Card.Header>
                    <Card.Title>Log in</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={this.props.handleLoginSubmit}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" onChange={this.props.handleUsernameChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" onChange={this.props.handlePasswordChange}/>
                        </Form.Group>
                        <Button variant="dark" type="submit">Log in</Button>
                    </Form>
                    <Button variant="link" onClick={this.props.handleOpenRegisterModal}>If you are here the first time, create your account!</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default LoginComponent;