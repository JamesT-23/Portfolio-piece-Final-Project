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

// This creates the AdminHomePage component
function AdminHomePage(props) {

    // Sets the state for the background image to use based on the path name
    props.handleBackImage(window.location.pathname)

    return (
        <div className="AdminHomePage">
            {/* If the user is authenticated then the page will display the following section */}
            {props.authenticated &&
            <div>
            {/* This is the card that contains all the information for the page */}
            <Card id='homeCard' border='secondary' className='mx-auto shadow-lg'>
                <Card.Body>
                    {/* Using a grid to display the information in a more aesthetic way */}
                    <div id='admnHmRow1'>
                        <Row >
                            <Col>
                                <Card.Title as='h1' className='homeHeader float-start'>Your Inquiries</Card.Title>
                                <Card.Text style={{textAlign:'left'}} className='float-start'>
                                    Hello! To review any inquiries that you have recieved please click below to be taken to the inquiries page!
                                </Card.Text>
                            </Col>
                            <Col>
                                <Card.Title as='h1' className='homeHeader float-end'>Upload New Photos</Card.Title>
                                <Card.Text className = 'float-end' style={{textAlign:'right'}}>Upload new photos to the site, either in a current collection or creating a new collection.</Card.Text>
                            </Col>
                        </Row>
                        <Row id='buttonRow'>
                            <Col>
                                <LinkContainer to='/inqrs'><Button className='float-start' variant='dark'>Your Inquiries</Button></LinkContainer>
                            </Col>
                            <Col>
                                <LinkContainer to='/ImgUpld'><Button className='float-end' variant='dark'>Upload</Button></LinkContainer>
                            </Col>
                        </Row>
                    </div>
                    <div id='admnHmRow2'>
                        <Row>
                            <Col>
                                <Card.Title as='h1' className='homeHeader float-start'>Manage your Variable Message</Card.Title>
                                <Card.Text style={{textAlign:'left'}} className='float-start'>Manage the variable message that appears on the home page for your visitors to see.</Card.Text>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row id='buttonRow'>
                            <Col>
                                <LinkContainer to='/varCt'><Button className = 'float-start' variant='dark'>Change</Button></LinkContainer>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
            </div>}
            {/* If the user is not authenticated then the page will display an alert that will inform them that they must be logged in */}
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

export default AdminHomePage;