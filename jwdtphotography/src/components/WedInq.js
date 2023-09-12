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
import { LinkContainer } from 'react-router-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import '../stylesheets/HomePage.css'
import WeddingDetails from './WeddingDetails';

// Creating the Wedding Inquiry component
function WedInq(props) {

    // Setting the back image to the current page
    props.handleBackImage(window.location.pathname)

    // Setting the state variables
    const [loading, setLoading] = useState(true);
    const [wedInquiries, setWedInquiries] = useState([]);

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

    // Fetches the wedInquiries from the API, it then sets the wedInquiries state variable to the result and sets the loading state to false
    useEffect(() => {
        fetch("http://unn-w20021752.newnumyspace.co.uk/jwdtphotography/API/weddinginq", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((jsonResponse) => {
                setWedInquiries(jsonResponse);
                setLoading(false);
            })
    }, [])

    return (
        <div className="InquiriesPage">
            {/** This displays a card which displays all wedding inquiries to the admin of the site */}
            <Card id='homeCard' border='secondary' className='mx-auto shadow-lg'>
                <Card.Title as='h1' style={{ textAlign: 'left', paddingLeft: '0.5em' }} > Inquiries </Card.Title>
                <Card.Body>
                    <Row className='inqButtons'>
                        {/* These buttons allow the user to navigate to the mtbInqrs and wedInqrs pages, the button for the page that is currently displayed is disabled */}
                        <Col>
                            <LinkContainer to='/mtbinqrs'><Button variant='dark' >Mountain Biking Inquiries</Button></LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to='/wedinqrs'><Button variant='dark' disabled >Wedding Inquiries</Button></LinkContainer>
                        </Col>
                    </Row>
                    {/** If the loading state is true a loading message is displayed to the admin */}
                    {loading && <p>Loading...</p>}
                    {!loading &&
                        <div>
                            {/** If there are wedding inquiries, it maps them each to an accordion on a card, when the more details button is clicked the extra information for the accordion is shown */}
                            <div className='wedInqs'>
                                {wedInquiries.length > 0 ? wedInquiries.map((value, key) => <div className="wedInq" key={value.id}>
                                    <Col>
                                        <Accordion>
                                            <Card id='homeCard' className='mx-auto shadow-lg'>
                                                <Card.Header>
                                                    <Row className='accordianHeaderRow'>
                                                        <Col><div>  Package of Event : {value.package}</div></Col>
                                                        <Col><div> Date of Wedding : {value.date.split("-")[2] + "/" + value.date.split("-")[1] + "/" + value.date.split("-")[0]} </div></Col>
                                                    </Row>
                                                    <Row className='accordianHeaderRow'>
                                                        <Col><div><Card.Text>  Name of Inquirer : {value.clientName} </Card.Text></div></Col>
                                                        <Col><CustomToggle eventKey="0">More Details</CustomToggle></Col>
                                                    </Row>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <WeddingDetails value={value}/>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </Col>
                                    {/** If there are no wedding inquiries the admin is informed of this */}
                                </div>) : <p> There are currently no new wedding inquiries </p>}
                            </div>
                        </div>}
                </Card.Body>
            </Card>
        </div>
    )
}

export default WedInq;