import React, { useEffect } from 'react'
import { Navbar, Container, Row, Col } from 'reactstrap'
import { RouterLink, RouterOutlet } from '../react-easyroute/'
import MainMenu from '../Components/MainMenu'
import logo from '../assets/logo.png'
const pkgInfo = require('../../../package.json')

const MainLayout = (): React.ReactElement => {
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://buttons.github.io/buttons.js'
    script.defer = true
    document.body.append(script)
  })
  return (
    <div className={'main-layout'}>
      <header>
        <Navbar color={'light'} light expand={'md'} style={{ justifyContent: 'space-between' }}>
          <RouterLink className={'top-header'} to={'/'}>
            <img className={'logo'} src={logo} alt={'React Easyroute logo'} />
          </RouterLink>
          <div className={'github-button-block'}>
            <span className={'version-info'}>v{pkgInfo.version}</span>
            <a
              className="github-button"
              href="https://github.com/lyohaplotinka/react-easyroute"
              data-size="large"
              data-show-count="true"
              aria-label="Star lyohaplotinka/react-easyroute on GitHub"
            >
              GitHub
            </a>
          </div>
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
  )
}

export default MainLayout
