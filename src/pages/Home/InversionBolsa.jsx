import NavBarBoostrap from "../../components/NavBar/NavBarBoostrap";
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap";
import "./InversionBolsa.css"
import finviz from "../Home/imagenes/bolsaValores/imgFinViz.png"
import rsi from "../Home/imagenes/bolsaValores/RSI.png"
import sFloat from "../Home/imagenes/bolsaValores/shortFloat.png"
import avgVolume from "../Home/imagenes/bolsaValores/avgVolume.png"

const InversionBolsa = () => {
  return (
    <>
      <NavBarBoostrap />
      <div className="classContainerInvBolsa">
      <h1>INVERSION EN BOLSA: CONCEPTOS A TENER EN CUENTA</h1>
      <p>Para tener éxito, a la hora de invertir en la bolsa, es importante hacer una investigación exhaustiva y tomar decisiones informadas</p>
      <p>El consejo principal a la hora de meterse en este mundo es la Educación y el Conocimiento</p>
      <p>Antes de invertir, se debe dedicar tiempo a aprender como funciona el mercado de valores, los tipos de inversiones disponibles, estrategias de inversión, etc</p>
      <p>Familiarizarse con los conceptos es clave para tener éxito. Es por eso que dejaré algunos conceptos importantes que deberás tener en cuenta antes de invertir en una empresa</p>
      <p>Además es importante que sepas dónde es que puedes observar estos datos en el momento que investigues a una empresa. Es por eso que además adjuntaré una imagen en donde podrás identificar estos valores y conceptos</p>
      <p>Dicha imagen es otorgada por la página https://finviz.com/, la cual, nos porporciona toda la informacion necesaria a la ahora de invertir.En este caso a modo de ejemplo, se elegirá a laempresa Microsoft y analizaremos un poco su estado patrimonial superficialmente</p>
      <img src={finviz}/>

      <h3>SHORT FLOAT</h3>
      <p>Porcentaje de acciones en circulacion de una compañia que han sido vendidas en corto por los inversores. 
        La venta en corto es una estrategia utilizada por los inversores que creen que el precio de una accion 
        disminuirá en el futuro.</p>
      <p>Cuando los inversores venden en corto una accion, están tomando prestados acciones de un corredor y la 
        venden en el mercado con la esperanza de recomprarlas a un precio más bajo en el futuro. Si tienen éxito, 
        obtendran una ganancia al devolver las acciones prestadas al corredor</p>
      <p>Se expresa como un porcentaje. Puede ser utilizado como un indicador de sentimiento de mercado</p>
      <p>Alto Short Float</p>
      <p>Existe un sentimiento negativo generalizado hacia esa compañia</p>
      <p>Bajo Short Float</p>
      <p>Indica que hay menos inversores que esten vendiendo en corto la accion. Lo que sugiere un sentimiento + positivo</p>
      <p>En términos generales, un short float por encima del 20% se considera relativamente alto, pero esto puede variar según el contexto. Lo más importante es evaluar el short float en el contexto de la empresa en cuestión, su industria, la situación del mercado y otros factores relevantes antes de tomar decisiones de inversión. Un alto short float puede ser una señal de riesgo potencial, pero no debe ser el único factor en su análisis de inversión.</p>
      <img src={sFloat}/>

      <h3>RSI</h3>
      <p>Se utiliza para identificar posibles puntos de inflexion en el precio de un activo y a ayudar a los operadores e inversores a tomar decisiones informadas sobre la compra o venta de acciones</p>
      <p>RSI menor a 30</p>
      <p>Se considera como una señal de que el activo está sobrevendido, lo que implica que puede haber habido una 
        disminución excesiva en el precio y que podría producirse una corrección o una reversión al alza en el futuro 
        cercano</p>

      <p>RSI mayor a 70</p>
      <p>Se considera como una señal de que el activo está sobrecomprado, lo que implica que puede haber habido un 
        aumento excesivo en el precio y que podría producirse una corrección o una reversión a la baja en el futuro 
        cercano</p>
      <p>NOTA: Generalmente se usa en periodos de índices pero tambien puede adaptarse a periodos más cortos o más 
        largos</p>
      <img src={rsi}/>
      
      <h3>TARGET PRICE</h3>
      <p>Es una estimación, se utiliza como una guía para los inversionistas y traders al tomar decisiones sobre 
        comprar, vender o mantener una accion</p>
      <p>Si el TARGET price es mayor que el precio actual de mercado, podría ser una señal de que espera que la 
        accion se aprecie, y sea una buena oportunidad de compra</p>
      <p>Por otro lado si TP es menor PAM podría indicar que se espera que la accion se deprecie y ser una señal de 
        venta</p>
      
      <h3>AVERAGE VOLUME</h3>
      <p>Es un indicador importante para los inversores y traders, ya que porporciona una idea de la liquidez y la 
        actividad comercial de una accion o valor financiero</p>
      <p>ALTO: Indica mayor liquidez y mayor interes de los participantes del mercado en la accion, lo que puede ser 
        una señal de mayor actividad y oportunidades comerciales</p>
      
      <p>BAJO</p>
      <p>Indica menor liquidez y menor interes en la accion, lo que puede indicar una menor liquidez y un menor 
        interes en la accion, lo que puede dificultar la compra y venta de acciones en grandes cantidades sin afectar 
        el precio</p>
        <img src={avgVolume}/>

      <h3>OVERSOLD</h3>
      <p>Se utiliza para describir una situación en la que el precio de una accion o valor financiero ha caído en 
        exceso y se considera que está por debajo de su valor intrínsico o fundamental subyacente</p>
      <p>Cuando una accion esta oversold se considera que ha habido una presion excesiva de venta, lo que ha llevado 
        a una disminución significativa en su precio. La condición de sobreventa puede sugerir que la accion ha 
        sido vendida en exceso y puede haber una oportunidad potencial para que los inversores compren a precios más 
        bajos antes de que el precio se recupere</p>
     
      </div>
      
      <ButtonBarBoostrap />
    </>
  );
};

export default InversionBolsa;
