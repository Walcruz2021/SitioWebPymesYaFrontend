import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; // Importar Link desde React Router



function NavBarBoostrap(prop) {
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">PymesYa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
            {/* <Nav.Link href="/empleos">EMPLEOS</Nav.Link> */}
            <Nav.Link as={Link} to="/servicios">SERVICIOS</Nav.Link>
            <Nav.Link as={Link}  to="/histories">HISTORIAS</Nav.Link>
            <NavDropdown title="FINANZAS" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/finanzas/bolsaValores">Bolsa de Valores</NavDropdown.Item>
              {/* <NavDropdown.Item href="/variaciones">Variaciones Bolsa</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/variaciones">Variaciones Bolsa</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/inversionBolsa">Inversion en Bolsa</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/leliqs">Lelics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/crisisMexico">Crisis del Tequila</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TECNOLOGIAS" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/tecnologias/sitioWeb">Consejos Sitio Web</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavBarBoostrap;
