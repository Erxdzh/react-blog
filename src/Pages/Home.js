import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, CardGroup, Card, Button} from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
            <Container>
               <h2 className="text-center m-4">Our team</h2>
               <CardGroup className="m-4">
                <Card border="success" text="primary">
                    <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                            Здравствуйте наша команда отличная и хорошая.
                            Также мы очень дружелюбные!
                        </Card.Text>
                        <Button variant="primary" >About team</Button>
                    </Card.Body>
                </Card>
                <Card>

                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                            Также мы очень целеустремленные и делаем все на отлично!
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                    </Card.Body>
                    <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                </Card>
                <Card>
                    <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                            Команда мечты!
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                    </Card.Body>
                </Card>
               </CardGroup>
            </Container>
            </>
        );
    }
}