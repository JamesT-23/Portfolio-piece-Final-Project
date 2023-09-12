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
import { InstagramEmbed } from 'react-social-media-embed';
import '../stylesheets/HomePage.css'

// Creates the home page component
function HomePage(props) {

    // Sets the state for the background image to use based on the path name
    props.handleBackImage(window.location.pathname)
    console.log(window.location.pathname)

    // Sets the state for the message to be displayed on the home page and the loading state to true
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true);

    // When the component is rendered, a fetch request is sent to the API to retrieve the varaible message to be displayed on the home page and sets the loading state to false
    useEffect(() => {
        fetch("http://unn-w20021752.newnumyspace.co.uk/jwdtphotography/API/dismessage", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((jsonResponse) => {
                setMessage(jsonResponse[0].message);
                setLoading(false);
            })
    }, [])

    return (
        <div className="HomePage">
            {/* Displays the page on a card in rows and columns to have an aesthetic design */}
            <Card id='homeCard' border='secondary' className='mx-auto shadow-lg'>
                <Card.Body>
                    <div id='homeRow1'>
                        <Row>
                            <Col style={{ marginRight: '2em' }}>
                                <Card.Title as='h1' className='homeHeader'>Who Am I?</Card.Title>
                                <Card.Text>
                                    Hi, I'm Jerry and I am a full time Clinical Manager within the NHS. I also have a business where I practice my hobby of mountain biking to hone my skills as a photographer.
                                    I primarily do mountain biking photography, but also have an expanding wedding business with a growing portfolio and enjoy landscape.
                                </Card.Text>
                            </Col>
                            <Col style={{ marginLeft: '2em' }}>
                                <Card.Title as='h1' className='homeHeader'>Curious About the Work I Do?</Card.Title>
                                <Card.Text>
                                    I am an award winning landscape photographer and have been featured on the BBC for my landscape images, expanding into mountain biking photography where my brand has gained recognition
                                    and a following on social media. Most recently I have expanded into wedding photography and have had great success.
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row id='buttonRow'>
                            <Col>
                                <LinkContainer to='/about'><Button variant='dark'>About Me</Button></LinkContainer>
                            </Col>
                            <Col style={{ marginLeft: '4em' }}>
                                <LinkContainer to='/portfolio'><Button variant='dark'>Portfolio</Button></LinkContainer>
                            </Col>
                        </Row>
                    </div>
                    <div id='homeRow2'>
                        <Row>
                            <Col style={{ marginRight: '2em' }}>
                                <Card.Title as='h1' className='homeHeader'>Background in Mountain Biking</Card.Title>
                                <Card.Text>
                                    Originally a mountain bike racer myself and building trails, giving technical knowledge, injuries led me down the path of photography where connections in the community allowed several oppurtunities to photograph events.
                                    Success in these have led to myself being the official photographer for a number of events and organisations.
                                    <br /><br /> If you would like to make an inquiry about myself covering your event click the button below.
                                </Card.Text>
                            </Col>
                            <Col style={{ marginLeft: '2em' }}>
                                <Card.Title as='h1' className='homeHeader'>Background in Weddings</Card.Title>
                                <Card.Text>
                                    After a friend asked me to capture their wedding I was hooked. I have since been able to expand my portfolio and have had great success in the field, recently working alongside an additional photographer to help deliver the best experience for yourselves. I am competitively priced and offer multiple packages based on your needs for your special day.
                                    <br /> <br />If you would like to make an inquiry click the button below.
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row id='buttonRow'>
                            <Col>
                                <LinkContainer to='/mountainbiking'><Button variant='dark'>Mountain Biking</Button></LinkContainer>
                            </Col>
                            <Col style={{ marginLeft: '4em' }}>
                                <LinkContainer to='/wedding'><Button variant='dark'>Weddings</Button></LinkContainer>
                            </Col>
                        </Row>
                    </div>
                    {/* If the page is loading information this is displayed to the user */}
                    {loading && <p>Loading...</p>}
                    {/* If the page is not loading then the variable message that has been read in is loaded for the user */}
                    {!loading &&
                        <div className='PhotographerMessage'>
                            <Card.Title as='h1' className='homeHeader'>Message From The Photographer</Card.Title>
                            <Card.Text>
                                {message}
                            </Card.Text>
                        </div>
                    }
                    {/* Displays the instagram instagram post chosen by the client */}
                    <div id='instaEmbed'>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <InstagramEmbed url="https://www.instagram.com/p/CqjD8x9MQmI/" width="50%" />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HomePage;