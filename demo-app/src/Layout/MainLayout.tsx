import React from "react";
import { Navbar, Container, Row, Col } from 'reactstrap'
import { RouterLink, RouterOutlet } from "../react-easyroute/";
import MainMenu from "../Components/MainMenu";
import logo from '../assets/logo.png'

const MainLayout = () => {
    return <div className={'main-layout'}>
                <header>
                    <Navbar color={'light'} light expand={'md'}>
                        <RouterLink to={'/'}>
                            <img style={{ width: '25rem', padding: '10px 0' }}
                                 className={'logo'} src={logo}
                                 alt={'React Easyroute logo'}
                            />
                        </RouterLink>
                    </Navbar>
                </header>
                <Container fluid className={'mt-4'}>
                    <Row>
                        <MainMenu />
                        <Col md={9} style={{ overflow: 'hidden' }}>
                            <RouterOutlet transition={'fade'} forceRemount={true} />
                        </Col>
                    </Row>
                </Container>
            </div>
}

export default MainLayout

// export default class MainLayout extends Component<any, any>{
//     render() {
//         return (

//         );
//     }
// }