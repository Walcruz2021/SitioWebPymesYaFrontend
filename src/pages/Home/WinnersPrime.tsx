import NavBar from "../../components/NavBar/NavBarBoostrap"
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap"
import michaelBurry from "../Home/imagenes/bolsaValores/MichaelBurry.jpg"
import Swal from "sweetalert2";

const WinnersPrime = () => {

    const alertInfCorto = () => {
        // alert('OPERAR EN CORTO: Es una operativa bursatil que consiste en apostar por la cai­da de un determinado valor. Las posiciones cortas suponen vender un activo con la idea deque el precio bajara para comprarlo despues a un nivel inferior')
        Swal.fire({
            title: "OPERAR EN CORTO",
            text: "Es una operativa bursátil que consiste en apostar por la caída de un determinado valor. Las posiciones cortas suponen vender un activo con la idea de que el precio bajara para comprarlo despues a un nivel inferior",
            imageUrl: "images/thumbs-up.jpg"
          })
    };
    

    const alertInfIncCredi = () => {
        // alert('OPERAR EN CORTO: Es una operativa bursatil que consiste en apostar por la cai­da de un determinado valor. Las posiciones cortas suponen vender un activo con la idea deque el precio bajara para comprarlo despues a un nivel inferior')
        Swal.fire({
            title: "SWAPS DE INCUPLIMIENTO CREDITICIO",
            text: "La finalidad teórica principal de las permutas de incumplimiento crediticio es servir como seguro para el poseedor de un título de deuda que quiere cubrirse del posible riesgo de crédito (básicamente impago) del mismo. Para ello acude a un vendedor de permutas de incumplimiento crediticio, al que le paga una prima anual, y en caso de impago, el vendedor responde pagando el importe del titulo al poseedor.",
            imageUrl: "images/thumbs-up.jpg"
          })
    };

    const alertInfCDS = () => {
        // alert('OPERAR EN CORTO: Es una operativa bursatil que consiste en apostar por la cai­da de un determinado valor. Las posiciones cortas suponen vender un activo con la idea deque el precio bajara para comprarlo despues a un nivel inferior')
        Swal.fire({
            title: "CDS (credit default swap)",
            text: "CDS es similar a una póliza de seguro. Imagina que tienes un juguete muy valioso, como un coche de control remoto que te encanta. Ahora, piensa en un amigo tuyo que está un poco preocupado de que puedas dañar ese juguete o que lo pierdas. Entonces, tu amigo te hace una oferta: Si me das un poquito de tu dinero todos los meses, yo te prometo que si algo le pasa a tu coche de control remoto, te daré otro nuevo o te dará suficiente dinero para comprar uno nuevo. Eso es básicamente lo que hace un Credit Default Swap (CDS) en el mundo financiero, pero en lugar de juguetes, se trata de dinero prestado o deudas.",
            imageUrl: "images/thumbs-up.jpg"
          })
    };

    return (
        <>
            <NavBar />
            <div className="classContainerFin">
                <h1></h1>
                <img src={michaelBurry}></img>
                <h3>Michael Burry</h3>
                <p>Es un médico, exneurólogo y gestor de fondos de cobertura (hedge funds) estadounidense. Fué el 
                    fundador del Fondo Scion Capital LLC, que operó desde el año 2000 hasta el 2008 y luego cerró 
                    para centrarse en sus propias inversiones personales. Burry fue uno de los primeros
                    inversores en reconocer la crisis de hipotecas subprime e invertir mediante seguros de impago 
                    <span onMouseEnter={alertInfCDS} style={{ fontWeight: 'bold', cursor: 'pointer' }}> CDS</span>.</p>

                <p>Burry se diagnosticó con Trastorno del Espectro Autista cuando, leyendo un libro sobre ese tema, 
                    se dió cuenta de por qué le costaba mucho socializar y porque era tan diferente a los demás.
                    Ha llegado a considerar que a pesar de la carga que el Trastorno del Espectro Autista le generó 
                    en su dia a di­a, tambien ha supuesto ventajas importantes a su vida como inversor. Le ha dotado 
                    de una personalidad obsesiva hacia temas concretos y de una capacidad para mantenerse racional y 
                    fri­o ante las inversiones que realizaba.</p>

                <p>Tuvo tanto éxito con sus selecciones de acciones que atrajo el interacción de compañias como 
                    Vanguard, White Mountains Insurance Group e inversionistas destacados como Joel Greenblatt.</p>

                <p>En 2005, Burry comenzó a centrarse en el mercado de alto riesgo. A través de su análisis de las 
                    prácticas de préstamos hipotecarios en 2003 y 2004, pronosticó correctamente que la burbuja 
                    inmobiliaria colapsarí­a ya en 2007.
                    La investigación de Burry sobre los valores de los inmuebles residenciales lo convenció de que 
                    las hipotecas de alto riesgo, especialmente aquellas con tasas "teaser", y los bonos basados en 
                    estas hipotecas comenzarí­an a perder valor cuando las tasas originales fueran reemplazadas por 
                    tasas mucho más altas, a menudo en tan solo dos años después del inicio. Esta conclusión lo llevo 
                    a adquirir posiciones en <span onMouseEnter={alertInfCorto} style={{ fontWeight: 'bold', cursor: 'pointer' }}>
                        corto
                    </span> en el mercado al persuadir a Goldman Sachs y otras firmas de inversion para que le vendieran 
                    <span onMouseEnter={alertInfIncCredi} style={{ fontWeight: 'bold', cursor: 'pointer' }}> swaps de 
                    incumplimiento crediticio</span> contra negocios de alto riesgo que el consideraba vulnerables. 
                   </p>

                <p>Este análisis resultó correcto y Burry se benefició en consecuencia. Desde entonces, Burry ha dicho: 
                    "No salgo a buscar buenas ventas en corto. Me paso el tiempo buscando buenas compras en largo.</p>

                <p>En un artículo de opinión del 3 de abril de 2010 para The New York Times, Burry argumentó que cualquiera 
                    que haya estudiado cuidadosamente los mercados financieros en 2003, 2004 y 2005 podría haber 
                    reconocido el creciente riesgo en los mercados de alto riesgo. Culpó a los reguladores federales 
                    por no escuchar las advertencias desde fuera de un cálculo cerrado de asesores.


                </p>
            </div>
            <ButtonBarBoostrap />
        </>
    )
}

export default WinnersPrime