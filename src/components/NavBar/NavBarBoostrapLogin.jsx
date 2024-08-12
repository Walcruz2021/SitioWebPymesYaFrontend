import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { auth } from "../../hooks/configFirebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom'; // Importar Link desde React Router

/**
 *  @description 
 * this component container User Login. Must first verified if user exists (user loged). Then is passed as a 
 * parameter to this user. 
 * First must be accessed var userFullName = useSelector((state) => state.userDataName) stateGlobal (REDUCER);
 * so that userFullName has some data, You must first call theonAuthStateChanged and  getUserLogin() in two 
 * useEffect through dispatch
 * 
 * const [loginUser, setLoginUser] = useState();
 *useEffect(() => {
        auth.onAuthStateChanged((userCred) => {
          if (userCred) {
            const { email, emailVerified,displayName } = userCred;
            setLoginUser({ email, emailVerified,displayName });
          }
        });
      }, []); 
* useEffect(() => {
    if (loginUser && loginUser.emailVerified) {
      dispatch(getUserLogin())
    }
  }, [dispatch, loginUser]); 
 * at the time of invoking <NavBarBoostrapLogin user={userFullName} />
*/


function NavBarBoostrapLogin(userProp) {
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Actualiza el estado del usuario después del cierre de sesión

      history.push({
        pathname: "/login",
      });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  // const handleLogout = async () => {
  //   console.log(auth, "---->");
  //   try {
  //     await signOut(auth);
 
  //     history.push({
  //       pathname: "/",
  //     });
  //   } catch (error) {
  //     console.error("Error al cerrar sesion:", error);
  //   }
  // };

  const handleServices = () => {
    history.push({
      pathname: "/login",
    });
  };
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
            <Nav.Link as={Link} to="/histories">HISTORIAS</Nav.Link>

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
              <NavDropdown.Item as={Link} to="/leliqs">Lelics</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TECNOLOGIAS" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/tecnologias/sitioWeb">
                Consejos Sitio Web
              </NavDropdown.Item>
              <NavDropdown.Item href="https://frontend-app-peluqueria.vercel.app" target="_blank">
                Sistema Gestion de Turnos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavDropdown title={userProp.user} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={handleLogout}>
              Cerrar Sesion
            </NavDropdown.Item>
            <NavDropdown.Item onClick={handleServices}>
              Mis Servicios
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBoostrapLogin;
