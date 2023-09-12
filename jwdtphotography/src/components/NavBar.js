/**
 * 
 * @author - James Tatton
 * 
*/

// Importing all the required components and libraries
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../img/logo.png';
import '../stylesheets/NavBar.css'

// Creating the NavBar component
function NavBar(props) {

    // Displays a link to the login page
    function LogInLink() {
        return (
            <LinkContainer to="/login" className='ms-auto'><Nav.Link>Log In</Nav.Link></LinkContainer>
        )
    }

    // Displays a dropdown menu with links to the account page, inquiries page and log out
    function AccountNav() {
        return (
            <NavDropdown className='ms-auto' title="Account">
                <LinkContainer to='/admnHm'><NavDropdown.Item>My Account</NavDropdown.Item></LinkContainer>
                <LinkContainer to='/inqrs'><NavDropdown.Item>Inquiries</NavDropdown.Item></LinkContainer>
                <LinkContainer to='/lgOut'><NavDropdown.Item>Log Out</NavDropdown.Item></LinkContainer>
            </NavDropdown>
        )
    }

    return (
        <div>
            {/* If the back image is the portfolio page, display the following content */}
            {props.backImage === '/jwdtphotography/app/portfolio' &&
                <div className='portfolioImage'>
                    <div className='NavText'>
                        <Navbar variant="dark" expand="lg">
                            <Container>
                                <LinkContainer to='/'>
                                    <Navbar.Brand>
                                        <img src={logo} alt='JWDTPhotography Logo' width='200' height='75' />
                                    </Navbar.Brand>
                                </LinkContainer>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="container-fluid">
                                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                                        <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                                        <LinkContainer to="/portfolio"><Nav.Link>Portfolio</Nav.Link></LinkContainer>
                                        <LinkContainer to="/mountainbiking"><Nav.Link>Mountain Biking</Nav.Link></LinkContainer>
                                        <LinkContainer to="/wedding"><Nav.Link>Wedding</Nav.Link></LinkContainer>
                                        {props.authenticated ? AccountNav() : LogInLink()}
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            }
            {/* If the back image is the any of the admin pages or the log in page, display the following content */}
            {(props.backImage === '/jwdtphotography/app/admnHm' || props.backImage === '/jwdtphotography/app/inqrs' || props.backImage === '/jwdtphotography/app/login' || props.backImage === '/jwdtphotography/app/mtbinqrs' || props.backImage === '/jwdtphotography/app/wedinqrs' || props.backImage === '/jwdtphotography/app/varCt' || props.backImage === '/jwdtphotography/app/ImgUpld') &&
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Container>
                            <LinkContainer to='/'>
                                <Navbar.Brand>
                                    <img src={logo} alt='JWDTPhotography Logo' width='200' height='75' />
                                </Navbar.Brand>
                            </LinkContainer>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="container-fluid">
                                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                                    <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                                    <LinkContainer to="/portfolio"><Nav.Link>Portfolio</Nav.Link></LinkContainer>
                                    <LinkContainer to="/mountainbiking"><Nav.Link>Mountain Biking</Nav.Link></LinkContainer>
                                    <LinkContainer to="/wedding"><Nav.Link>Wedding</Nav.Link></LinkContainer>
                                    {props.authenticated ? AccountNav() : LogInLink()}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            }
            {/** If the back image is the home page or the landscape collection page display the following content */}
            {(props.backImage === '/jwdtphotography/app/' || props.backImage === '/jwdtphotography/app/landscapeCollection') &&
                <div className='landscapeImage'>
                    <div className='NavText'>
                        <Navbar variant="dark" expand="lg">
                            <Container>
                                <LinkContainer to='/'>
                                    <Navbar.Brand>
                                        <img src={logo} alt='JWDTPhotography Logo' width='200' height='75' />
                                    </Navbar.Brand>
                                </LinkContainer>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="container-fluid">
                                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                                        <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                                        <LinkContainer to="/portfolio"><Nav.Link>Portfolio</Nav.Link></LinkContainer>
                                        <LinkContainer to="/mountainbiking"><Nav.Link>Mountain Biking</Nav.Link></LinkContainer>
                                        <LinkContainer to="/wedding"><Nav.Link>Wedding</Nav.Link></LinkContainer>
                                        {props.authenticated ? AccountNav() : LogInLink()}
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            }
            {/** If the back image is the mountain biking page or the mtb collection page display the following content */}
            {(props.backImage === '/jwdtphotography/app/mountainbiking' || props.backImage === '/jwdtphotography/app/mtbCollection') &&
                <div className='MountainBiking'>
                    <div className='NavText'>
                        <Navbar variant="dark" expand="lg">
                            <Container>
                                <LinkContainer to='/'>
                                    <Navbar.Brand>
                                        <img src={logo} alt='JWDTPhotography Logo' width='200' height='75' />
                                    </Navbar.Brand>
                                </LinkContainer>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="container-fluid">
                                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                                        <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                                        <LinkContainer to="/portfolio"><Nav.Link>Portfolio</Nav.Link></LinkContainer>
                                        <LinkContainer to="/mountainbiking"><Nav.Link>Mountain Biking</Nav.Link></LinkContainer>
                                        <LinkContainer to="/wedding"><Nav.Link>Wedding</Nav.Link></LinkContainer>
                                        {props.authenticated ? AccountNav() : LogInLink()}
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            }
            {/** If the back image is the wedding page or the wedding collection page display the following content */}
            {(props.backImage === '/jwdtphotography/app/wedding' || props.backImage === '/jwdtphotography/app/weddingCollection') &&
                <div className='Wedding'>
                    <Navbar variant="dark" expand="lg">
                        <Container>
                            <LinkContainer to='/'>
                                <Navbar.Brand>
                                    <img src={logo} alt='JWDTPhotography Logo' width='200' height='75' />
                                </Navbar.Brand>
                            </LinkContainer>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="container-fluid">
                                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                                    <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                                    <LinkContainer to="/portfolio"><Nav.Link>Portfolio</Nav.Link></LinkContainer>
                                    <LinkContainer to="/mountainbiking"><Nav.Link>Mountain Biking</Nav.Link></LinkContainer>
                                    <LinkContainer to="/wedding"><Nav.Link>Wedding</Nav.Link></LinkContainer>
                                    {props.authenticated ? AccountNav() : LogInLink()}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            }
            {/** If the back image is the about page display the following content */}
            {props.backImage === '/jwdtphotography/app/about' &&
                <div className='AboutNav'>
                    <Navbar variant="dark" expand="lg">
                        <Container>
                            <LinkContainer to='/'>
                                <Navbar.Brand>
                                    <img src={logo} alt='JWDTPhotography Logo' width='200' height='75' />
                                </Navbar.Brand>
                            </LinkContainer>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="container-fluid">
                                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                                    <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
                                    <LinkContainer to="/portfolio"><Nav.Link>Portfolio</Nav.Link></LinkContainer>
                                    <LinkContainer to="/mountainbiking"><Nav.Link>Mountain Biking</Nav.Link></LinkContainer>
                                    <LinkContainer to="/wedding"><Nav.Link>Wedding</Nav.Link></LinkContainer>
                                    {props.authenticated ? AccountNav() : LogInLink()}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            }
        </div>
    )
}

export default NavBar;