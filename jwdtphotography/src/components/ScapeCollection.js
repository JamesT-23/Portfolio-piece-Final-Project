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
import '../stylesheets/Portfolio.css'

// Creating the Landscape Collection component
function ScapeCollection(props) {

    // Setting the back image to the current page
    props.handleBackImage(window.location.pathname)

    // Setting the state for the scape images and loading
    const [scapeImages, setScapeImages] = useState([]);
    const [loading, setLoading] = useState(true);

    // Setting the headers for the fetch request using the client ID for the Imgur API
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Client-ID dd74fc11e14234f");

    // Setting the options for the fetch request
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        referrer: ""
    };

    // Fetches the images from the Imgur API, it then sets the scapeImages state variable to the result and sets the loading state to false
    useEffect(() => {
        fetch("https://api.imgur.com/3/album/n5S3jNJ/images", requestOptions)
            .then(response => response.json())
            .then(result => setScapeImages(result))
            .then(setLoading(false))
            .catch(error => console.log('error', error));
    })

    // Maps through the scapeImages state if it has been set and creates a card for each of the images in the album, it also sets the alt text to the description of the image
    const allScapeImages = scapeImages.data &&
        scapeImages.data.map((image, index) => {
            return (
                <Col key={index} xs={12} className='p-2'>
                    <Card>
                        <Card.Img variant='top' src={image.link} alt={image.description} />
                    </Card>
                </Col>
            )
        })

    return (

        <div className="ScapeCollectionPage">
            {/** Displays the card with a large shadow, puts the button in the top left corner of the screen, if it is loading then the user is informed of this, if it's not loading anymore then the images are displayed in rows of 2 */}
            <Card border='secondary' className='mx-auto shadow-lg' id='portfolioCard'>
                <Card.Body>
                    <LinkContainer to='/portfolio'><Button className='float-start' variant='dark'>Back to Portfolio</Button></LinkContainer> <br /> <br />
                    <Card.Title as='h1'> Landscape Portfolio </Card.Title>
                    <Card.Subtitle style={{marginTop:'1em', marginBottom:'1em'}}> Below are some sample Images of my work </Card.Subtitle>
                    {loading && <p>Loading...</p>}
                    {!loading &&
                    <Row md={2}>
                        {allScapeImages}
                    </Row>}
                </Card.Body>
            </Card>
        </div>
    )
}

export default ScapeCollection;