import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {

    const [state, setState] = useState<Boolean>(false)


    const handleButton = () => {
        setState(!state)
    }

    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    console.log(navToggle)

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("nav-menu_visible");
            // if(navMenu){
            //     navMenu.classList.toggle("nav-menu_visible");
            //     if (navMenu.classList.contains("nav-menu_visible")) {
            //       navToggle.setAttribute("aria-label", "Cerrar menú");
            //     } else {
            //       navToggle.setAttribute("aria-label", "Abrir menú");
            //     }
            // }
        });
    }

    return (
        // <Navbar bg="dark" variant='dark' expand="lg">
        //    <Container>
        //    <Link className='navbar-brand' to='/'>Ecommerce</Link>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Link className='nav-link' to="/">Home</Link>
        //         </Nav>
        //     </Navbar.Collapse>
        //     <FontAwesomeIcon
        //         icon={faShoppingCart}
        //         color='white'
        //         size='2x'
        //         style={{ cursor: 'pointer'}}
        //         onClick={ () => handleOpen(true)} />

        //    </Container>
        // </Navbar>
        <>

            {state ? <>
                <header className="header">
                    <nav className="nav">
                        <a href="#" className="logo nav-link">
                            Logo
                        </a>

                        <button className="nav-toggle" aria-label="Abrir menú">
                            {/* <i className="fas fa-bars"></i> */}

                            <FontAwesomeIcon
                                icon={faBars}
                                color='white'
                                size='2x'
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleButton()}
                            />

                        </button>

                        <ul className="nav-menu">
                            <li className="nav-menu-item">
                                <a href="#" className="nav-menu-link nav-link">
                                    Blog
                                </a>
                            </li>
                            <li className="nav-menu-item">
                                <a href="#" className="nav-menu-link nav-link">
                                    Videos
                                </a>
                            </li>
                            <li className="nav-menu-item">
                                <a href="#" className="nav-menu-link nav-link">
                                    Sobre mí
                                </a>
                            </li>
                            <li className="nav-menu-item">
                                <a href="#" className="nav-menu-link nav-link nav-menu-link_active">
                                    Contacto
                                </a>
                            </li>
                    
                        </ul>
                    </nav>
                </header>
            </> : <>
            <header className="header">
        <nav className="nav">
          <a href="#" className="logo nav-link">
            Logo
          </a>


          <button className="nav-toggle" aria-label="Abrir menú">
            {/* <i className="fas fa-bars"></i> */}
            
          <FontAwesomeIcon
                icon={faBars}
                color='white'
                size='2x'
                style={{ cursor: 'pointer'}}
                onClick={()=>handleButton()}
                />

          </button>

          <ul className="nav-menu nav-menu_visible">
            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link nav-link">
                Blog
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link nav-link">
                Videos
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link nav-link">
                Sobre mí
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link nav-link nav-menu-link_active">
                Contacto
              </a>
            </li>
            <li className="nav-menu-item">
            <Link to="/contact">
            <button className="button3" id="dog" >
              Crear Perro
            </button>
          </Link>
            </li>
          </ul>
        </nav>
      </header>
            </>}



        </>
    )
}

export default NavBar;
