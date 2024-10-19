import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col} from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Container>
              <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                <Row>
                     <Col sm={3}>
                         <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                               <Nav.Link eventKey="first" >Курс дизайна</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                               <Nav.Link eventKey="second" > Курс разработки игр</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                               <Nav.Link eventKey="third" >Курс программирования</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                               <Nav.Link eventKey="four" >Фрейворки</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                               <Nav.Link eventKey="five" >Библиотека</Nav.Link>
                            </Nav.Item>
                         </Nav>
                     </Col>
                     <Col sm={9}>
                       <Tab.Content className="mt-3">
                           <Tab.Pane eventKey="first">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7irgZ8_euN75gjm-tq-jZGRURgtXp6yKuOw&s" />
                              <p>
                                Nice design here.
                              </p>
                           </Tab.Pane>
                           <Tab.Pane eventKey="second">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqSi4VdU5E11PN3VSkqHst-OdTWL0LSHM2w&s" />
                              <p>
                                Freindly Team here.
                              </p>
                           </Tab.Pane>
                           <Tab.Pane eventKey="third">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbjkcdVGfkNNFEOW9L5nbg_3nLBSgg_nhPw&s" />
                              <p>
                                 Programming here.
                              </p>
                           </Tab.Pane>
                           <Tab.Pane eventKey="four">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFrUN_QEDiVmqybNLlceT5gQk-VkjVyBMng&s" />
                              <p>
                                Cool frameworks here.
                              </p>
                           </Tab.Pane>
                           <Tab.Pane eventKey="five">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5DOMq9uiND7FiW8Or7XYnBNDUfMbM2o9IQ&s" />
                              <p>
                                 libraries here.
                              </p>
                           </Tab.Pane>
                       </Tab.Content>
                     </Col>
                </Row>
              </Tab.Container>
            </Container>
        )
    }
}