
import subprime from "../Home/imagenes/bolsaValores/crisisSubprime1.jpg";
import subprime2 from "../Home/imagenes/bolsaValores/crisisSubprime2.jpg";
import { Link } from "react-router-dom";

import "./VariacionesBolsa.css";
import ButtonDonacion from "./ButtonDonacion";
import { getUserLogin } from "../../store/actions/actionUser";
import { auth } from "../../hooks/configFirebase";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const VariacionesBolsa = () => {
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
      <ButtonDonacion />
      <div className="containerGlobalWeb">
        <div className="titGral">
          <h1>VARIACIONES DE LA BOLSA</h1>
        </div>

        <div className="containerLike">
          <div
            className="fb-like"
            data-href="http://www.pymesya.com/variaciones"
            data-width=""
            data-layout="button_count"
            data-action=""
            data-size="large"
            data-share="true"
          ></div>
        </div>
        <p>
          Las bolsas de valores son sistemas complejos y están influenciadas por
          una amplia gama de factores que pueden afectar sus movimientos al alza
          o a la baja. Algunos de los factores más importantes que pueden
          influir en el comportamiento de una bolsa de valores incluyen:
        </p>

        <p>
          <span>Economía global y nacional</span>: Las condiciones económicas
          generales, como el crecimiento del PIB, la tasa de desempleo, la
          inflación y la política monetaria, pueden tener un impacto
          significativo en el rendimiento de las bolsas de valores.
        </p>

        <p>
          <span>Noticias y eventos geopolíticos</span>: Acontecimientos
          políticos, sociales y económicos tanto a nivel nacional como
          internacional pueden generar incertidumbre en los mercados y afectar
          las decisiones de los inversores.
        </p>

        <p>
          <span>Resultados empresariales</span>: Los informes de ganancias
          trimestrales y anuales de las empresas cotizadas en bolsa pueden
          influir en el precio de las acciones. Unos buenos resultados pueden
          aumentar la confianza de los inversores, mientras que unos resultados
          por debajo de las expectativas pueden generar ventas masivas.
        </p>

        <p>
          <span>Política y regulación</span>: Cambios en las políticas
          gubernamentales y las regulaciones relacionadas con los mercados
          financieros pueden tener un impacto en las bolsas de valores. Anuncios
          de nuevos impuestos, reformas fiscales o medidas regulatorias pueden
          afectar la confianza de los inversores.
        </p>

        <p>
          <span>Tasas de interés</span>: Las tasas de interés pueden influir en
          la toma de decisiones de inversión. Tasas más bajas pueden hacer que
          las inversiones en acciones sean más atractivas en comparación con las
          inversiones en bonos, y viceversa.
        </p>

        <p>
          <span>Eventos naturales y desastres</span>: Desastres naturales, como
          terremotos, huracanes u otros eventos inesperados, pueden generar
          volatilidad en el mercado si afectan a las empresas y su capacidad
          para operar.
        </p>

        <p>
          {" "}
          Es importante destacar que estos factores no actúan de manera aislada
          y a menudo están interconectados. Además, la percepción de cómo estos
          factores influyen en el mercado puede variar entre inversores y
          analistas, lo que contribuye a la naturaleza compleja e impredecible
          de los movimientos de las bolsas de valores.
        </p>

        <div className="titGral">
          <h2>CRISIS SUBPRIME</h2>
        </div>

        <div className="imgGral">
          <img src={subprime} />
        </div>

        <p>
          La crisis subprime fue una crisis financiera que sucudió la economi­a
          mundial en el año 2008. Se originó en los Estados Unidos, pero
          rápidamente se contagió al conjunto de economias globales. Se denomina
          crisis subprime por el hecho que su detonante fue el elevado riesgo
          crediticio. Así­ como, también, el impago de unos activos que se
          encontraban sujetos a hipotecas de alto riesgo.
        </p>

        <p>
          Imagina que el sistema financiero es como un enorme juego de dominó.
          Las personas a menudo piden dinero prestado a los bancos para comprar
          casas. Estos préstamos son como los primeros dominós en una fila. Todo
          esta bien si las personas pueden pagar sus préstamos, porque eso
          mantiene el juego en marcha.
        </p>

        <p>
          Pero aquí está la trampa: algunos bancos empezaron a prestar dinero a
          personas que no eran muy buenas en pagar sus deudas. Como si dejaran
          que algunos dominós un poco tambaleantes se unieran al juego. Estas
          personas eran consideradas "de alto riesgo" porque no tení­an un
          historial sólido de pagar sus deudas a tiempo.
        </p>

        <p>
          Al principio, todo parecí­a estar bien. Las personas que obtuvieron
          estos préstamos "subprime" (que significa que son más riesgosos)
          pudieron comprar casas, y todos estaban felices. Pero luego, como en
          un juego de dominós, cuando un ficha cae, afecta a los demás.
        </p>

        <p>
          Resulta que muchas de estas personas no podí­an pagar sus préstamos
          porque eran demasiado grandes o tení­an intereses altos. Esto fue como
          si algunos dominós comenzaran a tambalear y a caer. Como resultado,
          algunas de estas casas que la gente compró comenzaron a ser menos
          valiosas de lo que se esperaba. Imagina que compraste un juguete
          pensando que sería súper genial para siempre, pero luego todos tus
          amigos dejaron de quererlo. Esto hizo que el precio de las casas
          bajara mucho. Cuando las casas valí­an menos de lo que la gente habí­a
          pagado, algunos dejaron de pagar sus hipotecas (los pagos de las
          casas), y eso causó problemas.
        </p>

        <p>
          Aquí es donde el efecto dominó se pone en marcha. Los bancos habí­an
          hecho préstamos basados en estas casas, incluso algunos préstamos a
          otros bancos. Cuando la gente dejó de pagar, los bancos no recibieron
          el dinero que esperaban.
        </p>

        <p>
          Los bancos comenzaron a preocuparse porque no tenían suficiente dinero
          para mantenerse fuertes. Algunos de los bancos más pequeños se
          tambalearon y colapsaron como si fueran dominós cayendo uno tras otro.
          Esto creó una especie de pánico en el sistema financiero, y la
          confianza en los bancos disminuyó.
        </p>

        <p>
          Con los bancos en problemas, comenzaron a prestar menos dinero en
          general. Esto afectó a las personas y las empresas que necesitaban
          préstamos para cosas como expandir negocios o comprar casas. La
          economí­a en general comenzó a tambalearse
        </p>

        <h4>Menos crédito = Crisis mundial</h4>

        <p>
          La evidencia de que importantes entidades bancarias y grandes fondos
          de inversión tenían comprometidos sus activos en hipotecas de alto
          riesgo provocó una repentina contracción del crédito (fenómeno
          conocido técnicamente como Credit Crunch) y una enorme volatilidad de
          los valores bursátiles, generándose una espiral de desconfianza y
          pánico inversionista, y una repentina caí­da de las bolsas de valores
          de todo el mundo, debida, especialmente, a la falta de liquidez.
        </p>

        <div className="titGral">
          <h2>CONSECUENCIAS</h2>
        </div>

        <div className="imgGral">
          <img src={subprime2} />
        </div>

        <p>
          Aunque la crisis comenzó en los Estados Unidos, rápidamente se propagó
          a nivel global debido a la interconexión de los mercados financieros y
          la dependencia económica entre paí­ses. Muchos paí­ses experimentaron
          recesiones y desafí­os económicos como resultado.
        </p>
        <p>
          La crisis subprime del 2008 tuvo enormes repercusiones a nivel de
          empleo y economí­a en todo el mundo
        </p>

        <p>
          <span>Desempleo</span>: La crisis provocó una recesión económica
          global que resultó en la pérdida masiva de empleos en varios sectores.
          Muchas empresas se vieron obligadas a reducir su plantilla laboral o
          cerrar debido a la disminución de la demanda y la falta de crédito. La
          tasa de desempleo aumentó significativamente en muchas regiones,
          afectando a millones de personas.
        </p>

        <p>
          <span>Caída de la demanda</span>: A medida que las personas perdí­an
          sus empleos y la confianza en la economí­a disminuía, la demanda de
          bienes y servicios disminuyó drásticamente. Esto afectó a industrias
          como la automotriz, la construcción, la tecnologÃ­a y el turismo,
          entre otras.
        </p>

        <p>
          <span>Rescates financieros</span>: Para evitar un colapso completo del
          sistema financiero, muchos gobiernos tuvieron que intervenir y
          proporcionar enormes rescates a bancos y otras instituciones
          financieras en problemas. Estos rescates se financiaron con dinero
          público y llevaron a un aumento significativo en la deuda pública en
          varios países.
        </p>

        <p>
          <span>Caída de los mercados bursátiles</span>: Los mercados de valores
          experimentaron caí­das dramáticas en todo el mundo debido a la
          incertidumbre y el miedo a una recesión económica prolongada. Los
          inversores perdieron una cantidad sustancial de dinero.
        </p>

        <p>
          <span>Reestructuración financiera</span>: Muchas instituciones
          financieras se vieron obligadas a reestructurarse, fusionarse o cerrar
          debido a las pérdidas y al deterioro de sus activos. La crisis expuso
          la falta de regulación y la asunción de riesgos excesivos por parte de
          algunas instituciones financieras.
        </p>

        <h4>TE PUEDE INTERESAR</h4>
        <Link to="/winnersPrime">Ganadores con esta Crisis</Link>
        <br></br>
        <br></br>
      </div>
      <ButtonDonacion />
  
    </>
  );
};

export default VariacionesBolsa;
