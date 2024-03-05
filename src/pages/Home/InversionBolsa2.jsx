import NavBarBoostrap from "../../components/NavBar/NavBarBoostrap";
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap";
import "./InversionBolsa.css";
import finviz from "../Home/imagenes/bolsaValores/imgFinViz.png";
import rsi from "../Home/imagenes/bolsaValores/RSI.png";
import RoaRoe from "../Home/imagenes/bolsaValores/RoaRoe.png";
import quickRatio from "../Home/imagenes/bolsaValores/QuickRatio.png";
import IonIcon from "@reacticons/ionicons";
import { Helmet } from "react-helmet";
import { FacebookProvider, Like, ShareButton } from "react-facebook";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import ButtonDonacion from "./ButtonDonacion";
// import { useShare } from 'react-facebook';
const InversionBolsa2 = () => {
  // const { share, isLoading, error } = useShare();

  // async function handleShare() {
  //   await share({
  //     href: 'http://www.facebook.com',
  //   });
  // }

  const titulo = "Inversion en Bolsa";
  const descripcion = "Consejos a la hora de Invertir";
  const imagen = "URL-de-la-imagen-del-producto";
  const url = "www.pymesya.com/inversionBolsa";

  return (
    <>
      <Helmet>
        <title>{titulo}</title>
        <meta property="og:title" content={titulo} />
        <meta property="og:description" content={descripcion} />
        <meta property="og:image" content={imagen} />
        <meta property="og:url" content={url} />
      </Helmet>
      <NavBarBoostrap />
      <div className="containerGlobalWeb">
        <ButtonDonacion />
        <h1>INVERSION EN BOLSA: Conceptos a tener en cuenta</h1>
        <div className="containerLike">
          <div
            className="fb-like"
            data-href="http://www.pymesya.com/inversionBolsa"
            data-width=""
            data-layout="button_count"
            data-action=""
            data-size="large"
            data-share="true"
          ></div>
        </div>

        <p>
          Dicha imagen es otorgada por la página
          <a href="https://finviz.com" target="_blanck">
            finviz
          </a>
          Seguiremos analizando a la empresa Microsoft, esta vez tendremos en
          cuenta otros conceptos. Recordá que sólo debés ingresar a la página y
          buscar a la empresa por medio de su etIqueta de identificación, en
          este caso es MSFT.
        </p>
        <img src={finviz} />

        <h3>RETURN ON ASSETS (ROA)</h3>
        <p>
          Es un indicador financiero que mide la eficiencia con la que una
          empresa utiliza sus activos para generar ganancias. Se calcula
          dividiendo la utilidad neta de una empresa por sus activos totales.
        </p>
        <p className="blackP">roa = BENEFICIOS NETOS/ACTIVOS</p>
        <p>
          Básicamente, el ROA muestra cuántas ganancias genera una empresa en
          relación con la cantidad de activos que posee. Es una medida
          importante de la rentabilidad y eficiencia operativa de una empresa.
          Un ROA más alto indica una mejor capacidad de la empresa para generar
          ganancias con sus activos.
        </p>

        <p>
          Se debe tener en cuenta el sector al que pertenece la compañia. En
          este caso, Microsoft pertenece a la Industria Tecnológica por lo que
          pueder ser común encontrar ROA más alto debido a la eficiencia de sus
          activos intangibles, a diferencia de las de servicios por ejemplo, el
          cual dicho valor puede ser más bajo debido a la naturaleza de su
          negocio.
        </p>

        <h3>ROE (Return On Equity)</h3>
        <p>
          En español, Retorno sobre el Patrimonio Net. Es importante porque
          proporciona una visión de la eficiencia con la que una empresa está
          utilizando el capital de sus accionistas para generar beneficios.
        </p>
        <p className="blackP">roe = BENEFICIO NETO/PATRIMONIO NETO</p>
        <p>
          Al tomar decisiones de inversión en una empresa, los inversores suelen
          considerar el ROE como uno de los muchos indicadores financieros
          importantes. Un ROE alto puede indicar que una empresa es eficiente en
          la generación de beneficios con su capital, lo que puede ser atractivo
          para los inversores. Sin embargo, un ROE alto por sí solo no garantiza
          el éxito futuro de una empresa, ya que puede estar inflado
          temporalmente por factores como la deuda financiera o la gestión
          agresiva de resultados.
        </p>

        <h3>ROIC (Return on Invested Capital)</h3>
        <p>
          En español, el Retorno sobre el Capital Invertido es importante porque
          proporciona una medida de la rentabilidad de una empresa en relación
          con la cantidad de capital que ha sido invertido en ella. Al tomar
          decisiones de inversión en una empresa, los inversores suelen
          considerar el ROIC como un indicador clave de la eficiencia de la
          gestión de capital de una empresa. Un ROIC alto puede indicar que una
          empresa está generando un rendimiento sólido en comparación con la
          inversión de capital, lo que puede ser atractivo para los inversores.
        </p>
        <p className="blackP">roic = BENEFICIO OPERATIVO(despúes de Impuestos)/CAPITAL INVERTIDO</p>
        <p>
          Sin embargo, al igual que con cualquier medida financiera, es
          importante considerar el ROIC en el contexto de otros factores. Por
          ejemplo, un ROIC alto puede ser el resultado de una gestión eficiente,
          pero también podría ser el resultado de una estructura de capital
          riesgosa o de decisiones a corto plazo que podrían no ser sostenibles
          a largo plazo.
        </p>

        <img src={RoaRoe} />

        <h3>NIVEL DE DEUDA: Quick Ratio y Debt-to-Equity Ratio</h3>
        <p>
          El "Quick Ratio", también conocido como "Ratio de Liquidez Inmediata",
          es un indicador financiero que se utiliza para evaluar la capacidad de
          una empresa para cubrir sus pasivos circulantes con sus activos más
          líquidos (generalmente efectivo, equivalentes de efectivo y cuentas
          por cobrar) sin tener en cuenta el inventario. Se calcula dividiendo
          los activos circulantes menos el inventario entre los pasivos
          circulantes. Un Quick Ratio alto indica una mayor capacidad de la
          empresa para cumplir con sus obligaciones a corto plazo sin tener que
          vender inventario, lo que puede ser importante en situaciones donde la
          liquidez es crucial, como en tiempos de dificultades financieras. Sin
          embargo, un Quick Ratio extremadamente alto también puede indicar que
          la empresa no está utilizando eficientemente sus activos para generar
          ingresos.
        </p>
        <p className="blackP">Quick Ratio menor a 1</p>
        <p>
          La empresa no tiene los activos suficientes para pagar los pasivos en
          el corto plazo (pero no se puede saber que sucederá en el largo plazo,
          ya que puede ser solo un mal momento de temporada)
        </p>

        <p className="blackP">Quick Ratio igual a 1</p>
        <p>
          La empresa cumple con los activos suficientes para pagar los pasivos
          en el corto plazo
        </p>
        <p className="blackP">Quick Ratio igual a 1</p>
        <p>
          La empresa tiene activos de sobra para pagar los pasivos en el corto
          plazo
        </p>

        <p>
          El "Debt-to-Equity Ratio" (Relación Deuda-Capital) es una herramienta
          importante para evaluar la salud financiera de una empresa y su
          capacidad para gestionar el riesgo financiero.
        </p>

        <p className="blackP">
          Debt-to-Equity Ratio=Deuta Total/Capital Propio
        </p>

        <p>
          Este ratio proporciona información importante sobre la estructura
          financiera de una empresa y su capacidad para hacer frente a las
          obligaciones financieras.
        </p>

        <p>
          Un alto ratio de deuda a capital puede indicar que la empresa depende
          en gran medida de la financiación mediante deuda, lo que aumenta su
          riesgo financiero.
        </p>

        <p>
          Los inversores suelen preferir empresas con niveles moderados de
          deuda, ya que esto puede indicar un equilibrio entre el uso eficiente
          del apalancamiento financiero para aumentar la rentabilidad y el
          mantenimiento de una estructura financiera estable.
        </p>

        <p>
          En conclusión, los ratios optimos pueden oscilar entre 0.4 y 0.6 (0.4
          RE 0.6) si el valor es muy alto, significa que la empresa tiene un
          alto nivel de endeudamiento con terceros frente a los aportes propios.
          Mientras que si el valor es más bajo significa que los niveles de
          endeudamiento con terceros es poco.
        </p>
        <img src={quickRatio} />

        <ButtonDonacion />
      </div>

      <ButtonBarBoostrap />
    </>
  );
};

export default InversionBolsa2;
