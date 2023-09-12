/**
 * 
 * @author - James Tatton
 * 
*/

// Importing all the required components and libraries
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../stylesheets/mtbForm.css'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';

// Creating the MountainBiking component
function MountainBiking(props) {

    // Setting the back image to the current page
    props.handleBackImage(window.location.pathname)

    // Setting the state variables for the component and the navigate function
    const [eventDate, setEventDate] = useState()
    const [eventPLICheck, setEventPLICheck] = useState()
    const [eventLocation, setEventLocation] = useState()
    const [eventSponsors, setEventSponsors] = useState()
    const [eventType, setEventType] = useState()
    const [eventInfo, setEventInfo] = useState()
    const [eventStartTime, setEventStartTime] = useState()
    const [eventEndTime, setEventEndTime] = useState()
    const [eventRA, setEventRA] = useState()
    const [eventName, setEventName] = useState()
    const [eventEmail, setEventEmail] = useState()
    const [eventPhone, setEventPhone] = useState()
    const navigate = useNavigate();

    // The functions that will handle the changes to the state variables
    const handleEventDate = (event) => { setEventDate(event.target.value); }
    const handleEventPLICheck = (event) => { setEventPLICheck(event.target.value); }
    const handleEventLocation = (event) => { setEventLocation(event.target.value); }
    const handleEventSponsors = (event) => { setEventSponsors(event.target.value); }
    const handleEventType = (event) => { setEventType(event.target.value); }
    const handleEventInfo = (event) => { setEventInfo(event.target.value); }
    const handleEventStartTime = (event) => { setEventStartTime(event.target.value); }
    const handleEventEndTime = (event) => { setEventEndTime(event.target.value); }
    const handleEventRA = (event) => { setEventRA(event.target.value); }
    const handleEventName = (event) => { setEventName(event.target.value); }
    const handleEventEmail = (event) => { setEventEmail(event.target.value); }
    const handleEventPhone = (event) => { setEventPhone(event.target.value); }

    // The function that will handle the submission of the form
    const handleSubmit = (event) => {

        // If the sponsors have been left blank, set the state variable to "None"
        if (eventSponsors === undefined) {
            setEventSponsors("None")
        }

        // If any of the states are unset or are blank it alerts the user to fill in all the fields
        if (eventDate === undefined || eventDate === '' || eventPLICheck === undefined || eventPLICheck === '' || eventLocation === undefined || eventLocation === '' || eventSponsors === undefined || eventSponsors === '' || eventType === undefined || eventType === '' || eventStartTime === undefined || eventStartTime === '' || eventEndTime === undefined || eventEndTime === '' || eventRA === undefined || eventRA === '' || eventName === undefined ||eventName === '' || eventEmail === undefined || eventEmail === '' || eventPhone === undefined || eventPhone === '') {
            alert('Please fill in all fields')
        } else {
            // If the event info is set, it will send the data to the API with the event info using formdata and axios to post the form data to the api, it then notifies the user that the form has been sent and navigates to the home page
            if (eventInfo !== undefined) {
                var eventData = { date: eventDate, pli: eventPLICheck, location: eventLocation, sponsors: eventSponsors, type: eventType, info: eventInfo, start: eventStartTime, end: eventEndTime, ra: eventRA, name: eventName, email: eventEmail, phone: eventPhone }
                var formData = new FormData();
                for (var key in eventData) {
                    formData.append(key, eventData[key]);
                }

                axios.post("http://unn-w20021752.newnumyspace.co.uk/jwdtphotography/API/addmtbeventnotes", formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(function (response) {
                    alert('Inquiry Sent');
                    navigate('/');
                })
                    .catch(function (error) {
                        alert('Please fill in all the required fields')
                    })
            } else {
                // If the event info is not set, it will send the data to the API without the event info using formdata and axios to post the form data to the api, it then notifies the user that the form has been sent and navigates to the home page
                var eventData = { date: eventDate, pli: eventPLICheck, location: eventLocation, sponsors: eventSponsors, type: eventType, start: eventStartTime, end: eventEndTime, ra: eventRA, name: eventName, email: eventEmail, phone: eventPhone }
                var formData = new FormData();
                for (var key in eventData) {
                    formData.append(key, eventData[key]);
                }

                axios.post("http://unn-w20021752.newnumyspace.co.uk/jwdtphotography/API/addmtbevent", formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(function (response) {
                    alert('Inquiry Sent');
                    navigate('/');
                })
                .catch(function (error) {
                    alert('Please fill in all the required fields')
                })
            }
        }
    }

    return (
        <div className="MountainBikingPage">
            {/* The form that will be used to get the information about the event from the user, rows and columns are used to chunk the information into more manageable clusters*/}
            <Card border='secondary' className='mx-auto shadow-lg' id='mountainBikingForm'>
                <Card.Title as='h1' id='cardHeader' > Get in touch about covering your Event! </Card.Title>
                <Card.Body>
                    <Card.Text> In order to ensure the best results for your photography coverage of your event there is some information that would be helpful to know! Please fill in the details below to help me get an idea of the experience you want for yourself and your riders! </Card.Text>
                </Card.Body>
                <Row id='row1'>
                    <Col>
                    {/* This form group is a date input field, it has a floating label so that users are constantly informed of what they must input */}
                        <Form.Group>
                            <FloatingLabel label='Date of Event'>
                                <Form.Control required type='date' id='dateInput' onChange={handleEventDate} />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col>
                    {/* This form group is a radio button group, it has a label so that users are constantly informed about what the choices are for */}
                        <Form.Group as={Row} id='PLICheck'>
                            <Form.Label>Does a copy of Personal Liability Insurance (PLI) need to be presented</Form.Label>
                            <Col>
                                <Form.Check name='PLIRadio' type='radio' value='1' label='Yes' onChange={handleEventPLICheck} />
                            </Col>
                            <Col>
                                <Form.Check name='PLIRadio' type='radio' value='0' label='No' onChange={handleEventPLICheck} />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <Row id='row2'>
                    <Col>
                    {/* This form group is a text input field, it has a floating label so that users are constantly informed of what they must input */}
                        <Form.Group>
                            <FloatingLabel label='Location'>
                                <Form.Control required type='text' id='eventLocation' placeholder='Enter a Location' onChange={handleEventLocation} />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <FloatingLabel label='Is your event sponsored, if yes Enter here'>
                                <Form.Control type='text' id='eventSponsors' placeholder='Enter your Sponsors' onChange={handleEventSponsors} />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row id='row3'>
                    <Col>
                        <Form.Group>
                            <FloatingLabel label='Type of Event'>
                                <Form.Control required type='text' id='eventLocation' placeholder='Enter the Type of Event' onChange={handleEventType} />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <FloatingLabel label='Other Information about Event'>
                                <Form.Control required type='text' id='eventInfo' placeholder='Enter your Information' onChange={handleEventInfo} />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row id='row4'>
                    <Col>
                    {/* This form group is a time input field, it has a floating label so that users are constantly informed of what they must input */}
                        <Form.Group>
                            <FloatingLabel label='Start Time'>
                                <Form.Control required type='time' id='eventStart' placeholder='Enter the Start Time' onChange={handleEventStartTime} />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <FloatingLabel label='Estimated Finish Time'>
                                <Form.Control required type='time' id='eventEnd' placeholder='Enter your End Time' onChange={handleEventEndTime} />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row id='row5'>
                    <Col>
                        <Form.Group as={Row} id='RACheck'>
                            <Form.Label>Does a Risk Assessment need to be conducted</Form.Label>
                            <Col>
                                <Form.Check name='RiskRadio' type='radio' value='1' label='Yes' onChange={handleEventRA} />
                            </Col>
                            <Col>
                                <Form.Check name='RiskRadio' type='radio' value='0' label='No' onChange={handleEventRA} />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <FloatingLabel label='Your Full Name'>
                                <Form.Control required type='text' id='fullName' placeholder='Enter your Full Name' onChange={handleEventName} />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row id='row6'>
                    <Col>
                        <Form.Group>
                            <FloatingLabel label='Your Email'>
                                <Form.Control required type='email' id='inqEmail' placeholder='Enter your Email' onChange={handleEventEmail} />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <FloatingLabel label='Your Contact Number'>
                                <Form.Control required type='text' id='phoneNumber' placeholder='Enter your Contact Number' onChange={handleEventPhone} />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row id='row7'>
                    <Col>
                        <div id='centeredElement'>
                            <Card.Text> Thank you for helping provide information to get the most for your event! I will be in touch regarding the inquiry after you click submit. </Card.Text>
                            <Button size='lg' variant='dark' onClick={handleSubmit}>Submit</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default MountainBiking;