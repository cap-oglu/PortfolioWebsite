import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Col from 'react-bootstrap/Col';




class NavBar extends React.Component {
    render() {
        const { toggle } = this.props;
    return (
        <>
            <Navbar   expand="sm" style={{ backgroundColor: 'rgba(200, 200, 200, 0.1)' }} variant="light">
                <Container >
                    <Navbar.Brand href="/">ME</Navbar.Brand>
                    <Navbar.Toggle
                        
                        aria-controls="responsive-navbar-nav"
                        
                    />
                    <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                   
                        <Nav.Link href="/">Home</Nav.Link>
                        
                        <Nav.Link href="/about">About Me</Nav.Link>
                        <Nav.Link href="/stats">Stats</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                            <a href="#login">Sairane Martı</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                    
                    
                </Container>
            </Navbar>
        </>
    );
}
}

export default NavBar;