import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface User{
    user:string
}

function NavBarBoostrapLogin(user:User,sesion: () => void) {
console.log(sesion,"---")
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
            </NavDropdown>
            <NavDropdown title="TECNOLOGIAS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tecnologias/sitioWeb">Consejos Sitio Web</NavDropdown.Item>
            </NavDropdown>
          </Nav>
              <NavDropdown title={user.user} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={sesion}>Cerrar Sesion</NavDropdown.Item>
              </NavDropdown>
        
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavBarBoostrapLogin;
