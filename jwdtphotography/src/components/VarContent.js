/**
 * 
 * @author - James Tatton
 * 
*/

// Importing all the required components and libraries
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import '../stylesheets/HomePage.css'
import Alert from 'react-bootstrap/Alert';

// Creating the VarContent component
function VarContent(props) {

    // Setting the back image to the current page
    props.handleBackImage(window.location.pathname)

    // Setting the state variables and the navigate function
    const [currentMessage, setCurrentMessage] = useState('')
    const [newMessage, setNewMessage] = useState('')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    // Handles the change in the new message input
    const handleNewMesssage = (event) => { setNewMessage(event.target.value) }

    // Fetches the current message from the database and sets the currentMessage state variable to the result and sets the loading state to false
    useEffect(() => {
        fetch("http://unn-w20021752.newnumyspace.co.uk/jwdtphotography/API/dismessage", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((jsonResponse) => {
                setCurrentMessage(jsonResponse[0].message);
                setLoading(false);
            })
    }, [])

    // Handles the update of the message
    const updateMessage = (event) => {
        // If the new message state is empty, it will alert the user to enter a message
        if (newMessage === '') {
            alert('Please enter a message')
        } else {
            // Sets the new message as formdata and posts it to the API through axios, then it will alert the user that the message has been updated and navigate to the admin home page
            var messageData = { message: newMessage }
            var formData = new FormData();
            for (var key in messageData) {
                formData.append(key, messageData[key]);
            }
            axios.post("http://unn-w20021752.newnumyspace.co.uk/jwdtphotography/API/updatemessage", formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(function (response) {
                alert('Message Updated');
                navigate('/admnHm');
            })
            .catch(function (error) {
                alert('Please fill in all the required fields')
            })
        }
    }

    return (
        <div className="VarContent">
            {/* If the user is not authenticated, display an alert to the user informing they must be signed in */}
            {!props.authenticated &&
                <Alert variant="primary">
                    <Alert.Heading>Not logged in!</Alert.Heading>
                    <p>
                        Please log in to view this page.
                    </p>
                </Alert>}
            {/* If the user is authenticated, display the variable content page */}
            {props.authenticated &&
                <div>
                    <Card id='homeCard' border='secondary' className='mx-auto shadow-lg'>
                        <Card.Title as='h1' style={{ marginTop: '0.5em' }}>Variable Content</Card.Title>
                        <Card.Body>
                            <Card.Subtitle as='h2' style={{ marginTop: '0.5em' }}>Change the message displayed to visitors on the home page of the site.</Card.Subtitle>
                            <Card.Subtitle as='h3' style={{ marginTop: '1em' }}> Current Message</Card.Subtitle>
                            {/** If the loading state is true display a loading message. If the loading state is false it  */}
                            {loading && <p>Loading...</p>}
                            {!loading && <p style={{ marginTop: '1em' }}>{currentMessage}</p>}
                            <Form>
                                <Form.Group>
                                    {/** A floating label is used to constantly inform the user what must be entered */}
                                    <FloatingLabel label='Change the Message to your Visitors'>
                                        <Form.Control required type='text' id='newMessInput' onChange={handleNewMesssage} placeholder='Change the message to your visitors'/>
                                    </FloatingLabel>
                                </Form.Group>
                                {/** If the user has not entered a new message the button to change the message will not appear for the user */}
                                {newMessage !== '' && <Button style={{marginTop:'1em'}} variant='dark' onClick={updateMessage}>Change</Button>}
                            </Form>
                        </Card.Body>
                    </Card>
                </div>}
        </div>

    )
}

export default VarContent;