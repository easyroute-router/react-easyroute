import React, { Component } from "react";
import { Navbar, NavbarBrand, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { RouterLink, RouterOutlet } from "../react-easyroute/";

export default class MainLayout extends Component<any, any>{
    render() {
        return (
            <div className={'main-layout'}>
                <header>
                    <Navbar color={'light'} light expand={'md'}>
                        <NavbarBrand>React Easyroute</NavbarBrand>
                    </Navbar>
                </header>
                <Container fluid className={'mt-4'}>
                    <Row>
                        <Col md={3}>
                            <ListGroup>
                                <ListGroupItem action>
                                    <RouterLink to={'test'}>Installation</RouterLink>
                                </ListGroupItem>
                                <ListGroupItem action>Getting started</ListGroupItem>
                            </ListGroup>
                            <ListGroup className={'mt-3'}>
                                <ListGroupItem action>Dynamic route matching</ListGroupItem>
                                <ListGroupItem action>Current route info</ListGroupItem>
                                <ListGroupItem action>Router links</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={9}>
                            <RouterOutlet />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}