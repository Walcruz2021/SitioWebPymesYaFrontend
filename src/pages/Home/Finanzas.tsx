import "./Finanzas.css"
import NavBar from "../../components/NavBar/NavBarBoostrap"
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap"
import IonIcon from '@reacticons/ionicons';
import ButtonDonacion from "./ButtonDonacion";
const panaderia = require("./imagenes/panaderiaBeto.png")
const panaderia2 = require("./imagenes/panaderiaBeto2.png")
const pepe = require("./imagenes/Pepe.png")

const Finanzas = () => {
    return (
        <>
            <NavBar />
            <div className="containerGlobalWeb">
                <ButtonDonacion />
                <div className="containerLike">
                    <div
                        className="fb-like"
                        data-href="http://www.pymesya.com/bolsaValores"
                        data-width=""
                        data-layout="button_count"
                        data-action=""
                        data-size="large"
                        data-share="true"
                    ></div>
                </div>
                <div className="titGral">
                    <h1>¿QUE ES LA BOLSA DE VALORES?</h1>

                </div>
                <p>La primera opción que, quizás, pasa por tu cabeza cuando piensas en invertir parte de tus ahorros
                    sea la bolsa. La compra y venta de valores es la gran protagonista de los mercados financieros. Pero
                    ¿entiendes qué es y cómo funciona la bolsa? ¿Conoces a que se debe el aumento o baja de la misma?
                    Te ayudamos a responder a estas y otras preguntas clave.</p>
                <p>
                    Quizá al leer “bolsa de valores” pienses en un gran edificio con gente corriendo y gritando, donde
                    es muy fácil perder dinero. Es por eso que mucha gente huye de ella sin conocer todos los beneficios
                    que aporta a los inversores, creyendo que es algo hecho solo para unos pocos.
                    El mercado de valores es donde un inversor puede comprar las acciones que pone en venta una
                    institucion o incluso una persona.</p>
                <p>Las negociaciones en la bolsa de valores se llevan a cabo de manera indirecta, a través de
                    agentes intermediarios, llamados "corredores de bolsa" o brokers, en inglés. Estos actúan como
                    un puente que vincula a las personas con dinero disponible para invertir y las empresas que
                    tienen necesidad de capital para llevar adelante sus proyectos.</p>
                <div className="titGral">
                    <h2>¿Ahora por qué una empresa pondria en venta sus acciones?</h2>
                </div>
                <img src={panaderia} />
                <p>Una empresa, de un tamaño considerable, para seguir proyectandose y expandiendose necesita vias de
                    financiacion, es decir, capital para seguir creciendo. Pondré de ejemplo a "la Panaderia Don Beto"
                    Al cotizar en la bolsa, permite que un abuelito, un policia o cualquier otra persona sin distinguir religion, ocupacion,
                    nivel social, etc pueda invertir sus ahorros en esta empresa. De esta manera la
                    "Panaderia Don Beto" contará con el capital necesario para seguir creciendo.
                </p>
                <img src={panaderia2} />
                <p>
                    Ademas el cotizar en bolsa implica
                    tener cierto beneficios, como estar diariamente en la noticias de índole económicas, ya sea en tv, diario,
                    revistas etc. Y eso produce publicidad, ya sea positiva o negativa dependiendo del caso.
                    Por otro lado para cotizar en bolsa, la empresa primero debe hacer públicos sus estados financieros,
                    puesto que a través de ellos se pueden determinar los indicadores que permiten saber la situación
                    financiera de las compañi­as.
                    Las bolsas de valores son reguladas, supervisadas y controladas por los Estados Nacionales, esto
                    implica que obligadamente sus contabilidades sean transparentes y ordenadas, sometiendose
                    continuamente  a auditorias  que reflejen su imagen.
                </p>
                <p>
                    Como la accion de una empresa
                    equivale a dinero, a muchos de los empleados se les paga con acciones y eso provoca un incentivo al
                    empleado de que trabaje mejor de manera de que la accion suba
                    Por tanto las acciones motivan, incentivan y premian al trabajador.
                </p>
                <div className="titGral">
                    <h2>Beneficios para el INVERSOR</h2>
                </div>
                <img src={pepe} />
                <p>Pepe decidió dejar de seguir guardando su dinero en el colchón, y tomo la decisión de sacarle
                    el mejor rendimiento a sus ahorros y es por eso que decidió invertir su capital en la empresa "Panaderia
                    Don Beto".
                    La acción que compró Pepe, equivale a una pequeña parte de esa panaderia (básicamente, si adquieres
                    una acción, compras esa pequeña parte de la compañi­a y esperas que su valor aumente). Si la empresa
                    experimenta un aumento en sus ganancias o en el valor de sus acciones, se puede obtener una ganancia
                    significativa al vender las acciones. Si inviertes en una empresa en particular y esta experimenta
                    un crecimiento en su industria o una demanda inesperada de sus productos, te puedes beneficiar de
                    este crecimiento.
                    Además, como valor adicional, algunas empresas pagan dividendos a sus accionistas como una forma de
                    compartir las ganancias con ellos. Estos dividendos pueden ser una fuente de ingresos adicionales
                    para los inversores. Al invertir en empresas que pagan dividendos, puedes obtener un flujo de
                    ingresos adicional en lugar de simplemente ver crecer el valor de las acciones. </p>

                <ButtonDonacion />

            </div >

            <ButtonBarBoostrap />
        </>
    )
}

export default Finanzas