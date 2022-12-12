import NavBar from "../../components/NavBar/NavBar"
import "./OurCompany.css"
import eccomerce from "./imagenes/ecomerce.jpg"
import sitioWeb from "./imagenes/sitioweb.jpg"
import software from "./imagenes/softwareEmp.png"
import IonIcon from '@reacticons/ionicons';


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

            <h5 className="titServ">Ofrecemos tres Servicios</h5>

            <div className="ContainerServ">   
                
                <div className="Card">
               
                
                    <IonIcon className="IconService" name="card"></IonIcon>
                    <h5>ECOMMERCE</h5>
                    <img src={eccomerce}></img>
                 

                    <p>eCommerce o Comercio Electronico es la practica de comprar y vender productos a traves de tu sitio Web
                        Tu tienda online estara disponible en todo el mundo. Recuerda que con tu tienda virtual, los clientes tendran acceso a tus productos
                        los 365 dias del año las 24 horas</p>
                    <h6>INTEGRACION CON MERCADO LIBRE</h6>
                    <p>La gestión de tus publicaciones y ventas estará centralizada en tu cuenta de Mercado Libre. Es decir, todo lo que publiques se verá también en tu tienda virtual y los productos que vendas podrás cobrarlos usando Mercado Pago,
                        de la misma manera que en Mercado Libre.</p>
             

                </div>
                      
                <div className="Card">
               
                 
                    <IonIcon className="IconService" name="desktop-sharp"></IonIcon>
                    <h5>SOFTWARE DE GESTION 100% WEB</h5>
                     <img src={software}></img>
                

                
                       <p>Podras realizar distintas tareas de forma mucho mas facil y rapida que recurriendo a sistemas tradicionales
                        basados en anotaciones manuales. Podras llevar la contabilidad, control inventario, personalizar documentos, 
                        sacar el maximo partido a los datos gracias a las estadisticas, etc   
                      </p>
                       <p>Te permitirá agilizar y optimizar la operatoria diaria de tu empresa o negocio
                        Puedes ver un ejemplo de un Gestion de Turno para una Peluqueria Canina en el siguiente </p>
                       <a href="https://app-peluqueria-canina.vercel.app/" target="_blank">Link</a> 
                   
                    
                </div>
              
                <div className="Card">
              
                 
                    <IonIcon className="IconService" name="globe-outline"></IonIcon>
                    <h5>SITIO WEB</h5>
                    <img src={sitioWeb}></img>
                   
                   
                  
                   <p>Que lo BASICO no te confunda, con este sitio Web podras posicionar tu marca y tener un reconocimiento tanto a nivel Local como Nacional
                        Al estar diseñadas para verse desde cualquier parte del mundo, tendras la posibilidad de abrir fronteras y de que los clientes que no puedan ir a tu negocio
                        fisico, lo puedan hacer de forma virtual informandose de los servicios que prestas
                    </p>
               
                   
                </div>
              
            </div>
            
        </div>

    )
}

export default OurCompany