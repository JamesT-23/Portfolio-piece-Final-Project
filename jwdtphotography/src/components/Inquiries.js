/**
 * 
 * @author - James Tatton
 * 
*/

// Importing all the required components and libraries
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../stylesheets/HomePage.css'
import Alert from 'react-bootstrap/Alert';

// Creating the Inquiries component
function Inquiries(props) {

    // Setting the back image to the current page
    props.handleBackImage(window.location.pathname)

    return (
        <div className="InquiriesPage">
            {/* If the user is authenticated, display the following content */}
            {props.authenticated &&
            <div>
            <Card id='homeCard' border='secondary' className='mx-auto shadow-lg'>
                <Card.Title as='h1' style={{ textAlign: 'left', paddingLeft: '0.5em' }} > Inquiries </Card.Title>
                <Card.Body>
                    {/* Displaying the two buttons that link to the two pages for the different types of inquiries */}
                    <Row className = 'inqButtons'>
                        <Col>
                            <LinkContainer to='/mtbinqrs'><Button variant='dark'>Mountain Biking Inquiries</Button></LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to='/wedinqrs'><Button variant='dark'>Wedding Inquiries</Button></LinkContainer>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
            </div>}
            {/* If the user is not authenticated, display the following alert */}
            {!props.authenticated &&
            <Alert variant="primary">
                <Alert.Heading>Not logged in!</Alert.Heading>
                <p>
                    Please log in to view this page.
                </p>
            </Alert>}
        </div>

    )
}

export default Inquiries;