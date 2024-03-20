import { Link } from 'react-router-dom'; // Importar Link desde React Router
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ButtonBarBoostrap() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">PymesYa</Navbar.Brand> {/* Usar Link en lugar de href */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/services">Nuestros Servicios</Nav.Link> {/* Usar Link en lugar de href */}
            <Nav.Link as={Link} to="/ourCompany">Quienes Somos</Nav.Link> {/* Usar Link en lugar de href */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ButtonBarBoostrap;