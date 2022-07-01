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
                    <h1 style={{ color: '#FFFFFF' }}>Happy Hour</h1>
                    <h3 style={{ color: '#B82E00'}}>Stop 23hs</h3>
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
                    <h1 style={{ color: '#FFFFFF' }}>Somos especialistas en Gin</h1>
                    <h3 style={{ color: '#B82E00'}}>Vení a probar nuevas experencias.</h3>
                    <p>@mandujano_nicolas</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}
