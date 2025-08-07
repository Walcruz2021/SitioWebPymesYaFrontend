import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { auth } from "../../hooks/configFirebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importar Link desde React Router
import {resetUser} from "../../store/actions/actionUser";
import {resetValidation} from "../../store/actions/actions"


function NavBarBoostrapLogin(userProp) {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const userLogedName = useSelector((state) => state.reducerUser.userDataName);
  const userLogedEmail = useSelector((state) => state.reducerUser.userDataEmail);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      dispatch(resetUser()) // Actualiza el estado del usuario después del cierre de sesión
      dispatch(resetValidation())
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const handleServices = () => {
    navigate("/listServices");
  };
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          PymesYa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/contact">
              Contacto
            </Nav.Link>
            {/* <Nav.Link href="/empleos">EMPLEOS</Nav.Link> */}
            <Nav.Link as={Link} to="/servicios">
              SERVICIOS
            </Nav.Link>

            <Nav.Link as={Link} to="/negocios">
              NEGOCIOS
            </Nav.Link>


            <Nav.Link as={Link} to="/histories">
              HISTORIAS
            </Nav.Link>

            <NavDropdown title="FINANZAS" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/finanzas/bolsaValores">
                Bolsa de Valores
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="/variaciones">Variaciones Bolsa</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/variaciones">
                Variaciones Bolsa
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/inversionBolsa">
                Inversion en Bolsa
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/leliqs">
                Lelics
              </NavDropdown.Item>
                 <NavDropdown.Item as={Link} to="/crisisMexico">
                Crisis del Tequila
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TECNOLOGIAS" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/tecnologias/sitioWeb">
                Consejos Sitio Web
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="https://frontend-app-peluqueria.vercel.app" target="_blank">
                Sistema Gestion de Turnos
              </NavDropdown.Item> */}
              <NavDropdown.Item
                as={Link}
                to="/tecnologias/sistemaGestionTurnos"
              >
                Sistema Gestion de Turnos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {userLogedEmail ? (
            <NavDropdown
              title={userLogedName ? userLogedName : null}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={handleLogout}>
                Cerrar Sesion
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleServices}>
                Mis Servicios
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link as={Link} to="/login">
              LOGIN
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBoostrapLogin;
