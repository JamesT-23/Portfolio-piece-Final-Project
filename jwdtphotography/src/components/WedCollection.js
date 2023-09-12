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

// Creating the Wed Collection component
function WedCollection(props) {

    // Setting the back image to the current page
    props.handleBackImage(window.location.pathname)

    // Setting the state for the images and loading
    const [wedImages, setWedImages] = useState([]);
    const [loading, setLoading] = useState(true);

    // Setting the headers for the fetch request using the client ID for the Imgur API
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Client-ID dd74fc11e14234f");
    myHeaders.append("Accept", "application/json");


    // Setting the options for the fetch request
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        referrer: ""
    };

    // Fetches the images from the Imgur API, it then sets the wedImages state variable to the result and sets the loading state to false
    useEffect(() => {
        fetch("https://api.imgur.com/3/album/2DMFHr7/images", requestOptions)
            .then(response => response.json())
            .then(result => setWedImages(result))
            .then(setLoading(false))
            .catch(error => console.log('error', error));
    })

    // Maps through the wedImages state if it has been set and creates a card for each of the images in the album, it also sets the alt text to the description of the image
    const allWedImages = wedImages.data &&
        wedImages.data.map((image, index) => {
            return (
                <Col key={index} xs={12} className='p-2'>
                    <Card>
                        <Card.Img variant='top' src={image.link} alt={image.description} />
                    </Card>
                </Col>
            )
        })

    return (

        <div className="WedCollectionPage">
            {/* Creates a card with the images in the album and a back button to return to the portfolio page */}
            <Card border='secondary' className='mx-auto shadow-lg' id='portfolioCard'>
                <Card.Body>
                    <LinkContainer to='/portfolio'><Button className='float-start' variant='dark'>Back to Portfolio</Button></LinkContainer> <br /> <br />
                    <Card.Title as='h1'> Wedding Portfolio </Card.Title>
                    <Card.Subtitle style={{marginTop:'1em', marginBottom:'1em'}}> Below are some sample Images of my work </Card.Subtitle>
                    {/* If the images are still loading, display a loading message, if not display the images in rows of 3 */}
                    {loading && <p>Loading...</p>}
                    {!loading &&
                    <Row md={3}>
                        {allWedImages}
                    </Row>}
                </Card.Body>
            </Card>
        </div>
    )
}

export default WedCollection;