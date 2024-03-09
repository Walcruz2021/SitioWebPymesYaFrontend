import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBarBoostrap(prop) {
  console.log(prop,"------>")
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
            <NavDropdown title="FINANZAS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/finanzas/bolsaValores">Bolsa de Valores</NavDropdown.Item>
              {/* <NavDropdown.Item href="/variaciones">Variaciones Bolsa</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/variaciones">Variaciones Bolsa</NavDropdown.Item>
              <NavDropdown.Item href="/inversionBolsa">Inversion en Bolsa</NavDropdown.Item>
              <NavDropdown.Item href="/leliqs">Lelics</NavDropdown.Item>
              <NavDropdown.Item href="/crisisMexico">Crisis del Tequila</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TECNOLOGIAS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tecnologias/sitioWeb">Consejos Sitio Web</NavDropdown.Item>
            </NavDropdown>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavBarBoostrap;
