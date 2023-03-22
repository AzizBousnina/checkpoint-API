import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Navigation =() => {
  return (
    
           <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src="https://gomycodelearn.blob.core.windows.net/assets/images/general/gomycodeLogo.svg" alt="Go My Code" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Users">Users</Nav.Link>
            <Nav.Link href="/ContactUs">ContactUs</Nav.Link>
            <Nav.Link href="/Admin">Admin</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    
  )
}

export default Navigation