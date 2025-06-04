import IonIcon from '@reacticons/ionicons';
import mongo from "../../pages/Home/imagenes/mongodb.png"
import sql from "../../pages/Home/imagenes/sql.png"
import postgress from "../../pages/Home/imagenes/postgress.png"
import java from "../../pages/Home/imagenes/java.png"
import react from "../../pages/Home/imagenes/react.png"
import javaS from "../../pages/Home/imagenes/javaS.png"
import lengC from "../../pages/Home/imagenes/lengC.png"
import express from "../../pages/Home/imagenes/express.png"
import node from "../../pages/Home/imagenes/node.png"

import "./ButtonBar.css"


const ButtonBar = () => {

    return (
        <>
            <div className="barra">
                <div className="containerInfo">

                    <div className="titGral">

                        <h3>Sobre<span> Nosotros</span></h3>
                    </div>
                    <p>Somos Desarrolladores apasionados por la innovacion y el impacto de las tecnologias en nuestra vida.
                        Participamos en varios proyectos y seguimos el camino infinito del aprendizaje</p>
                    <p>Algunas tecnologias con las que contamos de conocimientos y en las que tenemos experiencia para sacar adelante cualquier proyecto</p>

                    <div className="containerIcons">
                        <img className="iconoTec" src={mongo}></img>
                        <img className="iconoTec" src={sql}></img>
                        <img className="iconoTec" src={postgress}></img>
                        <img className="iconoTec" src={java}></img>
                        <img className="iconoTec" src={react}></img>
                        <img className="iconoTec" src={javaS}></img>
                        <img className="iconoTec" src={lengC}></img>
                        <img className="iconoTec" src={express}></img>
                        <img className="iconoTec" src={node}></img>
                    </div>

                </div>

                <nav className="navegacion">

                    {/* <h3>Redes Sociales</h3> */}
                    <a href="https://www.instagram.com/pymesyasalta/" target="_blank"><IonIcon className="IconRedes" name={'logo-instagram'} /></a>
                    {/* <a href="https://www.facebook.com/profile.php?id=100091303899830&sk=about" target="_blank"><IonIcon className="IconRedes" name={'logo-facebook'} /></a> */}

                </nav>
            </div>

        </>


    )
}

export default ButtonBar;
