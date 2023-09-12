/**
 * 
 * @author - James Tatton
 * 
*/

// Importing all the required components and libraries
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import '../stylesheets/About.css'
import examplePhoto from '../img/scapeImg/AwardPhoto.jpg';
import examplePhoto2 from '../img/mtbImg/mtbPhoto.jpg';
import examplePhoto3 from '../img/wedImg/wedding.jpg';

// Creating the About component
function About(props) {

    // Setting the state to the pathname of the current page
    props.handleBackImage(window.location.pathname)

    return (
        <div className="AboutPage">
            {/* Displays a card that shows the about information for the photographer the card casts a large shadow */}
            <Card id='aboutCard' border='secondary' className='mx-auto shadow-lg'>
                <Card.Body style={{marginRight:'5%', marginLeft:'5%'}}>
                    <Card.Title as='h1' style={{textAlign:'center', marginBottom:'1em'}} className='aboutHeader'> My Career</Card.Title>
                    <Card.Text>
                        After qualifying from Moorfields Eye Hospital, I relocated to the North of England to work in Orthoptics, where I became a Clinical Manager in the NHS. I have always been practicing photography alongside
                        my career, initially nothing more than a hobby I started to move into the professional world of photography. At this present moment both my career and my business are equal partners.
                    </Card.Text>
                    <br /><hr />
                    <Card.Title as='h1' style={{textAlign:'center', marginBottom:'1em'}} className='aboutHeader'> My History in Photography </Card.Title>
                    <Card.Text> 
                        Through mountain biking met new people, one of whom asked me to do their wedding photography, enjoyed this experience and so got more clients and experience.
                        My first camera was bought for me at 12 by my late Dad, an old Pentax MG. I started to take photos of anything and everything, from landscapes to wildlife. After a hiatus from photography I was inspired
                        by a friend of mine and medical photographer. Going back into landscape photography, painstakingly dragging myself out of bed at 4am for those sunrise shots. When I was racing mountain bikes I was never pleased
                        with the photos I had taken, so after a serious injury in order to stay in touch with the mountain biking community I started to take photos of riders that I would buy personally. This led to me being asked to cover
                        events officially for race organisations and this side of the business continues to grow.
                    </Card.Text>
                    <br /><hr />
                    <Card.Title as='h1' style={{textAlign:'center', marginBottom:'1em'}} className='aboutHeader'> My Future </Card.Title>
                    <Card.Text> Talk about more weddings, the beginnings of portraits. The continuation of more official photography and the interest in continuing this
                        When discussing my future, in terms of mountain biking photography, I'm hoping to continue to support and help promote the future of the sport in the up and coming generation of riders. Officially covering
                        event photography allows me to continue to highlight the sport and the riders that make the sport what it is. Whilst not advertising the wedding photography I do, I am hoping to continue this side of the business through word of mouth,
                        and landscape photography will always be a hobby of mine, whether in the local area or on any holidays I take. 
                        In the future as I continue to develop my photography, these skills will feed into each other and will transfer into all of the disciplines of photography.
                    </Card.Text>
                    <br /><hr />
                    <Card.Title as='h1' style={{textAlign:'center', marginBottom:'1em'}} className='aboutHeader'> More of my Work </Card.Title>
                    <Card.Text> There is a portfolio of my work available on my site. If you would rather view an example of my photography for each of the fields I work in look below.</Card.Text>
                    {/* The carousel loops through one photo of each discipline of photography available, using alts to optimise for SEO with keywords the intervals are set so they move at a good pace, a caption has been added
                        for more keyword inclusion  */}
                    <Carousel fade>
                        <Carousel.Item interval={1200}>
                            <img
                                className="d-block w-50 mx-auto"
                                src={examplePhoto2}
                                alt="Mountain Biking Jump"
                            />
                            <Carousel.Caption>
                                <p>A nice example of the style of mountain biking phtoography I do.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval = {1200}>
                            <img
                                className="d-block w-50 mx-auto"
                                src={examplePhoto}
                                alt="Landscape Image"
                            />
                            <Carousel.Caption>
                                <p>Award Winning Landscape Image captured by myself</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1200}>
                            <img
                                className="d-block w-50 mx-auto"
                                src={examplePhoto3}
                                alt="Bride and Groom kissing at Wedding"
                            />
                            <Carousel.Caption>
                                <p>An example of the wedding photography that is available from myself.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <br />
                </Card.Body>

            </Card>
        </div>
    )
}

export default About;