/**
 * 
 * @author - James Tatton
 * 
*/

// Importing all the required components and libraries
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import MtbDetails from './MtbDetails';
import '../stylesheets/HomePage.css'

// Creating the MtbInq component
function MtbInq(props) {

    // Setting the back image to the current page
    props.handleBackImage(window.location.pathname)

    // Setting the state variables
    const [loading, setLoading] = useState(true);
    const [mtbInquiries, setmtbInquiries] = useState([]);

    // Fetches the mtbInquiries from the API, it then sets the mtbInquiries state variable to the result and sets the loading state to false
    useEffect(() => {
        fetch("http://unn-w20021752.newnumyspace.co.uk/jwdtphotography/API/mtbevent", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((jsonResponse) => {
                setmtbInquiries(jsonResponse);
                setLoading(false);
            })
    }, [])

    // Creates a custom toggle for the accordion, this was used from the react-bootstrap documentation
    function CustomToggle({ children, eventKey }) {

        const decoratedOnClick = useAccordionButton(eventKey);

        return (
            <button
                type="button"
                className="btn btn-dark"
                id={eventKey}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    }

    return (
        <div className="InquiriesPage">
            {/** This displays a card which displays all inquiries to the admin of the site */}
            <Card id='homeCard' border='secondary' className='mx-auto shadow-lg'>
                <Card.Title as='h1' style={{ textAlign: 'left', paddingLeft: '0.5em' }} > Inquiries </Card.Title>
                <Card.Body>
                    {/* Displaying the two buttons that link to the two pages for the different types of inquiries, it disables the button that would navigate to the page the admin is currently on */}
                    <Row className='inqButtons'>
                        <Col>
                            <LinkContainer to='/mtbinqrs'><Button variant='dark' disabled >Mountain Biking Inquiries</Button></LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to='/wedinqrs'><Button variant='dark'>Wedding Inquiries</Button></LinkContainer>
                        </Col>
                    </Row>
                    {/* If the loading state is true, display the loading message, if it is false, display the inquiries */}
                    {loading && <p>Loading...</p>}
                    {!loading &&
                        <div className='mtbInqs'>
                            {/** If there are inquiries it maps each of the inquiries to an accordion, that are displayed on cards, giving three details of each inquiry and a button to show more details */}
                            {mtbInquiries.length > 0 ? mtbInquiries.map((value, key) => <div className="mtbInq" key={value.id}>
                                <Col>
                                    <Accordion>
                                        <Card id='homeCard' className='mx-auto shadow-lg'>
                                            <Card.Header>
                                                <Row className='accordianHeaderRow'>
                                                    <Col><div>  Type of Event : {value.type}</div></Col>
                                                    <Col><div> Date of MTB Event : {value.date.split("-")[2] + "/" + value.date.split("-")[1] + "/" + value.date.split("-")[0]} </div></Col>
                                                </Row>
                                                <Row className='accordianHeaderRow'>
                                                    <Col><div><Card.Text>  Name of Inquirer : {value.clientName} </Card.Text></div></Col>
                                                    <Col><CustomToggle eventKey="0">More Details</CustomToggle></Col>
                                                </Row>
                                            </Card.Header>
                                            {/* If the accordion is open, display the MtbDetails component, passing the details of the current inquiry to it */}
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <MtbDetails value={value}/>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Col>
                            {/* If there are no inquiries, display the message, if there are, display the inquiries */}
                            </div>) : <p> There are currently no new Mountain Biking inquiries </p>}
                        </div>}
                </Card.Body>
            </Card>
        </div>
    )
}

export default MtbInq;