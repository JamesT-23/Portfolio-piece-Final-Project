/**
 * 
 * @author - James Tatton
 * 
*/

// Importing all the required components and libraries
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';
import Form from 'react-bootstrap/Form';
import '../stylesheets/LogIn.css';
import Row from 'react-bootstrap/Row';

// Creating the LogIn component
function LogIn(props) {

    // Setting the back image to the current page
    props.handleBackImage(window.location.pathname)

    // Setting the state variables for the component and the navigate function
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [userClicked , setUserClicked] = useState(false);
    const navigate = useNavigate();

    // The functions that will handle the changes to the state variables
    const handleUsername = (event) => { setUsername(event.target.value); }
    const handlePassword = (event) => { setPassword(event.target.value); }

    // The function that will handle the log in process
    const clickedLogIn = (event) => {

        // Preventing the default action of the submit button
        event.preventDefault();

        // Creating the encoded string for the authentication
        const encodedString = Buffer.from(username + ':' + password).toString('base64');

        // Fetching the authentication data from the API, then if the user is authenticated, the token is stored in local storage and the user is navigated to the admin home page, it also resets the username and password states
        fetch("http://unn-w20021752.newnumyspace.co.uk/jwdtphotography/API/authenticate", {
            method: 'POST',
            headers: new Headers({ 'Authorization': 'Basic ' + encodedString })
        })
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            if (jsonResponse.message === "Successfully Authenticated") {
                props.handleAuthenticated(true)
                localStorage.setItem('token', jsonResponse.data.token);
                setUserClicked(false);
                setUsername("");
                setPassword("");
                navigate('/admnHm');
            } else {
                setUserClicked(true);
            }
        })
        .catch((e) => {
            console.log(e.message);
        })
    }

    // This useEffect will check if the user already has a token in local storage, if they do, they will be navigated to the admin home page and authenticated
    useEffect(() => {
        if (localStorage.getItem('token')) {
            props.handleAuthenticated(true);
            navigate('/admnHm');
        }
    }, [])

    return (
        <div className="LogInPage">
            {/** The Log In Card, this displays the two fields needed for the log in process and disables the submit button until the user has entered both a username and password, if the user enters invalid information then they are informed that the details were wrong */}
            <Card border='secondary' className='mx-auto shadow-lg' id='LogInCard'>
                <Card.Title as='h1'> Log In! </Card.Title>
                <Form className='m-1'>
                    <Row id='registerRow'>
                        <Form.Group style= {{width:'50%'}}className="m-2 mx-auto" controlId="formEmail">
                            <Form.Control type="email" placeholder="Email" maxLength={44} onChange = {handleUsername} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                    </Row>
                    <Row id='registerRow'>
                        <Form.Group style={{width:'50%'}} className="m-2 mx-auto" controlId="formPassword">
                            <Form.Control type="password" placeholder="Password" maxLength={90} onChange = {handlePassword}/>
                        </Form.Group>
                    </Row>
                    <Button style={{marginBottom: '3em'}} className="mt-2" variant="dark" type = 'submit' size='lg' disabled = {!username || !password} onClick = {clickedLogIn}>Log In</Button>
                    <p className="userWarned">{userClicked ? <span>Please enter a valid Username and Password</span> : <span></span>}</p>
                    
                </Form>
            </Card>
        </div>
    )
}

export default LogIn;