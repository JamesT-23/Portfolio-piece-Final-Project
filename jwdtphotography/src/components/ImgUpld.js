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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../stylesheets/HomePage.css'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Alert from 'react-bootstrap/Alert';

// Creating the ImgUpld component
function ImgUpld(props) {

    // Setting the back image to the current page
    props.handleBackImage(window.location.pathname)

    // Setting the state variables for the component and the navigate function
    const [file, setFile] = useState();
    const [albumCode, setAlbumCode] = useState();
    const [imageTitle, setImageTitle] = useState();
    const [imageDesc, setImageDesc] = useState();
    const navigate = useNavigate();

    // Setting the headers for the API call
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer aaeb851114fd018e3c92cdb1ccbb00859d252bb0");

    // The functions that will handle the changes to the state variables
    const onFileChange = (event) => { setFile(event.target.files[0]); }
    const handleAlbumCode = (event) => { setAlbumCode(event.target.value); }
    const handleImageTitle = (event) => { setImageTitle(event.target.value); }
    const handleImageDesc = (event) => { setImageDesc(event.target.value); }

    // The function that will handle the upload of the image when the submit button is clicked
    const clickedUpload = () => {

        // Setting the form data to be sent to the API
        var formdata = new FormData();
        formdata.append("image", file);
        formdata.append("title", imageTitle);
        formdata.append("description", imageDesc);
        formdata.append("album", albumCode);

        // Setting the options for the API call, the request method is set to POST, the headers are set to the preset headers, body set to the formdata, redirect set to follow and referrer set to blank
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
            referrer: ""
        };

        // This calls the API to upload the image selected by the user to imgur and adds it to the specified album. If the call is successful the user is alerted and redirected to the admin home page
        fetch("https://api.imgur.com/3/image", requestOptions)
            .then(response => response.json())
            .then(alert('Image Uploaded'))
            .then(navigate('/admnHm'))
            .catch(error => console.log('error', error));
    }


    return (
        <div className="UploadPage">
            {/* If the user is authenticated then the upload image page is displayede to the user in the standard format for the site */}
            {props.authenticated &&
                <Card id='homeCard' border='secondary' className='mx-auto shadow-lg'>
                    <Card.Title as='h1' style={{ textAlign: 'left', paddingLeft: '0.5em' }} > Upload New Images </Card.Title>
                    <Card.Body>
                        <Card.Subtitle> Images you upload must be less than 20MB  </Card.Subtitle>
                        <Form style={{ marginTop: '2em', marginBottom: '2em' }}>
                            <div className='centeredElement'>
                                <Row style={{ width: '50%', marginBottom: '2em' }}>
                                    {/* Allows the admin to select which album they're uploading to */}
                                    <Form.Group as={Row} id='RecpCheck'>
                                        <Form.Label style={{ paddingBottom: '1em' }}><strong> Which album are you uploading to? </strong></Form.Label>
                                        <Col>
                                            <Form.Check name='albumRadio' type='radio' value='UutamGT' label='Mountain Biking' onChange={handleAlbumCode} />
                                        </Col>
                                        <Col>
                                            <Form.Check name='albumRadio' type='radio' value='2DMFHr7' label='Wedding' onChange={handleAlbumCode} />
                                        </Col>
                                        <Col>
                                            <Form.Check name='albumRadio' type='radio' value='n5S3jNJ' label='Landscape' onChange={handleAlbumCode} />
                                        </Col>
                                    </Form.Group>
                                </Row>
                            </div>
                            <Row style={{ marginTop: '2em' }}>
                                {/* Allows the admin to select the image they want to upload and disables the button until a file is uploaded, the file size is less than 20MB and an album code has been selected */}
                                <Col>
                                    <Form.Group>
                                        <Form.Control required type='file' id='ImgUpld' onChange={onFileChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Button style={{ paddingLeft: '1em', paddingRight: '1em' }} variant='dark' size='lg' disabled={!file || file.size > 20971520 || !albumCode} onClick={() => clickedUpload()}>Upload</Button>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '2em' }}>
                                {/* Allows the admin to enter a title and description for the image they're uploading */}
                                <Col>
                                    <Form.Group>
                                        <FloatingLabel label='Title of Image'>
                                            <Form.Control required type='text' id='wedDate' onChange={handleImageTitle} placeholder='Enter a title for your image' />
                                        </FloatingLabel>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <FloatingLabel label='Description of Image'>
                                            <Form.Control required type='text' id='wedDate' onChange={handleImageDesc} placeholder='Enter a description for your image' />
                                        </FloatingLabel>
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* If the file size is greater than 20MB then the user is alerted to this */}
                            {file && file.size > 20971520 && <p className='sizeWarning'>File size must be less than 20MB</p>}
                        </Form>

                    </Card.Body>
                </Card>}
            {/* If the user is not authenticated then they are alerted to this and are not shown the upload image page */}
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

export default ImgUpld;