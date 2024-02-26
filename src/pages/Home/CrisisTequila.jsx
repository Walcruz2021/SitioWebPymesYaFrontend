import NavBarBoostrap from "../../components/NavBar/NavBarBoostrap";
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap";
import "./InversionBolsa.css";
import imgCrisis from "../Home/imagenes/crisisMexico/crisisTequila.jpg";
import imgPresidente from "../Home/imagenes/crisisMexico/CambioMando.jpg";
import imgFobaproa from "../Home/imagenes/crisisMexico/fobaproa.jpg";

import { Helmet } from "react-helmet";
import "./Leliqs.css";
import ComentaryFaceTequila from "../../components/ListNotes/ComentaryFaceTequila";
import ButtonDonacion from "./ButtonDonacion";

// import { useShare } from 'react-facebook';
const CrisisTequila = () => {
  // const { share, isLoading, error } = useShare();

  // async function handleShare() {
  //   await share({
  //     href: 'http://www.facebook.com',
  //   });
  // }

  const titulo = "Crisis de Tequila";
  const descripcion = "Informacion Crisis Tequila";
  const imagen = "URL-de-la-imagen-del-producto";
  const url = "www.pymesya.com/crisisMexico";

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
      <div className="classContainerSitio">
        <ButtonDonacion />
        <h1>CRISIS DE MEXICO: EFECTO TEQUILA</h1>
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
          En la década de 1990, un terremoto económico sacudió los cimientos de
          México, dejando a su paso una estela de incertidumbre y desafíos.
          Pero, ¿qué tiene que ver el agave, la planta emblemática del tequila
          mexicano, con esta devastadora crisis financiera?. Sorprendentemente,
          la respuesta no reside en las áridas tierras donde florecen los campos
          de agave, sino en las complejidades del sistema financiero
          internacional y las decisiones políticas internas. La "Crisis del
          Tequila" trascendió las fronteras de la industria tequilera para
          transformarse en un símbolo de las vulnerabilidades económicas de un
          país en desarrollo en un mundo globalizado.
        </p>

        <img src={imgCrisis} alt="imagen de Crisis de Mexico" />
        <p>
          Imagina que eres dueño de una fábrica de juguetes y decides pedir un
          préstamo al banco para comprar materiales y expandir tu negocio. Al
          principio, todo va bien y estás produciendo muchos juguetes. Pero
          luego, resulta que hay un problema en la fábrica que hace que los
          juguetes no sean tan buenos como esperabas. Como resultado, la gente
          deja de comprar tus juguetes y tus ingresos comienzan a disminuir.
        </p>
        <p>
          En el caso de la "crisis del tequila", México había pedido prestado
          mucho dinero en dólares estadounidenses, pero luego el valor del peso
          mexicano comenzó a caer y como si esto fuera poco el dolar estaba
          fortalecido. Esto hizo que fuera más difícil pagar esos préstamos,
          especialmente porque el gobierno mexicano tenía menos dinero debido a
          la caída en el precio del petróleo, que era una gran fuente de
          ingresos para el país.
        </p>

        <p>
          Esta crisis se presentó en el cambio de administración presidencial
          entre el ex presidente Carlos Salinas de Gortari y Ernesto Zedillo.
          Durante los primeros días del sexenio la devaluación del peso mexicano
          alcanzó las cifras más bajas en la historia incrementando el valor del
          dólar casi un 300% y desencadenando altas tasas de inflación, falta de
          capital en los bancos, interés muy altos y crisis en la actividad
          comercial forzando a miles de empresas a realizar recortes de personal
          o incluso el cierre completo de estas mismas.
        </p>

        <p>
          Como resultado, México enfrentó problemas económicos graves y tuvo que
          recibir ayuda financiera de otros países para recuperarse.
        </p>

        <p>
          Entonces, la "crisis del tequila" se llama así porque tuvo un gran
          impacto en México, que es famoso por su producción y exportación de
          tequila. La crisis afectó a muchas áreas de la economía mexicana,
          incluida la industria del tequila, y por eso se le dio ese nombre.
        </p>

        <h3>
          La Devaluación y el Error de Diciembre: Punto de Origen de la Crisis
        </h3>

        <p>
          Como se habia mencionado, ésta crisis se presentó en el cambio de
          administración presidencial entre el ex presidente Carlos Salinas de
          Gortari y Ernesto Zedillo.
        </p>

        <p>Zedillo tomó posesión el 1 de diciembre de 1994.</p>
        <img src={imgPresidente} alt="cambio presidencial" />
        <p>
          Unos cuantos días después, tuvo una reunión con varios empresarios
          mexicanos y extranjeros, comentando sobre la devaluación que vendría,
          con el objetivo primordial de detener la fuga de dólares de las
          reservas internacionales. Los críticos del gobierno de Zedillo
          argumentan que, aunque la devaluación era necesaria y económicamente
          coherente, se manejó incorrectamente en términos políticos: al haber
          anunciado sus planes de devaluación, muchos extranjeros retiraron sus
          inversiones, agravando los efectos de la devaluación. Sin poder
          mantener la nueva banda de la tasa de cambio, a principios de 1995, la
          administración del nuevo mandatario decidió establecer el sistema de
          libre flotación del peso, el cual llegaría a 7.20 pesos por dólar en
          tan solo una semana. Cuando el dólar dejó de ser controlado por el
          gobierno el peso perdió la mitad de su valor, hecho que ocasionó que
          las deudas en dólares no pudieran ser pagadas.
        </p>

        <p>
          Las decisiones de Zedillo, principalmente la de anunciar la
          devaluación a los inversionistas y el establecer el sistema de libre
          flotación, fueron el "error de diciembre" de acuerdo con el
          expresidente Salinas de Gortari.
        </p>

        <h3>Bonos de la Tesoreria: El controvertido TESOBONO</h3>

        <p>
          Los Tesobonos fueron un tipo específico de bonos del gobierno mexicano
          emitidos durante la década de 1990. Su nombre proviene de la
          combinación de "tesoro" y "bonos". Estos bonos fueron instrumentos de
          deuda utilizados por el gobierno mexicano para financiar su deuda
          pública y para obtener fondos en momentos de necesidad financiera.
        </p>

        <p>
          Lo que hizo que los Tesobonos fueran únicos y a veces controvertidos
          fue que estaban denominados en moneda extranjera, generalmente en
          dólares estadounidenses. Esto significa que el gobierno mexicano se
          comprometía a pagar intereses en dólares en lugar de pesos mexicanos.
          Esto se hizo para atraer a inversionistas extranjeros y para evitar la
          volatilidad de la moneda local.
        </p>

        <p>
          Sin embargo, cuando ocurrió la devaluación del peso mexicano en 1994
          durante la llamada "Crisis del Tequila", el gobierno mexicano enfrentó
          dificultades para pagar los intereses y el principal de los Tesobonos
          en dólares, ya que ahora estos pagos se volvieron mucho más caros en
          términos de pesos mexicanos. Esta situación contribuyó
          significativamente a la crisis financiera que enfrentó México en ese
          momento.
        </p>

        <p>
          Aunque varios factores contribuyeron a la alta demanda de los
          TESOBONOS, los puntos principales fueron los siguientes:
        </p>

        <p>
          1) El candidato presidencial del Partido Revolucionario Institucional
          (en el gobierno desde 1929), favorito para las elecciones, Luis
          Donaldo Colosio, fue asesinado el 23 de marzo de ese año. Esto provocó
          que el saldo de los tesobonos se situara en 7,049 millones de pesos,
          esto fue un incremento del 83% respecto al de diciembre del año
          anterior. Unos meses después, José Francisco Ruiz Massieu, secretario
          general del PRI, también fué asesinado el 28 de septiembre.
        </p>

        <p>
          2) El EZLN, una rebelión insurgente de Chiapas, le declaró la guerra
          al gobierno el 1 de enero de 1994. Aunque el conflicto armado terminó
          2 semanas después, las inconformidades y peticiones de los insurgentes
          eran causa de preocupación, especialmente para los inversionistas.
        </p>

        <p>3) enorme gasto gubernamental</p>

        <p>
          Todos estos aspectos alarmaron a los inversionistas que habían
          adquirido los TESOBONOS, tanto mexicanos como algunos extranjeros,
          llevándolos a vender rápidamente y agotando así las reservas
          internacionales del Banco de México, que ya se encontraban en niveles
          muy bajos.
        </p>

        <h3>FOBAPROA: Una deuda por décadas que las pagan los Probres</h3>

        <p>
          El Fondo Bancario de Protección al Ahorro (Fobaproa) fue una
          dependencia de ahorro con el fin de ser un plan de contingencia a los
          bancos. Fue creado en 1990, en el sexenio de Salinas de Gortari, quien
          en conjunto con su partido de procedencia, el Partido Revolucionario
          Institucional (PRI), propusieron la estrategia. Sin embargo, fue el
          presidente sucesor, Ernesto Zedillo, quien llevó a cabo su
          implementación y desarrollo hasta 1995.
        </p>

        <p>
          El desarrollo del Fobaproa estuvo delimitado por la crisis económica
          que azotaba el país, donde diversos factores como la baja en las
          reservas de la nación, la inversión extranjera y la volatilidad de los
          precios, provocaron que las tasas de intereses se dispararán lo que
          resultó que empresas y la ciudadanía en general dejaran de pagar a los
          bancos, quienes tenía un mal manejo de gestión de deudas y cuotas, lo
          que provocó su caída.
        </p>

        <img src={imgFobaproa} alt="imagen Bono Mexico" />
        <p>
          Ante esta crisis el Fobaproa salió al rescate de los bancos, sin
          embargo, la escena bancaria estaba envuelta en distintas polémicas
          como fraudes, evasiones fiscales y malas prácticas de empresarios.
          Gracias a estas acciones, más el incremento inimaginable de la deuda,
          hicieron que el gobierno tomara la decisión de pasar el adeudo como un
          tema en el que toda la ciudadanía tenía que participar y la liquidez
          pasó a ser un problema estatal.
        </p>

        <p>
          Esta práctica fue considerada como un caso de corrupción por parte de
          los bancos en conjunto del gobierno quienes pasaron las deudas de las
          instituciones como un deber público en 1999, el cual sigue siendo
          cobrado a través de los impuesto de la ciudadanía dejando limitada la
          infraestructura de otras áreas como salud, educación, seguridad,
          movilidad , entre muchas otras.
        </p>

        <p>
          El caso Fobrapoa y la acumulación del hartazgo social por la
          inestabilidad política del partido hegemónico (PRI) fueron factores
          decisivos para que en las elecciones del año 2000 perdieran por
          primera vez, después de 30 años, el poder de gobernar el país.
        </p>

        <p>
          Durante la crisis económica en México de 1994 y los años siguientes,
          el Fobaproa, su concepción, implementación y principales beneficiarios
          se convirtieron en uno de los temas más polémicos de la política
          mexicana, debido al endeudamiento estatal a largo plazo y donde se
          especuló que los ahorradores beneficiados eran allegados a la cúpula
          política del país y estában ligadas a polémicas de corrupción. El 55%
          de la deuda cubierta por el fondo estuvo destinada a empresarios y
          banqueros prominentes, que salieron de la crisis amasando grandes
          fortunas. Las más importantes controversias que se produjeron en torno
          al Fobaproa ocurrieron cuando personajes de las cúpulas empresariales
          ingresaron deudas de sus negocios a la cartera vencida que rescató el
          gobierno para que fuera éste quien las liquidara?.
        </p>

        <p>
          El argumento principal de los defensores del Fobaproa es que los
          costos totales de no haber rescatado a la banca hubieran sido mayores
          debido al pánico que se pudo haber generado en los mercados
          financieros, profundizando la crisis iniciada en diciembre de 1994.
        </p>

        <p>
          No obstante, el mismo año que el Fobaproa se asumió como deuda
          pública, se estimó que las obligaciones se pagarían en 30 años, pero
          un cálculo hecho por los economistas Fausto Hernández Trillo y Marcos
          Ávalos en 2006 (publicado por las Naciones Unidas, a través de la
          CEPAL) pronosticó que serían 70 años, asumiendo que el país tuviera un
          crecimiento económico anual de 4%.
        </p>

        <p>
          Se estima que, como consecuencia de las decisiones tomadas durante la
          administración de Ernesto Zedillo, el pago del Fobaproa habrá
          impactado a tres generaciones.
        </p>

        <p>
          El nivel de endeudamiento generado, por concepto de intereses, se ha
          valuado en dos billones de pesos, lo que representa que aunque cada
          año se destinen entre 30 y 50 mil millones de pesos, dicha cantidad
          alcanzaría solo para cubrir los intereses generados.
        </p>

        <ButtonDonacion />

        <ComentaryFaceTequila />
      </div>

      <ButtonBarBoostrap />
    </>
  );
};

export default CrisisTequila;
