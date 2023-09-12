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

// Creating the MtbDetails component
function MtbDetails(props) {

    // Defining the navigate function
    const navigate = useNavigate();

    // Function that is called when the user clicks the remove inquiry button, this passes the inquiry id to the removeInq function, alerts the user it has been deleted and then navigates the user back to the main inquiries page
    const removeInq = (id) => {
        fetch(("http://unn-w20021752.newnumyspace.co.uk/jwdtphotography/API/removemtb?id=" + id), {
            method: 'GET',
        })
        alert("Inquiry Removed");
        navigate("/inqrs");
    }

    return (
        <Card.Body>
            {/* Displaying the details of the inquiry in a card in three different columns, then displays the contact information and the button to remove the inquiry */}
            <Row className='MTBInfo'>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Location</strong> : {props.value.location} </div> </Col>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Start Time</strong> : {props.value.start.split(":")[0] + ":" + props.value.start.split(":")[1]} </div> </Col>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Estimated Finish</strong> : {props.value.end.split(":")[0] + ":" + props.value.end.split(":")[1]} </div> </Col>
            </Row>
            <Row className='MTBInfo'>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>PLI Needed </strong> : {props.value.pli === '1' ? 'Yes' : 'No'} </div> </Col>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Risk Assessent Needed</strong> : {props.value.risk === '1' ? 'Yes' : 'No'} </div> </Col>
                <Col> <div style={{ textAlign: 'left', paddingLeft: '2em' }}> <strong>Sponsors</strong> : {props.value.sponsors} </div> </Col>
            </Row>
            <Row className='MTBInfo'>
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

export default MtbDetails;

/**
 * fetch(("ENDPOINT GOES HERE " + id), {
            method: 'GET',
        })
        alert("Inquiry Removed");
        navigate("/inqrs");
 */