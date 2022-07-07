import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import happybirras from '../../images/happybirras2.png'
import gintoneria from '../../images/gintoneria2.png'

export default function Promotions() {
  return (
    <Carousel nextIcon={false} prevIcon={false} className="carousel-principal">
        <Carousel.Item interval={5000}>
            <img
                className="d-block w-100"
                src={happybirras}
                alt="Image One"
            />
            <Carousel.Caption>
                <div className="carousel-content">
                    <h3>Happy Hour</h3>
                    <h5>Stop 23hs</h5>
                    <p>2 Birras $500</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img
                className="d-block w-100"
                src={gintoneria}
                alt="Image One"
            />
            <Carousel.Caption>
                <div className="carousel-content">
                    <h3>Somos especialistas en Gin</h3>
                    <h5>Vení a probar nuevas experencias.</h5>
                    <p>@mandujano_nicolas</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}