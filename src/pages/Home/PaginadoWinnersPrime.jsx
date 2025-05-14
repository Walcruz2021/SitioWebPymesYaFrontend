
import CardWinner from "./CardWinner"
import michaelBurry from "../Home/imagenes/bolsaValores/MichaelBurry.jpg";
import stevenEisman from "../Home/imagenes/bolsaValores/stevenEisman.jpg";
import steveCarrel from "../Home/imagenes/bolsaValores/steveCarrel.jpg"
import cristianBale from "../Home/imagenes/bolsaValores/cristianBale.jpg"
import { getUserLogin } from "../../store/actions/actionUser";
import { auth } from "../../hooks/configFirebase";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";


const PaginadoWinnersPrime = () => {
    const [cardActual, setcardActual] = useState(0)
    const [buttonBack, setButtonBack] = useState(false)
    const [buttonNext, setButtonNext] = useState(true)
    const [loginUser, setLoginUser] = useState();
    const dispatch = useDispatch();
    const userFullName = useSelector((state) => state.userDataName);

    useEffect(() => {
        auth.onAuthStateChanged((userCred) => {
            if (userCred) {
                const { email, emailVerified, displayName } = userCred;
                setLoginUser({ email, emailVerified, displayName });
            }
        });
    }, []);

    useEffect(() => {
        if (loginUser && loginUser.emailVerified) {
            dispatch(getUserLogin());
        }
    }, [dispatch, loginUser]);
    const alertInfCorto = () => {
        // alert('OPERAR EN CORTO: Es una operativa bursatil que consiste en apostar por la cai­da de un determinado valor. Las posiciones cortas suponen vender un activo con la idea deque el precio bajara para comprarlo despues a un nivel inferior')
        Swal.fire({
            title: "OPERAR EN CORTO",
            text: "Es una operativa bursátil que consiste en apostar por la caída de un determinado valor. Las posiciones cortas suponen vender un activo con la idea de que el precio bajará para comprarlo después a un nivel inferior",
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
            text: "CDS es similar a una póliza de seguro. Imagina que tienes un juguete muy valioso, como un coche de control remoto que te encanta. Ahora, piensa en un amigo tuyo que está un poco preocupado de que puedas dañar ese juguete o que lo pierdas. Entonces, tu amigo te hace una oferta: 'Si me das un poquito de tu dinero todos los meses, yo te prometo que si algo le pasa a tu coche de control remoto, te daré otro nuevo o te dará suficiente dinero para comprar uno nuevo'. Eso es básicamente lo que hace un Credit Default Swap (CDS) en el mundo financiero, pero en lugar de juguetes, se trata de dinero prestado o deudas.",
            imageUrl: "images/thumbs-up.jpg"
        })
    };

    const alertInfCDO = () => {
        // alert('OPERAR EN CORTO: Es una operativa bursatil que consiste en apostar por la cai­da de un determinado valor. Las posiciones cortas suponen vender un activo con la idea deque el precio bajara para comprarlo despues a un nivel inferior')
        Swal.fire({
            title: "CDO (obligacion garantizada por deuda)",
            text: "Es un tipo de instrumento de inversión que agrupa distintos tipos de deuda (hipotecas, bonos, líneas de crédito, préstamos para automóviles) y es vendido a los inversionistas, los cuales obtienen un flujo de dinero constante por el mismo. Para los bancos la venta de los CDO les da más fondos para prestar a otros clientes.",
            imageUrl: "images/thumbs-up.jpg"
        })
    };

    const cardsWinners = [
        {
            titulo: 'MICHAEL BURRY',
            contenido1: (
                <>
                    Es un médico, exneurólogo y gestor de fondos de cobertura (hedge funds) estadounidense. Fué el fundador del Fondo Scion Capital LLC, que operó desde el año 2000 hasta el 2008 y luego cerró para centrarse en sus propias inversiones personales. Burry fue uno de los primeros inversores en reconocer la crisis de hipotecas subprime e invertir mediante seguros de impago {<span onMouseEnter={alertInfCDS} style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline black' }}> CDS</span>},
                </>
            ),
            imagen1: michaelBurry,
            contenido3: "Burry se diagnosticó con Trastorno del Espectro Autista cuando, leyendo un libro sobre ese tema, se dió cuenta de por qué le costaba mucho socializar y porque era tan diferente a los demás. Ha llegado a considerar que a pesar de la carga que el Trastorno del Espectro Autista le generó en su dia a di­a, tambien ha supuesto ventajas importantes a su vida como inversor. Le ha dotado de una personalidad obsesiva hacia temas concretos y de una capacidad para mantenerse racional y fri­o ante las inversiones que realizaba.",
            contenido5: "Tuvo tanto éxito con sus selecciones de acciones que atrajo el interacción de compañias como Vanguard, White Mountains Insurance Group e inversionistas destacados como Joel Greenblatt.",
            contenido6: (
                <>
                    En 2005, Burry comenzó a centrarse en el mercado de alto riesgo. A través de su análisis de las prácticas de préstamos hipotecarios en 2003 y 2004, pronosticó correctamente que la burbuja inmobiliaria colapsarí­a ya en 2007. La investigación de Burry sobre los valores de los inmuebles residenciales lo convenció de que las hipotecas de alto riesgo, especialmente aquellas con tasas "teaser", y los bonos basados en estas hipotecas comenzarí­an a perder valor cuando las tasas originales fueran reemplazadas por tasas mucho más altas, a menudo en tan solo dos años después del inicio. Esta conclusión lo llevo a adquirir posiciones en <span onMouseEnter={alertInfCorto} style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline black' }}> corto </span> en el mercado al persuadir a Goldman Sachs y otras firmas de inversion para que le vendieran <span onMouseEnter={alertInfIncCredi} style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline black' }}> swaps de incumplimiento crediticio</span> contra negocios de alto riesgo que el consideraba vulnerables.                </>
            ),
            contenido7: "Este análisis resultó correcto y Burry se benefició en consecuencia. Desde entonces, Burry ha dicho: 'No salgo a buscar buenas ventas en corto. Me paso el tiempo buscando buenas compras en largo'.",
            contenido8: "En un artículo de opinión del 3 de abril de 2010 para The New York Times, Burry argumentó que cualquiera que haya estudiado cuidadosamente los mercados financieros en 2003, 2004 y 2005 podría haber reconocido el creciente riesgo en los mercados de alto riesgo. Culpó a los reguladores federales por no escuchar las advertencias desde fuera de un cálculo cerrado de asesores.",
            imagen2: cristianBale,
            contenido10: 'En The Big Short, Christian Bale usa un par de pantalones cortos y una camisa prestada del Michael Burry real '

        },
        {
            titulo: 'STEVE EISMAN',
            imagen1: stevenEisman,
            contenido1:
                <>
                    'Steve Eisman, nacido el 8 de julio de 1962, es un empresario e inversor estadounidense, conocido por haber puesto en {<span onMouseEnter={alertInfCorto} style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline black' }} >corto</span>} obligaciones de deuda colateralizada <span onMouseEnter={alertInfCDO} style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline black' }} >(CDO)</span>, beneficiándose así­ del colapso de la burbuja inmobiliaria estadounidense en 2007-2008',
                </>,
            contenido2: 'A partir de 2004 y hasta el inicio del año 2007, Eisman, casado con una exbanquera, fue gerente de portafolios del fondo de cobertura FrontPoint Partners.',
            contenido3: 'Es una de las personas cuyo bolsillo y portafolios engordaron a medida que aumentaban las quiebras de los hogares estadounidenses que habí­an pedido créditos hipotecarios subprime a tasas de interés variables.',
            contenido4: 'Su trabajo consistí­a en invertir el dinero de clientes acomodados en títulos financieros, dopados en la bolsa por el éxito eufórico de los préstamos subprime cuyos  riesgos los bancos diseminaban por todo el mundo, vendiéndolos por trozos en forma de obligaciones (CDO, obligación de deuda colateral, y RMBS, tí­tulos financieros adosados a préstamos hipotecarios).',
            contenido5: 'Eisman descubrió al viajar a Florida, California, Nevada y Arizona, epicentros de los préstamos subprime, el laxismo de los bancos y de las empresas que concedían los créditos, que ni siquiera conocí­an la situación financiera de sus clientes.',
            contenido6: "A comienzos de 2005, los colaboradores más estrechos de Eisman, entre ellos Vincent Daniel, compartí­an la impresión de que muchos en Wall Street no entendí­an lo que hacían. En 2005 había 625.000 millones de dólares en préstamos hipotecarios basura (es decir, aprobados a personas sin medios económicos), de los cuales 507.000 millones de dólares acabaron transformados en bonos hipotecarios. Los préstamos basura seguían en expansión incluso cuando los tipos de intereses subí­an, lo que no tení­a sentido. 'El mercado financiero tendrí­a que no prestar a quien no pudiera pagar'. Pero lo hacía, sin registrarlo en los libros. Prestaba, luego vendí­a los préstamos hipotecarios a los departamentos de renta fija de los grandes bancos de inversión de Wall Street, que a su vez los empaquetaban en bonos y se los volvían a vender normalmente a inversores profesionales",
            contenido7:
                <>
                    'El financista identificó una cantidad importante de créditos dudosos y decidió apostar a su fracaso, convenciendo a Goldman Sachs y Deutsche Bank de crear seguros destinados a cubrirse en caso de que un acreedor no pudiese reembolsar un préstamo <span onMouseEnter={alertInfCDS} style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline black' }}>(Credit default swaps, o CDS)</span>.',
                </>,
            contenido8: 'A inicios de 2007 se multiplicaban los incumplimientos de pagos de las hipotecas, y los inversores, que especulaban con una continua alza del mercado inmobiliario, decidieron retirarse repentinamente del mercado, precipitando la caída de los precios.',
            contenido9: 'En ocho meses, 84 empresas de créditos hipotecarios en Estados Unidos se arruinaron. Y el valor del portafolio de Steve Eisman aumentó, pasando de 700 millones de dólares a 1.500 millones, y seguia apreciándose.',
            imagen2: steveCarrel,
            contenido10: 'La vida de Steve Eisman es interpretada por Steve Carell con el papel de Mark Baum en la pelicula The Big SHort'
        }
    ];

    const siguienteCard = () => {

        setcardActual(cardActual + 1);
        if (cardActual - 1 !== 0) {
            setButtonBack(true)
        }
        if (cardActual + 1 >= cardsWinners.length - 1) {
            setButtonNext(false)
        }
    };

    const anteriorCard = () => {
        setcardActual(cardActual - 1);
        if (cardActual - 1 <= 0) {
            setButtonBack(false)
        }
        if (cardActual + 1 !== 0) {
            setButtonNext(true)
        }
    };

    return (
        <>

            <div className="containerHistory">
                <CardWinner
                    titulo={cardsWinners[cardActual].titulo}
                    contenido1={cardsWinners[cardActual].contenido1}
                    imagen1={cardsWinners[cardActual].imagen1}
                    imagen2={cardsWinners[cardActual].imagen2}
                    contenido2={cardsWinners[cardActual].contenido2}
                    contenido3={cardsWinners[cardActual].contenido3}
                    contenido4={cardsWinners[cardActual].contenido4}
                    contenido5={cardsWinners[cardActual].contenido5}
                    contenido6={cardsWinners[cardActual].contenido6}
                    contenido7={cardsWinners[cardActual].contenido7}
                    contenido8={cardsWinners[cardActual].contenido8}
                    contenido9={cardsWinners[cardActual].contenido9}
                    contenido10={cardsWinners[cardActual].contenido10}
                    siguiente={siguienteCard}
                    anterior={anteriorCard}
                    buttonBack={buttonBack}
                    buttonNext={buttonNext}
                />
            </div>
        
        </>
    );
}

export default PaginadoWinnersPrime