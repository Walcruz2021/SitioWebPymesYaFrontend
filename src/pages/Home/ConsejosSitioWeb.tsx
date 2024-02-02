import NavBar from "../../components/NavBar/NavBarBoostrap"
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap"
import wixPage from "../Home/imagenes/consejosWeb/wix.png"
import donWeb from "../Home/imagenes/consejosWeb/donWeb.png"
import tiendaNube from "../Home/imagenes/consejosWeb/tiendaNube.png"
import wordPress from "../Home/imagenes/consejosWeb/wordPress.png"
import mShops from "../Home/imagenes/consejosWeb/mShops.png"
import shopify from "../Home/imagenes/consejosWeb/shopify2.png"
//import { Helmet } from 'react-helmet';
import "./ConsejosSitioWeb.css"
import Swal from "sweetalert2";
import IonIcon from '@reacticons/ionicons';
import ButtonDonacion from "./ButtonDonacion"

const ConsejosSitioWeb = () => {

    const alertHosting = () => {
        // alert('OPERAR EN CORTO: Es una operativa bursatil que consiste en apostar por la cai­da de un determinado valor. Las posiciones cortas suponen vender un activo con la idea deque el precio bajara para comprarlo despues a un nivel inferior')
        Swal.fire({
            title: "HOSTING",
            text: "El Hosting es fundamental para que tu sitio web esté en línea y sea accesible ya que es el espacio en donde se guardará tu sitio web, es decir, asegurará de que tu sitio esté disponible las 24 hrs para tus usuarios. Lo mantendrá seguro, lo protejerá de cualquier tipo de amenaza, además guardará todos tus archivos para garantizar de que tu sitio funcione correctamente, entre otros beneficios",
            imageUrl: "images/thumbs-up.jpg"
        })
    };

    const alertDireccion = () => {
        // alert('OPERAR EN CORTO: Es una operativa bursatil que consiste en apostar por la cai­da de un determinado valor. Las posiciones cortas suponen vender un activo con la idea deque el precio bajara para comprarlo despues a un nivel inferior')
        Swal.fire({
            title: "NOMBRE DE DOMINIO",
            text: "Es el nombre único que identifica un sitio web en internet. Por ejemplo www.peluqueriaPepito.com. Existen dominios gratuitos pero si quieres uno con ciertas características especiales, como por ejemplo, uno que sea fácil de recordar, debes comprar uno. A modo de ejemplo y suposición, yo como dueño de una agencia de remises o taxis, preferiría que el número de teléfono sea un 4393939 o algo similar, de manera de estar siempre en la mente del cliente",
            imageUrl: "images/thumbs-up.jpg"
        })
    };

    // <Helmet>
    //     {/* Metadatos de Facebook */}
    //     <meta property="og:url" content="http://www.pymesya.com/tecnologias/sitioWeb" />
    //     <meta property="og:type" content="website" />
    //     <meta property="og:title" content="Consejo para tu Sitio Web" />
    //     <meta property="og:description" content="Tu Sitio Web a tu alcance. Te pouede salir mas barato de lo que imaginas" />
    //     <meta property="og:image" content="https://www.your-domain.com/path/image.jpg" />
    // </Helmet>

    return (
        <>
            <NavBar />
            <div className="classContainerSitio">
                <ButtonDonacion/>
                <h1>Consejos de un Sitio Web para tu Negocio</h1>

                <div className="containerLike">
                    <div className="fb-like" data-href="http://www.pymesya.com/tecnologias/sitioWeb" data-width="" data-layout="button_count" data-action="" data-size="large" data-share="true"></div>
                </div>

                <p>Este breve artículo tiene como objetivo orientar a los propietarios de empresas, ya sean pequeñas, medianas o grandes, esos emprendedores
                    que luchan día a día por hacer prosperar los frutos de sus esfuerzos. Quiero transmitir la idea de que tener un sitio web que represente
                    a su empresa no es una tarea difícil ni un proyecto inalcanzable que requiera una gran inversión de tiempo o dinero.
                    Desde mi perspectiva, considero que cualquier empresa, sin importar su tamaño o alcance, debería contar con un sitio web, ya que éste
                    constituye, el medio mediante el cual personas de todo el mundo pueden acceder y conocer a su compañía. Y a pesar de que hoy en dia existen
                    múltiples facilidades, el número de personas que escapan de este camino en relacionarse a estos avances
                    tecnológicos sigue siendo alto por diferentes razones, ya sea tiempo, creencia que es un gasto innecesario, dificultades económicas, etc</p>
                <p>Lo primero que debes tener en cuenta al considerar la creación de un sitio web para tu empresa es su costo</p>
                <p>Básicamente son 3 puntos claves:</p>
                <p>1) el costo del <span onMouseEnter={alertHosting} style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline black' }} >Hosting</span></p>
                <p>2) el costo de la <span onMouseEnter={alertDireccion} style={{ fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline black' }} >direccion o nombre de dominio</span> de tu sitio</p>
                <p>3) y por último, pero no menos importante, el costo de poder realizar el mismo</p>
                <p>Hoy en dia existen muchas opciones a las que puedes acudir y que, de acuerdo a tus condiciones, ya sea a) Nivel de Presupuesto
                    b) Nivel de expansion del Sitio c) Nivel de Complejidad, puedes elegir el camino correcto o por lo menos tener una pequeña guia para no
                    perder tiempo, dinero, o fracasar en el camino.
                </p>
                <p className="blackP">¡¡¡ Muy bien, luego de esta pequeña introducción seguramente ya te habrás asustado, sin embargo, son sólo palabras técnicas que no deberian
                    generar miedo!!!</p>

                <p>Este proceso lo dividiré en 3 niveles y vos como lector y representante de tu negocio elegirás en que nivel estás según tus condiciones</p>

                <h3>NIVEL 1</h3>
                <p>Es muy probable que necesites un sitio web que funcione como una tarjeta de presentación para tu negocio. Este sitio web implicaría
                    un pequeño proyecto en el que mostrarías fotos de tu negocio, su ubicación, imágenes de tus proyectos o productos, una interacción mínima
                    con el cliente permitiendo que se pongan en contacto contigo a través de un formulario de
                    contacto o tus redes sociales, que estarían claramente indicadas.</p>

                <p>Si estás en esta posición, y además, contás con un nivel de presupuesto bajo, creeme que no hace falta que contrates un desarrollador
                    Full Stack y que gastes grandes sumas de dinero. De hecho hasta inclusive, lo podés hacer vos mismo.
                </p>

                <p>Una de las opciones que existe hoy en dia es, por ejemplo<a href="https://es.wix.com/" target="_blanck">WIX</a>. Con esta plataforma
                    podés tener la libertad de crear páginas webs con calidad profesional sin conocer ningún tipo de lenguaje de programación y
                    completamente gratis. Vas a poder elegir entre más de 800 plantillas de webs personalizables para satisfacer las necesidades de tu
                    negocio.</p>

                <img src={wixPage}></img>
                <p>De esta manera te vas a olvidar de necesitar de un hosting, de un dominio, y las horas de pagos que implica contratar a un personal idóneo</p>

                <p>Si por alguna razón las direcciones que te provean no es de tu agrado, o quieres algo más personalizado, o no quieres que en tu sitio web
                    aparezca alguna marca de agua, puedes soltar algunas monedas y contratar otros tipos de planes premium que te permitirá gozar de ciertos
                    beneficios según tus necesidades.
                </p>

                <p>Otras de las opciones completamente gratis y cuya herramienta es muy recomendable por las poderosas funcionalidades que ofrece, es el mismo
                    google, en este caso GOOGLE SITES</p>

                <p>Podés ver un ejemplo de este negocio que ocupó dicha plataforma <a href="https://marroquineria-baggi.negocio.site/" target="_blanck">Sitio Web creado con Google Sites</a></p>

                <p>En ésta plataforma, con sólo llenar un formulario, podrás contar con una Página Web con hosting y dirección incluida en tán solo 20 minutos.</p>

                <p>Este tipo de plataforma ofrece mapas de manera de que puedan ubicar tu negocio, formularios de contacto entre cliente y tu negocio,
                    ligado directamente con tu correo gmail, formatos de diseños sencillos y agradables. Además permite que aparezcas entre los primeros
                    lugares del listado en el momento cuando un futuro cliente busca por ejemplo "peluquerias en buenos aires". En este caso google, al devolver
                    la respuesta, proporcionará un listado de todas las peluquerias con los datos de contactos, y entre ellos, aparecerá tu empresa con el link
                    directo de tu sitio.</p>

                <p>Por supuesto que si quieres contar con algún beneficio extra, como tener un correo electrónico personalizado con tu dominio, asistencias las
                    24 horas, etc, puedes acceder a los paquetes premium.
                </p>

                <p>En cualquiera de las dos opciones que eligas, según tus preferencias, tu costo por contar con una sitio web  será de $ 0. Con diseños
                    inclusive aún mejor que otras que son pagos.
                </p>

                <p>Si tu tiempo es muy limitado y le tienes fobia a la computadora y a ligar con cualquier error que puedas encontrar en el camino, puedes
                    contratar a alguien que pueda realizar dicho trabaj. Pero recuerda que justamente las funciones principales de estas plataformas es que dichas
                    páginas se puedan crear de manera rápida y de forma sencilla y con un producto final muy atractivo a la vista</p>

                <h3>NIVEL 2</h3>

                <p>Subiremos un poco los niveles, en donde tanto los niveles de expansión del sitio como los niveles de presupuesto y alcance de tu negocio
                    aumenten. Para esto el tiempo disponible tiene que ser mayor también.</p>
                <p>Muchos negocios, no sólo necesitan mostrar lo que venden, si no que además deben vender los productos, por otra parte  necesitan también tener informes de
                    cuáles son los productos de ofertas, niveles de venta, etc.</p>
                <p>Este tipo de proyecto por supuesto que incluirá operaciones con tarjetas, cuentas bancarias, y otros modos de pagos, es decir, de a poco se va convirtiendo
                    todo un poco más complejo.</p>
                <p>Aunque no lo creas, si tu nivel de presupuesto es aún bajo y cuentas con tiempo disponible y algún tipo de conocimiento básico de computación,
                    ejecutar ésta modalidad está en tus manos.</p>

                <h5>* MERCADO SHOPS</h5>
                <p>Además de vender tus productos por mercado libre, tienes la posibilidad de realizar tu propio E-commerce a través de Mercado Shops de Mercado Libre.</p>
                <p>Esta plataforma está integrada completamente con ML, lo cual te permite acceder a todas sus herraminetas y beneficios.</p>
                <p>A diferencia de otros sistemas, con Mercado Shops administrás tu tienda desde el mismo lugar en el que gestionás tus ventas en Mercado Libre.
                    En cualquier momento podrás elegir si publicar sólo en tu Shop, en Mercado Libre o en ambos canales disminuyendo así tu carga operacional.</p>
                <img src={mShops}></img>
                <p>Se integra con todas las redes sociales y es completamente personalizable, con distintas tipologias a elegir de manera de reflejar la
                    identidad de tu negocio.</p>
                <p className="blackP">No solo ML te ofrece estas plantillas en donde sólo debes cargar tus produtos y venderlos. Otras opciones que existen son las siguentes: </p>

                <h5>* TIENDA NUBE</h5>
                <p>Es la opción para aquellas personas que están comenzando su negocio desde cero, como también para los emprendimientos que ya venden en diferentes
                    plataformas digitales. No tiene costos por transacción ni mantenimiento mensual, sin embargo y según la necesidad de tu negocio deberás contratar algun
                    tipo de plan premium.</p>
                <img src={tiendaNube}></img>

                <h5>* DON WEB</h5>

                <p>Esta plataforma ofrece servios de hosting y dominio en toda Latinoamérica. De hecho este dominio al que estas accediendo en este momento (www.pymesya.com) lo compré
                    en esta empresa. Don Web ofrece además distintos tipos de servicios como la posibilidad de que vos mismo crees tu página web o tienda virtual sin ningún
                    conocimiento de programación. Los costes pueden ser mensuales o anuales y varian según el tipo de servicio que ocupes ya que por ejemplo ellos también pueden realizar todo el
                    trabajo por vos, lo que implicaria un plan un poco mas elevado. De todas maneras todos los valores como precios de sus servicios son bastante moderados.</p>
                <img src={donWeb}></img>

                <h5>* SHOPIFY</h5>
                <p>Si bien su público objetivo son emprendedores y pymes, también apunta a grandes empresas a través de su plan Shopify Plus.</p>
                <p>Shopify ofrece un montón de herramientas y recursos para dueños de ecommerce, desde un generador de nombres comerciales y logos
                    gratuito hasta fotos de stock y soluciones de punto de venta.</p>
                <img src={shopify}></img>
                <p>Por último, cabe destacar que Shopify te permite crear tu propia tienda sin necesidad de tener un inventario de productos mediante
                    dropshipping a través de Oberlo. Solo tienes que escoger qué productos ofrecer en tu tienda online y realizar tu pedido cada vez que
                    vendas algo. Oberlo se encarga de gestionar el inventario, el embalaje y el envío de los productos por ti.</p>


                <p className="blackP">Suena curioso que PYMESYA ofrezca servicios de la competencia, pero el objetivo de este articulo es asesorarte lo mejor posible y que tengas todo un
                    abanico de opciones, de manera que tengas conocimiento del camino que estarás tomando y tener asi un vista más clara del objetivo al que querés llegar.</p>

                <h5>* WORDPRESS</h5>
                <p>Si tu empresa se encarga de vender cursos, o tienes por ejemplo, como principal ingreso, la cantidad de suscriptores. Una opcion muy viable
                    puede ser Wordpress. Si bien para utilizar este tipo de plataforma no se necesita ser un programador con conocimiento en algún lenguaje
                    en particular, si es necesario tener experiencia de uso de la plataforma ya que es un poco más compleja.</p>

                <p>Si bien sus servicios sirven para una gran variedad de sitios webs, como tiendas de comercio electrónico, portfolios, portales de información, etc.
                    Es muy conocido principalmente como una plataforma de blogs ya que inicialmente se desarrolló con éste objetivo.</p>
                <p>Wordpress ofrece más de 50.000 plugins gratuitos y freemium para diferentes propósitos. ¿Para que sirven? Son pequeños softwares que permiten ampliar
                    la funcionalidad de tus páginas y añadirle nuevas características.</p>
                <p>Tu objetivo como dueño de tu empresa será siempre llegar a la mayor cantidad de gente posible. Es decir tener un alto tráfico. WordPres ofrece plugins
                    que te ayudarán a posicionarte en los motores de búsqueda.</p>

                <img src={wordPress}></img>

                <h3>NIVEL 3</h3>

                <p>Como última etapa, puede que la expansión de la página no sea muy elevado, pero el nivel de complejidad de la misma si lo sea.
                    Esto por consiguiente implica que tengas un nivel de presupuesto elevado y como obligatoriedad implique contratar a uno o varios programadores.</p>
                <p>A pesar de que todas las plataformas mencionadas son muy poderosas y cada vez mejoran aún más, seria muy complicado y poco probable por ejemplo de
                    que un sitio web de un banco sea realizado con Wordpress o Wix u otra plataforma similar.</p>
                <p>En la empresa donde yo presto mis servicios, todo el ingreso monetario está directamente relacionado con el sitio web. Dicha página está restringida,
                    por lo tanto, disponible sólo para un número muy bajo de usuarios, sin embargo su complejidad es muy elevada, y esto implica que detrás de ella, exista todo
                    un equipo de testers, desarrolladores backend, frontend, técnicos de soporte, devops, etc.</p>
                <p>Existen empresas que prefirieron por distintas circunstancias optar por realizar sus tiendas virtuales desde cero contratando a todo un equipo bajo su
                    dependencia obviando todas las opciones que mencioné en el NIVEL 2. Este tipo de deciones son internas de cada empresa y se debe a muchos factores, sin embargo
                    eso no quiere decir que vos como emprendedor tengas que recorrer el mismo camino. Las opciones están, sólo depende de que evalues cual
                    es la mejor alternativa para tu compañia, analizando siempre todos los PRO y CONTRAS, considerando tiempo, economia, ingresos al crear el
                    sitio, etc. </p>

                    <ButtonDonacion/>
                {/* <div className="containerCompRedes">
      <h3>Comparte Nuestras Publicaciones</h3>
     <a href="https://www.facebook.com/sharer.php?u=www.pymesya.com/inversionBolsa" target="_blank"><IonIcon className="IconComp" name={'logo-facebook'} /></a>
     <a href="https://www.linkedin.com/shareArticle?url=www.pymesya.com/inversionBolsa" target="_blank"><IonIcon className="IconComp" name={'logo-linkedin'} /></a>
     </div> */}
            </div>
            <ButtonBarBoostrap />
        </>
    )
}

export default ConsejosSitioWeb