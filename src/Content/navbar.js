import {Container} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {Button , Nav} from 'react-bootstrap'
import './../style/main.css'

function Navigation() {
    return ( 
        <>
      <Navbar sticky="top" className='navbar' bg="light"  expand="lg">
        <Container >
          <Navbar.Brand style={{}} href="#home">
            <img
              alt=""
              src="https://cdn.dribbble.com/users/4538854/screenshots/9069866/elegant-real-estate-logo_4x.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            ESTATERY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          

          <Navbar.Collapse className="justify-content-end" id='basic-navbar-nav"'>
            <Nav className="me-auto">
                <Nav.Link className='navigationBar' href="#Rent">Rent</Nav.Link>
                <Nav.Link className='navigationBar' href="#Buy">Buy</Nav.Link>
                <Nav.Link className='navigationBar' href="#Sell">Sell</Nav.Link>
                <Nav.Link className='navigationBar' href="#Manage Property">Manage Property</Nav.Link>
                <Nav.Link className='navigationBar' href="#Resource">Resource</Nav.Link>
            </Nav>
            <Navbar.Text>
                <Button variant="primary">Login</Button>{' '}
                <Button variant="primary">Sign Up</Button>
            </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
     );
}

export default Navigation;