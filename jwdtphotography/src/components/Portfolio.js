/**
 * 
 * @author - James Tatton
 * 
*/

// Importing all the required components and libraries
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../stylesheets/Portfolio.css'
import MTBPhoto from '../img/mtbImg/mtbPhoto.jpg';
import WeddingPhoto from '../img/wedImg/wedding.jpg';
import LandscapePhoto from '../img/scapeImg/CoastPhoto.jpg';

// Creating the Portfolio component
function Portfolio(props) {

    // Setting the back image to the current page
    props.handleBackImage(window.location.pathname)

    return (
        <div className="PortfolioPage">
            {/* Displays a card in the with a large shadow */}
            <Card border='secondary' className='mx-auto shadow-lg' id='portfolioCard'>
                <Card.Body>
                    <Card.Title as='h1'> My Portfolio </Card.Title>
                    <Row>
                        {/* Displays a clickable card for each of the three categories of photography that navigate to the portfolio page for each of the collections */}
                        <Col>
                            <LinkContainer to='/mtbCollection'>
                                <Card border = 'light' className='mx-auto shadow-lg' id='portfolioCard'>
                                    <Card.Img variant='top' src={MTBPhoto} alt='Mountain Biker jumping' />
                                    <Card.Body>
                                        <Card.Title as='h2'> Mountain Biking </Card.Title>
                                    </Card.Body>
                                </Card>
                            </LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to='/weddingCollection'>
                                <Card border = 'light' className='mx-auto shadow-lg' id='portfolioCard'>
                                    <Card.Img variant='top' src={WeddingPhoto} alt='Bride and Groom at Wedding' />
                                    <Card.Body>
                                        <Card.Title as='h2'> Wedding </Card.Title>
                                    </Card.Body>
                                </Card>
                            </LinkContainer>
                        </Col>
                        <Col>
                            <LinkContainer to='/landscapeCollection'>
                                <Card border = 'light' className='mx-auto shadow-lg' id='portfolioCard'>
                                    <Card.Img variant='top' src={LandscapePhoto} alt='Photo of a mountain in the fog' />
                                    <Card.Body>
                                        <Card.Title as='h2'> Landscape </Card.Title>
                                    </Card.Body>
                                </Card>
                            </LinkContainer>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Portfolio;