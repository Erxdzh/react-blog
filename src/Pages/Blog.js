import React, { Component } from 'react';
import { Media, Container, Col, Row, ListGroup, Card } from "react-bootstrap"

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <media className="m-8">
                            <img
                              width={150}
                              height={150}
                              className="mr-3"
                              src="https://img-b.udemycdn.com/course/480x270/405818_aa3f_3.jpg"

                            />
                            <media-body>
                                <h5>Blog post</h5>
                                <p>
                                    Расскажем о нашем блоге, чем мы занимаемся? Почему наш блог такой крутой?           
                                       Мы занимаемся программированием и разными проектами, наш блог очень классный ведь мы будем учить вас!
                                </p>
                            </media-body>
                        </media>
                        <media className="m-5">
                            <img
                              width={150}
                              height={150}
                              className="mr-3"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Zt4bcp8-dpyEEwiSlUW5e8G15ze362ijyw&s"

                            />
                            <media-body>
                                <h5>Blog post</h5>
                                <p>
                                    Также у нас имеется бесплатные курсы!
                                </p>
                            </media-body>
                        </media>
                        <media className="m-5">
                            <img
                              width={150}
                              height={150}
                              className="mr-3"
                              src="https://ih1.redbubble.net/image.2088244313.1060/ur,pin_large_front,square,600x600.u4.jpg"

                            />
                            <media-body>
                                <h5>Blog post</h5>
                                <p>
                                    Все самое классное и познавательное у нас!
                                </p>
                            </media-body>
                        </media>
                    </Col>
                    <Col md="3">
                    <h5 className="text-center mt-5">Categories</h5>
                    <Card>
                        <ListGroup variant="flush">
                           <ListGroup.Item>Html/Css</ListGroup.Item>
                           <ListGroup.Item>JavaScript</ListGroup.Item>
                           <ListGroup.Item>Python</ListGroup.Item>
                           <ListGroup.Item>Java</ListGroup.Item>
                           <ListGroup.Item>C++</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card className="mt-3 bg-light">
                        <Card.Body>
                            <Card.Title>Side widget</Card.Title>
                            <Card.Text>
                            Если вам все понравилось оставьте свою почту и напишите какой курс хотите взять в разделе Contacts и мы свяжемся с вами!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}