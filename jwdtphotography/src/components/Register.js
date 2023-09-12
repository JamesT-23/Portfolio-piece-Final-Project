import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import '../stylesheets/LogIn.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register() {

    return (
        <div className="LogInPage">
             <Card className='mx-auto shadow-lg' id='LogInCard'>
                <Card.Title as='h1'> Register! </Card.Title>
                <Form className='m-1'>
                    <Row>
                        <Col>
                            <Form.Group className="m-2 mx-auto">
                                <Form.Control type="text" placeholder="First Name" required maxLength={45}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="m-2 mx-auto">
                                <Form.Control type="text" placeholder="Surname" required maxLength={44}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="m-2 mx-auto">
                            <Form.Control type="email" placeholder="Email" required maxLength={44}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="m-2 mx-auto">
                            <Form.Control type="password" placeholder="Password" required maxLength={90}/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="m-2 mx-auto">
                            <Form.Control type="password" placeholder="Confirm Password" required maxLength={90}/>
                        </Form.Group>
                    </Row>
                    <Row id = 'registerRow'>
                        <Form.Group className="m-1 mx-auto">
                            <Form.Check type="checkbox" label="I confirm I am over 18" />
                        </Form.Group>
                    </Row>
                    <Button className="mt-2" variant="primary" type="submit">Submit</Button>
                </Form>
            </Card>
        </div>
    )
}

export default Register;