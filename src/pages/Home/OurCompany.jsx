import "./OurCompany.css";
import desarrollo from "./imagenes/desarrollo.png";
import diseño from "./imagenes/diseño.png";
import software from "./imagenes/softwareEmp.png";
import presupuesto from "./imagenes/presupuesto.png";
import ButtonBar from "../../components/ButtonBar/ButtonBar";
import React, { useEffect, useState } from "react";
import { auth } from "../../hooks/configFirebase";
import { useDispatch, useSelector } from "react-redux";
import { getUserLogin } from "../../store/actions/actions";

const OurCompany = () => {
  const [loginUser, setLoginUser] = useState();
  const dispatch = useDispatch();

  var userFullName = useSelector((state) => state.userDataName);
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
      <div className="containerGlobalWeb">
        <div className="titGral">
          <h1>NUESTRA EMPRESA</h1>
        </div>

        <div>
          <p>
            Nuestro objetivo principal es que las personas del dia a dia
            encuentren tu negocio de una manera fácil y sencilla. Que conozcan
            tu marca y sepan llegar a ella.
          </p>
          <p>
            <h3 className="titGral">Quienes Somos?.</h3>

            <p>
              Somos un grupo de desarrolladores que tienen como funciones 2
              cosas:
            </p>
            <p>
              1) Que las personas que visiten ésta página encuentren tu marca,
              tu negocio, tu bien más preciado, como una opción a visitar y
              conocer.
            </p>
            <p>
              2) Que adoptes la tecnología en tu negocio y le saques el máximo
              provecho ya que te aportará beneficios, no solo económicos, sino
              una mejora en la imagen de tu empresa.
            </p>
          </p>

          <div className="titGral">
            <h3>Tenemos en cuenta 3 pilares fundamentales</h3>
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="titGral">
                  <h3>DESARROLLO</h3>
                </div>
                <div className="imgGral2">
                  <img src={desarrollo}></img>
                </div>
                <p>
                  Trabajamos contigo para diseñar una solución pensada en ti y
                  tus usuarios. Desarrollo especializado en soluciones
                  empresariales para cualquier tipo de negocio ya sea web, móvil
                  o desktop.
                </p>
                <div className="itemsDesings">
                  <li>Facilidad de Uso</li>
                  <li>Tecnologia Innovadora</li>
                </div>
                <p>
                  La facilidad de uso de la plataforma elegida es un criterio
                  muy importante que debe ser tomado en cuenta. Una plataforma
                  que brinde esta posibilidad proporcionara un impacto positivo
                  en la calidad del servicio al cliente
                </p>
                <p>
                  Es importante que la tecnología aplicada sea lo
                  suficientemente innovadora como para no convertirse en
                  obsoleta prematuramente.
                </p>
              </div>
              <div className="carousel-item">
                <h3>DISEÑOS</h3>
                <div className="imgGral2">
                  <img src={diseño}></img>
                </div>
                <p>
                  El diseño no es solo lo que parece y se siente. El diseño es
                  como funciona ("Steve Jobs")
                </p>
                <h3>El éxito de un software también depende de:</h3>
                <div className="itemsDesings">
                  <li>Su facilidad de uso.</li>
                  <li>Una buena interfaz de usuario.</li>
                  <li>Sus funcionalidades.</li>
                  <li>Unos contenidos adecuados</li>
                </div>
              </div>
              <div className="carousel-item">
                <h3>PRESUPUESTO</h3>
                <div className="imgGral2">
                  <img src={presupuesto}></img>
                </div>
                {/* <p>Integramos API's, soluciones de terceros y propias a los desarrollos ofreciendo una mejor experiencia.</p> */}
                <p>
                  Tenemos el Conocimiento y la Preocupacion por satisfacer las
                  necesidades, espectativas y deseos de nuestros clientes.
                  Sabemos la importancia de optmizar recursos y de sorprenderte
                  con los buenos resultados, por lo tanto, tenemos en cuenta
                  diferentes rutas, opciones y enfoques. Estamos atentos y
                  abiertos a escucharte.
                </p>
                <h3>Tipos de Presupuestos</h3>
                <div className="itemsDesings">
                  <li>Presupuestos Flexibles</li>
                  {/* <p>Abierto a posibles modificaciones,cambios o ampliaciones tanto en el servicio como en el presupuesto</p> */}

                  <li>Presupuestos Fijos</li>
                  {/* <p>Cerrado, que no admiten cambios, ampliaciones o modificaciones en el servicio</p> */}

                  <li>A corto/largo plazo</li>
                  {/* <p>Sabemos que el tiempo es clave para reducir los costes y mejorar la productividad de tu empresa. Es un aspecto fundamental que las empresas no pueden dejar del lado</p> */}
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCompany;
