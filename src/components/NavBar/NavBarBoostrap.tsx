import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarBoostrap() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">PymesYa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/contact">Contacto</Nav.Link>
            {/* <Nav.Link href="/empleos">EMPLEOS</Nav.Link> */}
            <Nav.Link href="/servicios">SERVICIOS</Nav.Link>
            <Nav.Link href="/histories">HISTORIAS</Nav.Link>
            <Nav.Link href="/finanzas">FINANZAS</Nav.Link>         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBoostrap;
