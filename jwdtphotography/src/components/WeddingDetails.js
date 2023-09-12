/**
 * 
 * @author - James Tatton
 * 
*/

// Importing all the required components and libraries
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../stylesheets/HomePage.css'

// Creating the WeddingDetails component
function WeddingDetails(props) {

    // Defines the navigate function
    const navigate = useNavigate();

    // When the clicks the remove button, the following function is called, which removes the inquiry from the database and alerts the user the inquiry has been removed and navigates them back to the inquiries page
    const removeInq = (id) => {
        fetch(("http://unn-w20021752.newnumyspace.co.uk/jwdtphotography/API/removewed?id="+ id),{
            method: 'GET',
        })
        alert("Inquiry Removed");
        navigate("/inqrs");
    }

    return (
        <Card.Body>
            {/* Displays the wedding details in three columns, and displays the contact information with a button at the bottom to remove the inquiry */}
            <Row className='WeddingInfo'>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Venue</strong> : {props.value.venue} </div> </Col>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Reception</strong> :{props.value.reception === '1' ? 'Yes' : 'No'} </div> </Col>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Food Provided</strong> : {props.value.food === '1' ? 'Yes' : 'No'} </div> </Col>
            </Row>
            <Row className='WeddingInfo'>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Bride Start Time</strong> : {props.value.brideStart.split(":")[0] + ":" + props.value.brideStart.split(":")[1]} </div> </Col>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Groom Start Time</strong> : {props.value.groomStart.split(":")[0] + ":" + props.value.groomStart.split(":")[1]} </div> </Col>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Staying at Venue</strong> : {props.value.food === '1' ? 'Yes' : 'No'} </div> </Col>
            </Row>
            <Row className='WeddingInfo'>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Amount of Coverage</strong> : {props.value.dayCoverage} </div> </Col>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>No. of Guests</strong> : {props.value.guests} </div> </Col>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Videographer</strong> : {props.value.video === '1' ? 'Yes' : 'No'} </div> </Col>
            </Row>
            <Row className='WeddingInfo'>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>RA and PLI</strong> : {props.value.RaPli === '1' ? 'Yes' : 'No'} </div> </Col>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Theme / Style</strong> : {props.value.theme} </div> </Col>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Extra Information</strong> : {props.value.info} </div> </Col>
            </Row>
            <div className='contactDetails'>
                <Card.Subtitle> <strong>Contact Details</strong> </Card.Subtitle>
                <Row>
                    <Col> <div> <strong>Email</strong> : {props.value.clientEmail} </div> </Col>
                    <Col> <div> <strong>Contact Number</strong> : {props.value.clientPhone} </div> </Col>
                </Row>
            </div>
            <div style={{ marginTop: '1em' }} className='centeredElement'>
                <p> If you have dealt with this inquiry, remove this inquiry with the button below </p>
            </div>
            <Row>
                <Col>
                    <Button style={{ marginTop: '1em' }} variant='dark' onClick={() => removeInq(props.value.id)} >Remove Inquiry</Button>
                </Col>
            </Row>
        </Card.Body>
    )
}

export default WeddingDetails;