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
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import '../stylesheets/weddingForm.css'

// Creating the Wedding component
function Wedding(props) {

    // Setting the back image to the current page
    props.handleBackImage(window.location.pathname)

    // Setting the state variables and the navigate function
    const [weddingDate, setWeddingDate] = useState();
    const [isReception, setIsReception] = useState();
    const [weddingVenue, setWeddingVenue] = useState();
    const [isFood, setIsFood] = useState();
    const [brideStartTime, setBrideStartTime] = useState();
    const [groomStartTime, setGroomStartTime] = useState();
    const [RiskAPLI, setRiskAPLI] = useState();
    const [dayCoverage, setDayCoverage] = useState();
    const [wedPackage, setWedPackage] = useState();
    const [weddingTheme, setWeddingTheme] = useState();
    const [weddingGuests, setWeddingGuests] = useState();
    const [isVideo, setIsVideo] = useState();
    const [stay, setStay] = useState();
    const [weddingNotes, setWeddingNotes] = useState();
    const [weddingName, setWeddingName] = useState();
    const [weddingEmail, setWeddingEmail] = useState();
    const [weddingPhone, setWeddingPhone] = useState();
    const navigate = useNavigate();

    // Handles the change in the wedding field inputs
    const handleWeddingDate = (event) => { setWeddingDate(event.target.value); }
    const handleIsReception = (event) => { setIsReception(event.target.value); }
    const handleWeddingVenue = (event) => { setWeddingVenue(event.target.value); }
    const handleIsFood = (event) => { setIsFood(event.target.value); }
    const handleBrideStartTime = (event) => { setBrideStartTime(event.target.value); }
    const handleGroomStartTime = (event) => { setGroomStartTime(event.target.value); }
    const handleRiskAPLI = (event) => { setRiskAPLI(event.target.value); }
    const handleDayCoverage = (event) => { setDayCoverage(event.target.value); }
    const handleWedPackage = (event) => { setWedPackage(event.target.value); }
    const handleWeddingTheme = (event) => { setWeddingTheme(event.target.value); }
    const handleWeddingGuests = (event) => { setWeddingGuests(event.target.value); }
    const handleIsVideo = (event) => { setIsVideo(event.target.value); }
    const handleStay = (event) => { setStay(event.target.value); }
    const handleWeddingNotes = (event) => { setWeddingNotes(event.target.value); }
    const handleWeddingName = (event) => { setWeddingName(event.target.value); }
    const handleWeddingEmail = (event) => { setWeddingEmail(event.target.value); }
    const handleWeddingPhone = (event) => { setWeddingPhone(event.target.value); }

    // Handles the submit of the wedding form
    const handleSubmit = (event) => {
        // If the wedding notes section is blank then set it to 'No notes'
        if (weddingNotes === '' || weddingNotes === undefined) {
            setWeddingNotes('No notes')
        }
        // If any of the fields are blank then alert the user to fill them out
        if (weddingDate === undefined || weddingDate === '' || isReception === undefined || isReception === '' || weddingVenue === undefined || weddingVenue === '' || isFood === undefined || isFood === '' || brideStartTime === undefined || brideStartTime === '' || groomStartTime === undefined || groomStartTime === '' || RiskAPLI === undefined || RiskAPLI === '' || dayCoverage === undefined || dayCoverage === '' || wedPackage === undefined || wedPackage === '' || weddingTheme === undefined || weddingTheme === '' || weddingGuests === undefined || weddingGuests === '' || isVideo === undefined || isVideo === '' || stay === undefined || stay === '' || weddingNotes === undefined || weddingNotes === '' || weddingName === undefined || weddingName === '' || weddingEmail === undefined || weddingEmail === '' || weddingPhone === undefined || weddingPhone === '') {
            alert('Please fill out all fields')
        } else {
            // If the fields were filled out then add them to a new formdata object and post it to the API using axios, then alert the user that the inquiry was sent and navigate them to the home page
            var wedData = { date: weddingDate, reception: isReception, venue: weddingVenue, food: isFood, brideStart: brideStartTime, groomStart: groomStartTime, risk: RiskAPLI, coverage: dayCoverage, package: wedPackage, theme: weddingTheme, guests: weddingGuests, video: isVideo, stay: stay, notes: weddingNotes, name: weddingName, email: weddingEmail, phone: weddingPhone }
            var formData = new FormData();
            for (var key in wedData) {
                formData.append(key, wedData[key]);
            }
            axios.post("http://unn-w20021752.newnumyspace.co.uk/jwdtphotography/API/addwedevent", formData, {
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

    return (
        <div className="WeddingPage">
            {/** Displays a card that casts a large shadow, the form is displayed in two columns and several rows */}
            <Card border='secondary' className='mx-auto shadow-lg' id='weddingForm'>
                <Card.Title as='h1' id='cardHeader' className='float-start' > Get in touch about booking me for your Wedding! </Card.Title>
                <Card.Body>
                    <Card.Text> Below there are some fields that help me get a feel for the type of wedding you envision. Please fill these out so I can ensure the best experience for yourselves on your special day, I look forward to hearing from you! </Card.Text>
                    <Row id='wedRow1'>
                        <Col>
                            {/** The date of the wedding is asked for with a date input field and a floating label */}
                            <Form.Group>
                                <FloatingLabel label='Date of Wedding'>
                                    <Form.Control required type='date' id='wedDate' onChange={handleWeddingDate}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/** The user is asked if there is a reception with a radio button group and a label */}
                            <Form.Group as={Row} id='RecpCheck'>
                                <Form.Label>Is there a reception?</Form.Label>
                                <Col>
                                    <Form.Check name='RecepRadio' type='radio' value='yes' label='Yes' onChange={handleIsReception}/>
                                </Col>
                                <Col>
                                    <Form.Check name='RecepRadio' type='radio' value='no' label='No' onChange={handleIsReception} />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row id='wedRow2'>
                        <Col>
                            {/** The venue of the wedding is asked for with a text input field and a floating label */}
                            <Form.Group>
                                <FloatingLabel label='Venue for the Wedding'>
                                    <Form.Control required type='text' id='wedVenue' placeholder='Enter the Venue for the Wedding' onChange={handleWeddingVenue}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/** The user is asked if there is food provided at the wedding with a radio button group and a label */}
                            <Form.Group as={Row} id='foodCheck'>
                                <Form.Label>Is there food provided at the Wedding?</Form.Label>
                                <Col>
                                    <Form.Check name='foodRadio' type='radio' value='yes' label='Yes' onChange={handleIsFood} />
                                </Col>
                                <Col>
                                    <Form.Check name='foodRadio' type='radio' value='no' label='No' onChange={handleIsFood} />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row id='wedRow3'>
                        <Col>
                            {/** The time that the bride starts getting ready is asked for with a time input field and a floating label */}
                            <Form.Group>
                                <FloatingLabel label='When does the bride start getting ready?'>
                                    <Form.Control required type='time' id='brideStart' onChange={handleBrideStartTime}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/** The time that the groom starts getting ready is asked for with a time input field and a floating label */}
                            <Form.Group>
                                <FloatingLabel label='When does the Groom start getting ready?'>
                                    <Form.Control required type='time' id='groomStart' onChange={handleGroomStartTime} />
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row id='wedRow4'>
                        <Col>
                            {/** The user is asked if the venue requires a Risk Assessment or PLI with a radio button group and a label */}
                            <Form.Group as={Row} id='RiskPLICheck'>
                                <Form.Label>Does the venue require a Risk Assessment or PLI?</Form.Label>
                                <Col>
                                    <Form.Check name='RPLIRadio' type='radio' value='yes' label='Yes' onChange={handleRiskAPLI}/>
                                </Col>
                                <Col>
                                    <Form.Check name='RPLIRadio' type='radio' value='no' label='No' onChange={handleRiskAPLI}/>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/** The user is asked how much of the day they would like covered with a select field and a label */}
                            <Form.Label> How much of the day would you like covered? </Form.Label>
                            <Form.Select required id='wedCoverage' aria-label='Choose the amount of coverage you would like' onChange={handleDayCoverage} defaultValue=''> 
                                <option value=''>Choose the amount of coverage you would like</option>
                                <option value='Full Day'>Full Day</option>
                                <option value='Half Day'>Half Day</option>
                                <option value='Just the Ceremony'>Just the Ceremony</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row id='wedRow5'>
                        <Col>
                            {/** The user is asked about the photography budget they want with a select field and a label */}
                            <Form.Label> Photography Budget </Form.Label>
                            <Form.Select required id='wedBudget' aria-label='Specify the budget that you have for the photography of your wedding' onChange={handleWedPackage}>
                                <option value=''>Choose the budget for your Wedding</option>
                                <option value='Silver'>£650 - Silver Package - One Photographer and Virtual Copy of Images</option>
                                <option value='Gold'>£850 - Gold Package - Two Photographers and Virtual Copy of Images</option>
                                <option value='Platinum'>£1125 - Platinum Package - Two Photographers and Photo Album</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            {/** The theme/style of the wedding is asked for with a text input field and a floating label */}
                            <Form.Group>
                                <FloatingLabel label='What is the theme/style for your wedding?'>
                                    <Form.Control required type='text' id='wedTheme' placeholder='What is the wedding theme/style?' onChange={handleWeddingTheme}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row id='wedRow6'>
                        <Col>
                            {/** The number of guests attending the wedding is asked for with a text input field and a floating label */}
                            <Form.Group>
                                <FloatingLabel label='How many guests are attending the wedding?'>
                                    <Form.Control required type='text' id='guestNo' placeholder='How many guests are attending the wedding?' onChange={handleWeddingGuests}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/** The user is asked if they have a videographer with a radio button group and a label */}
                            <Form.Group as={Row} id='videoCheck'>
                                <Form.Label>Do you have a videographer?</Form.Label>
                                <Col>
                                    <Form.Check name='videoRadio' type='radio' value='yes' label='Yes' onChange={handleIsVideo}/>
                                </Col>
                                <Col>
                                    <Form.Check name='videoRadio' type='radio' value='no' label='No' onChange={handleIsVideo}/>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row id='wedRow7'>
                        <Col>
                            {/** The user is asked if they are staying at the venue before the wedding with a radio button group and a label */}
                            <Form.Group as={Row} id='stayCheck'>
                                <Form.Label>Are you staying at the venue before the wedding?</Form.Label>
                                <Col>
                                    <Form.Check name='stayRadio' type='radio' value='yes' label='Yes' onChange={handleStay} />
                                </Col>
                                <Col>
                                    <Form.Check name='stayRadio' type='radio' value='no' label='No' onChange={handleStay}/>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/** The user is asked for extra information  with a text input field and a floating label */}
                            <Form.Group>
                                <FloatingLabel label='Extra Information about your wedding'>
                                    <Form.Control type='text' id='wedExtraInfo' placeholder='Extra information about your wedding' onChange={handleWeddingNotes} />
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row id='wedRow8'>
                        <Col>
                            {/** The user is asked for their full name with a text input field and a floating label */}
                            <Form.Group>
                                <FloatingLabel label='Your Full Name'>
                                    <Form.Control required type='text' id='wedName' placeholder='Your Full Name' onChange={handleWeddingName}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/** The user is asked for their email with a email input field and a floating label */}
                            <Form.Group>
                                <FloatingLabel label='Your Email'>
                                    <Form.Control required type='email' id='wedEmail' placeholder='Enter your Email' onChange={handleWeddingEmail}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row id='wedRow9'>
                        <Col>
                            {/** The user is asked for their contact number with a text input field and a floating label */}
                            <Form.Group>
                                <FloatingLabel label='Your Contact Number'>
                                    <Form.Control required type='text' id='wedNumber' placeholder='Your Contact Number' onChange={handleWeddingPhone}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row id='wedRow10'>
                        <Col>
                            {/** The user is thanked for filling in the fields and a button to submit the form */}
                            <Card.Text> Thank you for helping provide information to get the most for your event! I will be in touch regarding the inquiry after you click submit. </Card.Text>
                            <Button variant='dark' size='lg' onClick={handleSubmit}> Submit </Button>
                        </Col>
                    </Row>
                </Card.Body>

            </Card>
        </div>
    )
}

export default Wedding;