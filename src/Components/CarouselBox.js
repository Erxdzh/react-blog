import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import СнимокImg from '../assets/Снимок экрана 2024-10-14 в 10.00.23.png';
import ССнимокImg from '../assets/Снимок экрана 2024-10-13 в 23.39.09.png';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                       className="d-block w-100"
                       src={ СнимокImg }
                       alt="Снимок"
                    />
                    <Carousel.Caption>
                        <h3>Приветствуем вас!</h3>
                        <p>На моем курсе</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                       className="d-block w-100"
                       src={ ССнимокImg }
                       alt="Снимок"
                    />
                    <Carousel.Caption>
                        <h3>Welcome !</h3>
                        <p>to my training course</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                       className="d-block w-100"
                       src={ СнимокImg }
                       alt="Снимок"
                    />
                    <Carousel.Caption>
                        <h3>Приветствуем вас! </h3>
                        <p>На моем курсе</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}