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
                    <h3>Sobre<span>Mi</span></h3>
                    <p>Soy un Desarrollador apasionado por la innovacion y el impacto de las teconologias en nuestra vida.
                        Participe en varios proyectos y sigo el camino infinito del aprendizaje</p>
                    <p>Algunas tecnologias con las que cuento de conocimientos y en las que tengo experiencia para sacar adelante cualquier proyecto</p>
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

                    <a href="https://www.facebook.com/walter.cruz.161214/" target="_blank"><IonIcon className="IconRedes" name={'logo-linkedin'} /></a>
                    <a href="https://www.linkedin.com/in/walcruz1988/" target="_blank"><IonIcon className="IconRedes" name={'logo-facebook'} /></a>


                </nav>
            </div>

        </>


    )
}

export default ButtonBar;