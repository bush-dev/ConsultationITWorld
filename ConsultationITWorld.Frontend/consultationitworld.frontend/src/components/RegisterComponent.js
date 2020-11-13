import React, { Component } from "react";
import { Card, Button, Form, Modal, Row, Col } from "react-bootstrap";

import "../styles/register.css";

class RegisterComponent extends Component {
    render() {
        return (
            <Modal show={this.props.isOpenedRegisterModal} className="modalRegister">
                <Modal.Header closeButton  onClick={this.props.handleCloseRegisterModal} className="modalHeaderRegister"> Registration </Modal.Header>
                <Card className="cardRegister">
                    <Card.Body>
                        <Form onSubmit={this.props.handleRegisterSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="username" placeholder="Enter username" onChange={this.props.handleRegisterUsernameChange}/>
                                        <Form.Label className="errorRegister" hidden={!this.props.errorRegisterUsername}>This value is required.</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter password" onChange={this.props.handleRegisterPasswordChange}/>
                                        <Form.Label className="errorRegister" hidden={!this.props.errorRegisterPassword}>This value is required.</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control  placeholder="Enter first name" onChange={this.props.handleRegisterFirstNameChange}/>
                                        <Form.Label className="errorRegister" hidden={!this.props.errorRegisterFirstName}>This value is required.</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control  placeholder="Enter last name" onChange={this.props.handleRegisterLastNameChange}/>
                                        <Form.Label className="errorRegister" hidden={!this.props.errorRegisterLastName}>This value is required.</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control  placeholder="Enter address" onChange={this.props.handleRegisterAddressChange}/>
                                        <Form.Label className="errorRegister" hidden={!this.props.errorRegisterAddress}>This value is required.</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control  placeholder="Enter country" onChange={this.props.handleRegisterCountryChange}/>
                                        <Form.Label className="errorRegister" hidden={!this.props.errorRegisterCountry}>This value is required.</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control  placeholder="Enter e-mail" onChange={this.props.handleRegisterEmailChange}/>
                                        <Form.Label className="errorRegister" hidden={!this.props.errorRegisterEmail}>This value is required.</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control  placeholder="Enter phone number" onChange={this.props.handleRegisterPhoneNumberChange}/>
                                        <Form.Label className="errorRegister" hidden={!this.props.errorRegisterPhoneNumber}>This value is required.</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="dark" type="submit">Register in</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Modal>
        )
    }
}

export default RegisterComponent;