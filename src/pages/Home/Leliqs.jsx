import NavBarBoostrap from "../../components/NavBar/NavBarBoostrap";
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap";
import "./InversionBolsa.css";
import imgLeliq from "../Home/imagenes/leliqsInformeImg.png";
//import { Helmet } from "react-helmet";
import imgCaputo from "../Home/imagenes/luisCaputo.webp"
import "./Leliqs.css"
import ComentaryFace from "../../components/ListNotes/ComentaryFaceHistory";
import ButtonDonacion from "./ButtonDonacion";
import NavBarBoostrapLogin from "../../components/NavBar/NavBarBoostrapLogin";
import { getUserLogin } from "../../reducer/actions";
import { auth } from "../../hooks/configFirebase";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

// import { useShare } from 'react-facebook';
const Leliqs = () => {
    // const { share, isLoading, error } = useShare();

    // async function handleShare() {
    //   await share({
    //     href: 'http://www.facebook.com',
    //   });
    // }

    const titulo = "Leliqs";
    const descripcion = "Informacion de Leliqs";
    const imagen = "URL-de-la-imagen-del-producto";
    const url = "www.pymesya.com/leliqs";

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
  
    return (
        <>
            {/* <Helmet>
                <title>{titulo}</title>
                <meta property="og:title" content={titulo} />
                <meta property="og:description" content={descripcion} />
                <meta property="og:image" content={imagen} />
                <meta property="og:url" content={url} />
            </Helmet> */}
            {userFullName ? <NavBarBoostrapLogin user={userFullName} /> : <NavBarBoostrap />}

            <div className="containerGlobalWeb">
                <ButtonDonacion />

                <div className="titGral">
                    <h1>LELIQS: Concepto a tener en cuenta</h1>
                </div>
                <div className="containerLike">
                    <div
                        className="fb-like"
                        data-href="http://www.pymesya.com/leliqs"
                        data-width=""
                        data-layout="button_count"
                        data-action=""
                        data-size="large"
                        data-share="true"
                    ></div>
                </div>
                <p>
                    Seguramente has escuchado sobre Javier Milei, el presidente electo de Argentina, quien propone
                    resolver primero el problema de las Leliqs antes de liberar el cepo, todo para evitar una
                    hiperinflación.
                    Pero, ¿qué son exactamente las Leliqs y cómo influyen en nuestras vidas?
                </p>
                <p>
                    Las LELIQs se crearon para controlar la cantidad de dinero circulante, gestionadas en este caso
                    por nuestro Banco Central. Si lo trasladamos a la vida cotidiana, imagina que eres dueño de un
                    juego con varios participantes y decides guardar una cantidad considerable de fichas tuyas y de
                    tus amigos en una caja manejada exclusivamente por ese grupo selecto. Esto implica que habrá menos
                    fichas para los demás. En este caso, las fichas representan los pesos para el Banco Central,
                    buscando controlar su cantidad. Por eso, ofrece a los bancos más pequeños una suerte de caja donde
                    pueden depositar sus pesos, y a cambio el banco central les paga intereses. Funciona como un plazo
                    fijo, de manera similar a cuando un banco pequeño te paga intereses por depositar ahorros en una
                    cuenta.
                </p>
                <p>
                    Al tener esos pesos guardados en las LELIQs, los bancos más pequeños disponen de menos dinero
                    para prestar o gastar, lo que reduce la circulación de dinero. Esto ayuda al banco grande a
                    controlar la cantidad de dinero disponible en la economía para evitar que los precios
                    (la inflación) se disparen demasiado, y así hacer que todo funcione mejor (aunque en la práctica,
                    esta teoría no funcionó).
                </p>

                <div className="titGral">

                    <h3>¿De que manera influyen en nuestra vida cotidiana?</h3>
                </div>

                <p>
                    Las LELIQs y su influencia en la economía pueden impactar a personas de distintos estratos
                    sociales, incluyendo a los más pobres. Su efecto puede ser indirecto pero significativo.
                </p>

                <p>
                    <span>CREDITO Y ACCESOS A PRESTAMOS</span>: Si los bancos tienen menos dinero disponible debido a que lo están
                    invirtiendo en LELIQs, puede ser más difícil obtener préstamos para quienes buscan financiamiento,
                    incluidos los emprendedores y personas de bajos ingresos que necesitan crédito para sus negocios
                    o necesidades diarias. Esto puede impactar de manera negativa en su capacidad de invertir o
                    mejorar su situación financiera.
                </p><p>
                    <span>EMPLEO Y ACTIVIDAD ECONOMICA</span>: Si las políticas relacionadas con las LELIQs contribuyen a mantener
                    una economía más estable, puede haber un impacto positivo en la creación de empleo y en la actividad
                    económica en general. Sin embargo, si las políticas restringen demasiado el flujo de dinero en la
                    economía, podrían limitar el crecimiento y afectar la generación de empleo, lo que podría impactar
                    a los más pobres, que a menudo dependen más de empleos informales o vulnerables.</p>

                <div className="titGral">
                    <h3>
                        ¿Quienes pueden acceder a las Leliqs?
                    </h3>

                </div>
                <p>
                    Ninguna persona fisica o juridica (EXCEPTO LOS BANCOS) pueden acceder a las mismas

                </p>

                <div className="titGral">
                    <h3>Origen y Porcentaje</h3>

                </div>

                <p>
                    Fueron creadas en enero de 2018, durante la presidencia de Federico Sturzenegger al frente del
                    Banco Central y con el fin de mantener estable la emisión monetaria.
                </p>

                <p>Tras la devaluación post PASO del 22% que implementó el Gobierno, en agosto, el Banco Central
                    aplicó una suba de tasas de 21 puntos porcentuales y fijó el rendimiento de las Leliq en el 133%
                </p>

                <p>Pero la de las Leliq no es una deuda cualquiera porque el Banco Central no necesita pesos para
                    nada, de hecho, puede emitir dinero prácticamente al infinito
                </p>

                <img src={imgLeliq} />

                <div className="titGral">

                    <h3>¿Por qué es tan dificil desarmar la Leliqs?</h3>
                </div>
                <p>
                    La dificultad para desarmar las LELIQs radica en equilibrar la reducción de estos instrumentos con
                    la estabilidad financiera, evitando impactos negativos en las tasas de interés, la inflación y
                    la salud general del sistema financiero. Requiere una gestión cuidadosa y gradual para minimizar
                    riesgos y perturbaciones en la economía.
                </p>
                <p>
                    <span>Cuidado del sistema financiero</span>: Los bancos suelen utilizar
                    las LELIQs como una forma de invertir sus fondos excedentes y obtener ganancias. Si se reduce
                    abruptamente la cantidad de LELIQs disponibles, los bancos podrían enfrentar dificultades para
                    obtener rendimientos seguros y estables en sus inversiones. Lo que implicaria un origen de
                    dificultades a la hora de pagar ganancias a sus ahorritas, provocando que las personas
                    por desconfianza retiren sus ahorros de los bancos en forma masiva.
                </p>

                <p>
                    Si bien no era el candidato principal, terminó quedándose con uno de los puestos clave de lo que será
                    la gestión económica de Javier Milei: <span>el ministerio de Economía</span>. Se trata de Luis “Toto” Caputo, un
                    nombre ya conocido tras su desempeño durante la gestión de Cambiemos entre 2015 y 2019.
                </p>

                <p>
                    Luis Caputo es economista de la Universidad de Buenos Aires. Sin embargo la mayoría de sus pares,
                    colegas y ex compañeros del gabinete económico del Gobierno de Mauricio Macri, lo definen como un
                    trader, un Lobo de Wall Street y no como un macroeconomista.
                </p>
                <p>
                    “El Messi de las finanzas”, como rotuló una vez Marcos Peña a Caputo en 2016, siempre fue
                    convocado por Macri para tareas puntuales y específicas. Casi como un bombero o un troubleshooter.
                </p>

                <img src={imgCaputo} />
                <p>
                    La principal tarea de Caputo consistiría en una operación de ingeniería financiera para bajar el
                    stock de las Leliq en poder de los bancos y que según Milei es la precondición para levantar el
                    cepo. Caputo estaría pensando en reemplazar esos títulos por un bono en dólares de legislación
                    extranjera.
                </p>

                <p>
                    <span>¿que significa esto?</span> es un cambio de activos: de títulos en pesos a bonos en dólares. Como cuando
                    cambias billetes de una película que ya no te gusta por boletos de una película que te emociona
                    mucho más.
                </p>

                <p>
                    Imagina que el gobierno dice: "Hey, bancos, si tienen muchos de estos títulos en pesos y eso les
                    causa problemas, pueden cambiarlos por bonos en dólares". Esto podría ser útil para los bancos
                    porque los bonos en dólares pueden ser más estables y seguros en algunos casos, especialmente
                    si la moneda local está perdiendo valor. También, este cambio puede ayudar al gobierno a hacer
                    ajustes en sus políticas económicas, como quitar algunas reglas que limitan la compra de dólares.
                </p>

                <p>
                    Por otro lado Luis Toto Caputo fue y es muy criticado por su desempeño. Principalmente por el
                    sector Kirchnerista y de la Izquierda. Lo consideran como un funcionario con un largo recorrido
                    al servicio de los pulpos financieros. Sin ir más lejos fue Caputo quien propuso y llevó
                    adelante el acuerdo con el FMI, que nos endeudó por el monto récord de 45.000 millones de dólares.
                </p>

                <span>
                    En última instancia, el tiempo es el juez supremo que revelará el desenlace final, otorgándonos la
                    oportunidad de formar juicios personales basados en los resultados obtenidos. Es a través de la
                    cadencia del tiempo que los eventos se desenvuelven y los procesos se materializan,
                    permitiéndonos presenciar la culminación de nuestras acciones y decisiones.
                </span>

                <ButtonDonacion />

                <ComentaryFace />

            </div>

            <ButtonBarBoostrap />
        </>
    );
};

export default Leliqs;
