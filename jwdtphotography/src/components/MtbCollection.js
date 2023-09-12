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

// Creating the MtbCollection component
function MtbCollection(props) {

    // Setting the back image to the current page
    props.handleBackImage(window.location.pathname)

    // Setting the state variables
    const [mtbImages, setMtbImages] = useState([]);
    const [loading, setLoading] = useState(true);

    // Sets the headers for the fetch request using the client ID for the Imgur API
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Client-ID dd74fc11e14234f");

    // Sets the options for the fetch request
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        referrer: ""
    };

    // Fetches the images from the Imgur API, it then sets the mtbImages state variable to the result and sets the loading state to false
    useEffect(() => {
        fetch("https://api.imgur.com/3/album/UutamGT/images", requestOptions)
            .then(response => response.json())
            .then(result => setMtbImages(result))
            .then(setLoading(false))
            .catch(error => console.log('error', error));
    })

    // Maps through the mtbImages state and creates a card for each of the images in the album, it also sets the alt text to the description of the image
    const allMTBImages = mtbImages.data &&
        mtbImages.data.map((image, index) => {
            return (
                <Col key={index} xs={12} className='p-2'>
                    <Card>
                        <Card.Img variant='top' src={image.link} alt={image.description} />
                    </Card>
                </Col>
            )
        })

    return (

        <div className="MtbCollectionPage">
            {/* Displays a card, the button takes the user back to the portfolio page, if the images are loading then the user is informed, if they are loaded images are displayed */}
            <Card border='secondary' className='mx-auto shadow-lg' id='portfolioCard'>
                <Card.Body>
                    <LinkContainer to='/portfolio'><Button className='float-start' variant='dark'>Back to Portfolio</Button></LinkContainer> <br /> <br />
                    <Card.Title as='h1'> Mountain Biking Portfolio </Card.Title>
                    <Card.Subtitle style={{marginTop:'1em', marginBottom:'1em'}}> Below are some sample Images of my work </Card.Subtitle>
                    {loading && <p>Loading...</p>}
                    {!loading &&
                    <Row md={3}>
                        {allMTBImages}
                    </Row>}
                </Card.Body>
            </Card>
        </div>
    )
}

export default MtbCollection;