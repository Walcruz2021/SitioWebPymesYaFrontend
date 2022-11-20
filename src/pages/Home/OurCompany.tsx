import NavBar from "../../components/NavBar/NavBar"
import "./OurCompany.css"

const OurCompany = () => {
    return (
        <div>
            <NavBar />
            <h1>Nuestra Empresa</h1>
            <div className="classPortada">
                <p>Necesitas ver la adopcion de la Tecnologia como una herramienta indispensable para seguir siendo competitivo en el mundo actual
                    Los consumidores buscan opciones de consumo, segun se adapten a sus necesidades, brindandoles comodidad, eficencia y mayor tranquilidad sobre la seguridad personal
                    Necesitas alinearte a esta tendencia, y buscar las alternativas digitales para atender a tus clientes
                    PymesWeb no solo te ofrece esta herramienta, ademas te asesora y tiene como objetivo principal que adoptes la tecnologia para tu negocio de manera que establezcas
                    ventajas competitivas con los cuales podras posicionarte en le mercado</p>
            </div>

            <h5>Ofrecemos tres Servicios</h5>

            <div className="ContainerServ">
            <div className="grid-container">
                <h5 className="titServA">e-Commerce</h5>
                <div className="titServB">
                    <p>eCommerce o Comercio Electronico es la practica de comprar y vender productos a traves de tu sitio Web
                        Tu tienda online estara disponible en todo el mundo. Recuerda que con tu tienda virtual, los clientes tendran acceso a tus productos
                        los 365 dias del año las 24 horas</p>
                    Servicios Integrados
                    <h6>INTEGRACION CON MERCADO LIBRE</h6>
                    <p>La gestión de tus publicaciones y ventas estará centralizada en tu cuenta de Mercado Libre. Es decir, todo lo que publiques se verá también en tu tienda virtual y los productos que vendas podrás cobrarlos usando Mercado Pago,
                        de la misma manera que en Mercado Libre.</p>
                </div>
            </div>

            <div className="grid-container">
                <h6 className="titServA">SITIOS PARA GESTION DE DATOS</h6>
                <div className="titServB">
                    <p>PymesWeb ofrece un sitios web,accesible solo para la empresa contratante, que te permitira gestionar tus ventas,inventarios,compras, turnos en caso de que seas un consultorio,etc
                        Puedes ver un ejemplo de un Gestion de Turno para una Peluqueria Canina en el siguiente 
                       <a href="https://app-peluqueria-canina.vercel.app/" target="_blank">Link</a> 
                        
                        </p>
                </div>
            </div>

            <div className="grid-container">

                <h6 className="titServA">Sitio Web Basico</h6>
                <div className="titServB">
                    <p>Que lo BASICO no te confunda, con este sitio Web podras posicionar tu marca y tener un reconocimiento tanto a nivel Local como Nacional
                        Al estar diseñadas para verse desde cualquier parte del mundo, tendras la posibilidad de abrir fronteras y de que los clientes que no puedan ir a tu negocio
                        fisico, lo puedan hacer de forma virtual informandose de los servicios que prestas
                    </p>
                </div>

            </div>
            </div>
         
        </div>

    )
}

export default OurCompany