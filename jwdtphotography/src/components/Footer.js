/**
 * 
 * @author - James Tatton
 * 
*/

// Importing all the required components and libraries
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InstaIcon from '../img/instaIcon.png';
import fbIcon from '../img/fbIcon.jpg';
import '../stylesheets/Footer.css'

// This creates the Footer component
function Footer() {
    // Return the footer styling it with bootstrap
    return (
        <div className='bg-dark bg-opacity-100 text-white fixed-bottom'>
            <footer>
                {/* Using a rows and columns to display the associated brands in an aesthetic way */}
                <Row id='FooterRow'>
                    <Col sm={2}>
                        <p> PMBA </p> <br />
                    </Col>
                    <Col sm={8}>
                        <p> &#169; JWDTPhotography &nbsp; &nbsp; &nbsp; 2023 </p>
                    </Col>
                </Row>
                <Row id='FooterRow'>
                    <Col sm={2}>
                        <p>Vittoria</p>
                    </Col>
                    {/* Displays the icons for the associated social medias, linking to them */}
                    <Col sm={8}>
                        <a href='https://www.instagram.com/jwdtphotography/'><img src={InstaIcon} alt='Instagram Icon' id='instaIcon' width='30' style={{marginTop:'0.5em'}}/></a>
                        <a href='https://www.facebook.com/JWDTphotography/?locale=en_GB'><img src={fbIcon} alt='Facebook Icon' id='fbIcon' width='45' style={{marginTop:'0.5em'}}/></a>
                    </Col>
                </Row>
                <Row id='FooterRow'>
                    <Col sm={2}>
                        <p>Uncrafted</p>
                    </Col>
                </Row>
            </footer>
        </div>
    )
}

export default Footer;