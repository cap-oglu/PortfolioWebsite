import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import seagullImg from '../assets/seagull_logo.png';


//kuş resmine bastığında animasyon felan olacak
//https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91 ps5 react için

class NavBar extends React.Component {
    render() {
        
    return (
        <>  
            <Navbar   expand="sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} variant="light">
                <Container >
                    <Navbar.Brand href="/PortfolioWebsite">ME</Navbar.Brand>
                    <Navbar.Toggle
                        
                        aria-controls="responsive-navbar-nav"
                        
                    />
                    <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                   
                        <Nav.Link href="/PortfolioWebsite">Home</Nav.Link>
                        
                        <Nav.Link href="/PortfolioWebsite/#/about">About Me</Nav.Link>
                        <Nav.Link href="/PortfolioWebsite/#/stats">Stats</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                            
                            <a href="/PortfolioWebsite/#/art">
                            <img src={seagullImg} alt="Profile picture" class=" rounded-circle" width={50} height={50}  />
                            </a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                    
                    
                </Container>
            </Navbar>
            <hr />
        </>
    );
}
}

export default NavBar;

