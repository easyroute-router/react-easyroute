import React, { Component } from "react";
import {Col, ListGroup, ListGroupItem} from "reactstrap";
import {RouterLink} from "../react-easyroute";

export default class MainMenu extends Component<any, any> {
    render() {
        return (
            <Col md={3}>
                <ListGroup>
                    <ListGroupItem action tag={'div'}>
                        <RouterLink to={'/page/installation'}>Installation</RouterLink>
                    </ListGroupItem>
                    <ListGroupItem action>
                        <RouterLink to={'/page/getting-started'}>Getting started</RouterLink>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup className={'mt-3'}>
                    <ListGroupItem action>
                        <RouterLink to={'/page/dynamic-matching'}>
                            Dynamic route matching
                        </RouterLink>
                    </ListGroupItem>
                    <ListGroupItem action>
                        <RouterLink to={'/page/current-route-info'}>
                            Current route info
                        </RouterLink>
                    </ListGroupItem>
                    <ListGroupItem action>
                        <RouterLink to={'/page/router-links'}>
                            Router links
                        </RouterLink>
                    </ListGroupItem>
                    <ListGroupItem action>
                        <RouterLink to={'/page/programmatic-navigation'}>
                            Programmatic navigation
                        </RouterLink>
                    </ListGroupItem>
                    <ListGroupItem action>
                        <RouterLink to={'/page/nested-routes'}>
                            Nested routes
                        </RouterLink>
                    </ListGroupItem>
                    <ListGroupItem action>
                        <RouterLink to={'/page/navigation-guards'}>
                            Navigation guards
                        </RouterLink>
                    </ListGroupItem>
                    <ListGroupItem action>
                        <RouterLink to={'/page/css-transitions'}>
                            CSS transitions
                        </RouterLink>
                    </ListGroupItem>
                    <ListGroupItem action>
                        <RouterLink to={'/page/silent-mode'}>
                            Silent mode
                        </RouterLink>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup className={'mt-3'}>
                    <ListGroupItem action>
                        <RouterLink to={'/playground/demo/params?text=query'}>
                            Playground
                        </RouterLink>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        )
    }
}