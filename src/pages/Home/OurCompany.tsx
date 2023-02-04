import NavBar from "../../components/NavBar/NavBarBoostrap"
import "./OurCompany.css"
import eccomerce from "./imagenes/ecomerce.jpg"
import sitioWeb from "./imagenes/sitioweb.jpg"
import software from "./imagenes/softwareEmp.png"
import IonIcon from '@reacticons/ionicons';
import ButtonBar from '../../components/ButtonBar/ButtonBar';

const OurCompany = () => {
    return (
        <div>
            <NavBar />
            <div className="titGlobal">
                <h1>NUESTRA EMPRESA</h1>
            </div>

            <div className="classPortada">
                <p>Necesitas ver la adopcion de la Tecnologia como una herramienta indispensable para seguir siendo competitivo en el mundo actual
                    Los consumidores buscan opciones de consumo, segun se adapten a sus necesidades, brindandoles comodidad, eficencia y mayor tranquilidad sobre la seguridad personal
                    Necesitas alinearte a esta tendencia, y buscar las alternativas digitales para atender a tus clientes
                    PymesWeb no solo te ofrece esta herramienta, ademas te asesora y tiene como objetivo principal que adoptes la tecnologia para tu negocio de manera que establezcas
                    ventajas competitivas con los cuales podras posicionarte en le mercado</p>
            </div>

            <div className="titGlobal">
                <h2 className="titServ">OFRECEMOS TRES SERVICIOS</h2>
            </div>

            <div className="ContainerServ">

                <div className="Card">

                    <div className="servicio">
                        <IonIcon className="IconService" name="card"></IonIcon>
                        <div className="titGlobal">
                            <h3>ECOMMERCE</h3>
                        </div>
                    </div>
                    <div className="CardCont">
                        <img src={eccomerce}></img>

                        <p>eCommerce o Comercio Electronico es la practica de comprar y vender productos a traves de tu sitio Web
                            Tu tienda online estara disponible en todo el mundo. Recuerda que con tu tienda virtual, los clientes tendran acceso a tus productos
                            los 365 dias del año las 24 horas
                            La gestión de tus publicaciones y ventas estará centralizada en tu cuenta de Mercado Libre. Es decir, todo lo que publiques se verá también en tu tienda virtual y los productos que vendas podrás cobrarlos usando Mercado Pago,
                            </p>
                    </div>
                </div>

                <div className="Card">
                    <div className="servicio">
                        <IonIcon className="IconService" name="desktop-sharp"></IonIcon>
                        <div className="titGlobal">
                            <h3>SOFTWARE DE GESTION WEB</h3>

                        </div>
                    </div>
                    <div className="CardCont">
                        <img src={software}></img>
                        <p>Podras realizar distintas tareas de forma mucho mas facil y rapida que recurriendo a sistemas tradicionales
                            basados en anotaciones manuales. Podras llevar la contabilidad, control inventario, personalizar documentos,
                            sacar el maximo partido a los datos gracias a las estadisticas, etc
                            Te permitirá agilizar y optimizar la operatoria diaria de tu empresa o negocio
                            Puedes ver un ejemplo de un Gestion de Turno para una Peluqueria Canina en el siguiente <a href="https://app-peluqueria-canina.vercel.app/" target="_blank">APP GESTION TURNOS</a></p>
                            
                            
                    </div>

                </div>
            </div>

            <div className="Card3">
                <div className="ImgClass">
                    <img src={sitioWeb}></img>
                </div>

                <div className="servSitioWeb CardCont">
                    <div className="servicio">
                        <IonIcon className="IconService" name="globe-outline"></IonIcon>
                        <div className="titGlobal">
                            <h3>SITIO WEB</h3>
                        </div>
                    </div>
                    <p>Que lo BASICO no te confunda, con este sitio Web podras posicionar tu marca y tener un reconocimiento tanto a nivel Local como Nacional
                        Al estar diseñadas para verse desde cualquier parte del mundo, tendras la posibilidad de abrir fronteras y de que los clientes que no puedan ir a tu negocio
                        fisico, lo puedan hacer de forma virtual informandose de los servicios que prestas
                    </p>
                    {/* <IonIcon className="IconService" name="rocket-outline"></IonIcon>
                    <IonIcon className="IconService" name="timer-outline"></IonIcon>
                    <IonIcon className="IconService" name="ribbon-outline"></IonIcon> */}
                </div>
            </div>

            <ButtonBar />
        </div>

    )
}

export default OurCompany