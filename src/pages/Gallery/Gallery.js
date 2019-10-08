import React from 'react';
import './gallery-grid.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

class Gallery extends React.Component {
  render() {
    return (
    <div class="container gallery-container">
        <h1>CougarCS Gallery</h1>
        <p class="page-description text-center">[Event Name]</p>

        <div class='tz-gallery'>
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="././assets/gallery/1.jpg">
                        <img src="./1.jpg" alt='1'></img>
                    </a>
                </div>
            </div>
        </div>

    </div>
    
    );
  }
}
export default Gallery;
