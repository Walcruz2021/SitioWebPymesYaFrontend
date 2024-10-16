import "./Services.css";
import responsiveIcon from "../../icons/responsiveIcon.png";
import designSample from "../../icons/desingSample.png";
import installSample from "../../icons/installSample.png";
import { BsSmartwatch } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoAnalyticsSharp } from "react-icons/io5";
import informes from "../../icons/informes.png";
import analisis from "../../icons/analisis.png";
import checkTurns from "../../icons/checkTurns.png";
import imgSist from "../../icons/appSist.jpeg";
import "./SistemaGestionTurnos.css";
import { useDispatch, useSelector } from "react-redux";
import { SiSimpleanalytics } from "react-icons/si";
import { RiExchangeDollarFill } from "react-icons/ri";
import { Bounce   } from 'react-swift-reveal';
import { LightSpeed  } from 'react-swift-reveal';
import { Flip } from 'react-swift-reveal';

const SistemaGestionTurnos = () => {
  const userFullName = useSelector((state) => state.userDataName);

  return (
    <div>
      <div className="titGral">
        <h1>GESTION DE TURNOS PYMESYA</h1>
      </div>
      <div className="containerOurServ">
        <p>
          Olvídate del caos de los cuadernos y las notas desorganizadas. Con
          <span className="fw-bold">
            {" "}
            Sistema de Gestión de Turnos de PymesYa
          </span>
          , puedes gestionar tus turnos, ventas y gastos de forma profesional y
          sin esfuerzo, ideal para peluquerías caninas, veterinarias y otros
          negocios que necesiten una solución integral.
        </p>

        <div className="conatiner py-3">
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 d-flex justify-content-center mb-1">
              <div className="text-center">
              <Bounce   duration={500} delay={900} distance="30px">
                <div className="card-body">
                  <img src={responsiveIcon} />
                </div>
                <p>Accesible de cualquier dispositivo</p>
                </Bounce  >
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-center mb-1">
              <div className="text-center">
              <Bounce   duration={500} delay={900} distance="30px">
              <div className="card-body">
                  <img src={designSample} />
                </div>
                <p>Interfaz Sencilla y Amigable</p>
              </Bounce>
                
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-center mb-1">
              <div className="text-center">
              <Bounce   duration={500} delay={900} distance="30px">

                <div className="card-body">
                  <img src={installSample} />
                </div>
                <p>
                  No requiere instalación. Accedé desde cualquier punto con
                  internet o datos moviles
                </p>

              </Bounce>
              </div>
            </div>
          </div>
        </div>

        <div className="titGral">
          <h2>BENEFICIOS</h2>
        </div>

        <section className="pt-2 mt-4">
          <div className="">
            <div className="row justify-content-center">
              <div className="col-12 col-md-5 d-flex justify-content-center">
              <LightSpeed   duration={500} delay={900} distance="30px">
              <div className="card-body">
                  <h5>
                    <IoAnalyticsSharp size={50} className="m-2" />
                    Acceso de Información
                  </h5>
                  <p className="mt-2">
                    Tendrás acceso a un historial de citas y datos relevantes de
                    tus clientes, lo que facilita la preparación para cada
                    consulta y mejora el servicio prestado.
                  </p>

                  <h5 className="pt-3">
                    <SiSimpleanalytics size={50} className="m-2" />
                    Informes Detallados
                  </h5>
                  <p className="mt-2">
                    Genera reportes precisos sobre tus gastos, ventas y otros
                    indicadores claves, ayudando a mejorar la estrategia de
                    negocio
                  </p>

                  <h5 className="pt-3">
                    <IoNewspaperOutline size={50} className="m-2" />
                    Organización sin complicaciones
                  </h5>
                  <p className="mt-2">
                    Despídete de los cuadernos y las notas sueltas. Con nuestro
                    sistema, puedes agendar, editar y eliminar turnos de manera
                    rápida y centralizada, lo que garantiza una gestión de citas
                    sin errores ni confusiones.
                  </p>

                  <h5 className="pt-3">
                    <BsSmartwatch size={50} className="m-2" />
                    Fluidez en la gestión de turnos
                  </h5>
                  <p className="mt-2">
                    La interfaz intuitiva te permite programar citas en
                    segundos, liberando tiempo para que te enfoques en lo que
                    realmente importa: atender a tus clientes.
                  </p>

                  <h5 className="pt-3">
                    <RiExchangeDollarFill size={50} className="m-2" />
                    Totalmente Gratuito
                  </h5>
                  <p className="mt-2 pb-4">
                    Sin tarjetas ni nada raro. Sólo regístrate y accede a un
                    sistema que mejorará la productividad de tu negocio hoy
                    mismo.
                  </p>

                  <a
                    className="btn btn-primary mt-2 btn-xl w-100 py-3"
                    href="https://frontend-app-peluqueria.vercel.app/"
                  >
                    Accedé al Sistema
                  </a>
                </div>

              </LightSpeed>

               
              </div>

              <div className="col-12 col-md-4 d-flex justify-content-center">
              <Flip duration={1000} delay={3000} distance="30px">

                <div className="card-body">
                  <div className="imgSist">
                    <img src={imgSist} />
                  </div>
                </div>
              </Flip>

              </div>
            </div>
          </div>
        </section>

        <div className="titGral pt-2">
          <h2>¿COMO FUNCIONA?</h2>
        </div>

        <div>
          <p>
            "Aprende a utilizar nuestro sistema de forma sencilla con nuestro
            video tutorial. Te guiamos paso a paso para que puedas aprovechar al
            máximo todas las funciones de esta herramienta. A continuación, te
            mostramos dos videos: el primero te enseña el proceso completo, y el
            segundo te ofrece consejos útiles para crear un acceso directo en tu
            computadora de escritorio o dispositivo móvil."
          </p>
        </div>
        <div className="containerVideo">
          <iframe
            width="100%"
            height="500"
            src="https://player.vimeo.com/video/1001384288?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Tutorial"
          ></iframe>
        </div>
        <div className="containerVideo">
          <iframe
            width="100%"
            height="500"
            src="https://player.vimeo.com/video/1001972160?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="instalacion SistPY"
          ></iframe>
        </div>
      </div>
  
    </div>
  );
};

export default SistemaGestionTurnos;
