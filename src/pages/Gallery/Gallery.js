import React from 'react';
import './gallery-grid.css';
import gallery from '../../gallery';
import { Card, Container, Row } from 'react-bootstrap';


class Gallery extends React.Component {
  render() {
    return (
    <div class="container gallery-container">
        <h1>CougarCS Gallery</h1>
        <p class="page-description text-center">[Event Name]</p>

        <div class='tz-gallery'>
            <div class="row">
                <div class="col-sm-6 col-md-4">
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
                </div>
            </div>
        </div>

    </div>
    
    );
  }
}
export default Gallery;
