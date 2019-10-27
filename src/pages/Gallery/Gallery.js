import React from 'react';
import './gallery-grid.css';
import gallery from '../../gallery';
import { Card, Container, Row } from 'react-bootstrap';


class Gallery extends React.Component {
  render() {
    return (
    <div class="container gallery-container">
        <h1>CougarCS Gallery</h1>
        <div class="gallery-submenu">
            <span>A</span>
            <span>B</span>
            <span>C</span>
            <span>D</span>
            <span>E</span>
            <span>F</span>
            <span>G</span>
            <span>H</span>
            <span>I</span>
        </div>
        <div className='events-grid'>
            <div className='event-card'>
                <img src='https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200' />
                <h3 className='event-name'>Event one</h3>
                <div className='event-meta'>   
                    <span>Oct 16, 2019</span>
                </div>
                <div className='event-exerpt'>
                    <p>
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It 
                    </p>
                </div>
            </div>
        </div>

        <div class='tz-gallery'>
            <div class="row">

                {/* <div class="col-sm-6 col-md-4">
                    <Container
                        fluid
                        className='galleryCard'
                        style={{ marginBottom: '3em' }}
                        >
                        <Row>
                            <div className='galleryImages'>
                            {gallery.map((gallery) => (
                                <Card key={gallery.id}>
                                <Card.Link href={gallery.image}>Download Here</Card.Link>
                                <Card.Img variant='top' src={gallery.image} />
                                </Card>
                            ))}
                            </div>
                        </Row>
                    </Container>
                </div> */}
            </div>
        </div>

    </div>
    
    );
  }
}
export default Gallery;
