import React, { Component } from "react";
import { Navbar, NavbarBrand, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { RouterLink, RouterOutlet } from "../react-easyroute/";
import MainMenu from "../Components/MainMenu";

export default class MainLayout extends Component<any, any>{
    render() {
        return (
            <div className={'main-layout'}>
                <header>
                    <Navbar color={'light'} light expand={'md'}>
                        <RouterLink to={'/'}>
                            <NavbarBrand>React Easyroute</NavbarBrand>
                        </RouterLink>
                    </Navbar>
                </header>
                <Container fluid className={'mt-4'}>
                    <Row>
                        <MainMenu />
                        <Col md={9}>
                            <RouterOutlet />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}