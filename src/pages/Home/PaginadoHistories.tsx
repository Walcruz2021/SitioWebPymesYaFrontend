import React, { useState } from 'react';
import History from "./History"
import './PaginadoHistories.css';
import NavBarBoostrap from "../../components/NavBar/NavBarBoostrap"
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap"

const PaginadoHistories = () => {

    const [historiaActual, setHistoriaActual] = useState(0);
    const [buttonBack, setButtonBack] = useState(false)
    const [buttonNext, setButtonNext] = useState(true)

    const historias = [
        {
            titulo: 'GRIMOLDI',
            imagen1: 'historia1.jpg',
            contenido1: "En el año 1860 arribó al país un joven oriundo de Italia. Tomaso Grimoldi tenía 18 años y en poco tiempo desarrolló su talento como zapatero remendón. Instalado en la calle Piedad 1110 (hoy Bartolomé Mitre) y asociado con Cayetano Rimoldi y Martín Nillergi, también italianos, se ocupó de los zapatos de los vecinos. El negocio iba tan bien, que en 1868 sumaron a un aprendiz de once años: Luis Grisetti.Ese año, Tomaso –ya convertido en Tomás–, se casó con Ángela Rimoldi, hermana de su compañero. Fueron naciendo los ocho hijos y desde chicos, los varones fueron ejercitados en los secretos del oficio. El aprendiz Grisetti también era considerado de la familia. Más aún cuando en 1888, a los 31 años, contrajo matrimonio con Celestina Grimoldi. En 1895, mientras el padre disfrutaba de rentas, luego de años de trabajo de lunes a lunes, los varones (Alberto, Luis y Enrique), más el cuñado Luis, crearon Grisetti y Grimoldi Hnos., que funcionó en un local ubicado en Ombú (Pasteur), entre Piedad y Rivadavia. Más allá de la coyuntura favorable del país, que para ese entonces crecía a un 6% anual, hubo dos factores que fueron determinantes en el desarrollo de la empresa. La promulgación de la Ley 1420 de Educación Común estableció la obligatoriedad de la formación primaria. Los niños comenzaron a asistir masivamente a las escuelas y necesitaron calzado adecuado. Con el tiempo, los zapatos escolares de Grimoldi se convirtieron en un clásico como luego fueron los Kickers y los populares Gomicuer, cuya goma indestructible soportaba horas de picaditos en los recreos. En segundo lugar, los médicos recomendaban los zapatos de la marca Grimoldi para corregir defectos del pie de los chicos. De todas maneras, el envión externo que recibió la compañía no habría servido de mucho sin la fuerte inversión que hizo Alberto Grimoldi en maquinarias para calzados, tecnología de punta para la fabricación de hormas propias y selección de curtiembres a tono con la calidad de los zapatos. 


            HEROE SIN CAPA
            
            Me dicen Lilo pero mi verdadero nombre es Liselotte Leiser de Nesviginsky. Tengo 94 años, nací en Berlín, en una familia judía que era dueña de una importante cadena de zapaterías y llegué a la Argentina después de la Segunda Guerra Mundial
            
            La cadena de zapaterías de mi familia, “Leiser”, llevaba nuestro apellido y tenía más de treinta y cinco sucursales. Para el año 1933 aproximadamente estuvo de visita en uno de nuestros negocios Alberto Enrique Grimoldi, el conocido fabricante argentino de zapatos, hijo a su vez de quien fundó esa empresa en 1895. Alberto había venido para aprender en los negocios de mi familia todo lo relacionado con la atención al cliente, la venta de calzado al público, la comercialización del producto. Recuerdo como si fuera hoy que Alberto se sentó en banquito de madera de esos que se usaban entonces para ver en detalle, en vivo y en directo como se dice ahora, el procedimiento que utilizaban los vendedores de la firma.
            
            Ninguno de nosotros podía imaginar la importancia que tendría ese hombre que de tal modo se cruzó con nuestras vidas para siempre.
            
            Pasaron los años y la oscura estrella de Hitler siguió ascendiendo en una Alemania que se volvía cada vez más peligrosa y temible. En el año 33 la cadena Leiser, cuyas fotografías pueden verse hoy en el Centro Conmemorativo del Holocausto de Montreal, fue “arianizada” y, como consecuencia de ese despojo cruel y racista, mi familia fue obligada a “asociarse” en forma compulsiva con una persona no judía y así pasar el negocio a manos “arias”. En noviembre de 1938 se produjo la tristemente célebre noche de los cristales rotos, esa que quedó en la historia de Alemania con el nombre de Kristallnacht .
            
            A partir de ese episodio vinieron ataques permanentes y cada vez más duros contra los judíos con persecuciones de todo tipo. Sin ir más lejos, ya unos años antes, yo asistía a un liceo de señoritas hasta que a la edad de catorce años fui notificada por una profesora que debía buscar inmediatamente otro lugar ya que por ser judía no podría continuar estudiando en ese liceo.
            
            Cuando la situación se volvió intolerable para todos nosotros, mis padres decidieron viajar conmigo desde Berlín a Holanda procurando buscar un lugar más seguro y tranquilo. Íbamos a embarcarnos, creo, en un avión de la línea Lufthansa. En la aduana los SS nos desnudaron por completo para comprobar que no lleváramos joyas escondidas en el cuerpo… Así era la vida entonces. En Amsterdam mi familia poseía también una cadena de zapaterías conocida como Huff , no tan grande como la de Alemania, pero igualmente importante y prestigiosa. 
            
            En mayo de 1940 también ese país fue invadido y ocupado por los nazis. Ante el riesgo de perder también los negocios en Amsterdam se produjo la segunda y milagrosa intervención de Grimoldi, quien se hizo cargo de la cadena en Holanda mediante una operación comercial obviamente ficticia y con la promesa de devolver el patrimonio recibido no bien terminara la Guerra. Un verdadero pacto de caballeros. También –aunque yo era muy joven para conocer el detalle– sé que cuando mi familia aún estaba en Alemania le envió dinero a él con la sola promesa de palabra de que luego lo devolvería. Y así fue. A veces me preguntan por qué mi familia confió tanto en Grimoldi. La respuesta es mucho más simple de lo que podría suponerse. Mis padres decidieron asumir el riesgo y, así, aferrarse a la promesa de ese hombre que, en un mundo que se les caía encima, les generaba confianza. A veces en la vida hay que dar un espacio a los valores permanentes de la condición humana.
            
            Lo que pasó después es algo muy triste de contar y evocar para mí. Un día, a las seis de la mañana yo estaba parada y como perdida en la puerta de nuestra casa en Amsterdam; en la noche anterior había salido a bailar con unos amigos en un bar de las cercanías cuando llegaron los de la Gestapo. nos llevaron primero a un colegio grandote donde dormíamos en el piso en condiciones muy precarias y finalmente terminamos alojados en el campo de concentración de Westerbork, un lugar de tránsito en realidad. Fue el mismo donde estuvo Ana Frank, la autora del famoso diario íntimo, antes de ser trasladada a Auschwitz para matarla como ya lo habían hecho los nazis con una tía mía, su esposo y su pequeña hija.
            
            En Westerbork dormíamos en barracas ruinosas y fuimos tratados como animales o menos que eso. De un lado pusieron a los hombres y del otro a las mujeres. Hacíamos nuestras necesidades en letrinas asquerosas, simples agujeros cavados en el piso, y nos limpiábamos con papel de diario cuando había. Las camas, de dos o tres pisos de alto, eran de hierro y con colchones de paja.
            
            Por las mañanas nos lavábamos como podíamos en los mismos bebederos que se usaban para el ganado. Dentro de todo, y en comparación con los demás, tuve suerte porque una prima mía ya estaba en el campo y se había hecho amiga de uno de los médicos que trabajaban ahí. Si no me equivoco se trataba del doctor Spanier, también judío y obligado a trabajar como todos en el hospital del lugar. Yo, usando un brazalete que todavía conservo al igual que la estrella amarilla que nos obligaban a llevar en todo momento, trabajé en el hospital como cocinera. Para alimentar a mis padres y a otras personas juntaba a escondidas viejas cáscaras de papas, zanahorias o batatas y con eso, más algunos huesos que encontraba por ahí, preparaba una especie de sopa horrible que sin embargo sirvió de alimento para muchos.
            
            Lo que sigue a esta historia tiene que ver con la ansiada liberación. Llegó al lugar una autoridad de la cancillería alemana y constató la autenticidad de nuestros pasaportes costarricenses que por supuesto previamente al secuestro los habianmos mandados a hacer por los cuales se pagaron una fortuna. Hacia 1944 nos trasladaron entonces a un campo de refugiados en Francia llamado la Bourboule. Una semana después se produjo el desembarco en Normandía y, qué emoción me da contarlo ahora, nos abrazamos todos llorando y corrimos hacia los alambrados de púas, los cortamos casi con los dientes y gritamos la palabra libertad, libertad, libertad, una, dos, cien veces. Una nueva vida empezaba para mí en ese instante. Y lo vivido entonces fue inolvidable para mí, para mis padres y para las demás víctimas judías o de otro origen que habían conseguido sobrevivir a una vida espantosa en el mejor de los casos … o a una muerte segura.
            
            Dado que conocíamos a gente amiga y familiares en Uruguay nos embarcamos hacia ese país, más precisamente a Montevideo, donde, en el barrio de Pocitos, permanecimos alojados durante aproximadamente nueve meses en una pensión. Queríamos ingresar a la Argentina pero eso no parecía posible por razones políticas: sabemos que la Argentina puso trabas para la inmigración de los judíos durante esa época. Es entonces cuando se produce la tercera y nuevamente milagrosa aparición de Alberto Enrique Grimoldi, a quien por supuesto no olvidábamos. Él tenía contactos a diferentes niveles gubernamentales de Argentina y actuó como garante personal para permitir nuestra llegada a este país. Parece que le dijo al gobierno, presidido entonces por Perón, que nuestro conocimiento era fundamental para potenciar sus planes en la empresa. Acto seguido Grimoldi devolvió a mi familia el dinero y todo el patrimonio de los negocios de Holanda que habían quedado a su nombre, un gesto que mi familia conoce muy bien y que r escato en mi memoria como un tesoro inapreciable y eterno.
            
            Con el transcuros del tiempo se perdio contacto con los grimoldi Grimoldi.
            
            Alcancé a saber que el hombre que nos había ayudado tanto en momentos de grave riesgo para mi familia había muerto si no me equivoco en 1953. Todo lo vivido pareció entonces perderse para siempre en el olvido. Un día, no sé por qué, me puse en campaña junto a Virginia, una gran amiga y asistente, para ubicar a los Grimoldi. 
            
            Le enviamos juntas un mensaje electrónico y así se retomó el vínculo. Fui invitada a una reunión convocada en la fábrica con toda la familia para que yo contara el comportamiento que tuvo Alberto con nosotros. Eso fue muy emocionante para todos. Lo que dije en ese encuentro lo repito ahora. Ojalá todos los hombres actuaran como lo hizo Grimoldi. Su hijo, Alberto Luis, es el actual presidente y gerente de la empresa y más allá de eso es, debo decirlo con todas las letras, un amigo permanente de la familia que nunca se olvida de nosotros.
            ",
            imagen2: "historia1.jpg",
            contenido2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            titulo: 'ARCOR',
            imagen1: 'historia2.jpg',
            contenido1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imagen2: 'historia2.jpg',
            contenido2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            titulo: 'COCA COLA',
            imagen1: 'historia2.jpg',
            contenido1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imagen2: 'historia2.jpg',
            contenido2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    const siguienteHistoria = () => {
        
        setHistoriaActual(historiaActual + 1);
        if (historiaActual - 1 !== 0) {
            setButtonBack(true)
        }
        if (historiaActual + 1 >= historias.length-1) {
            setButtonNext(false)
        }
    };

    const anteriorHistoria = () => {
        setHistoriaActual(historiaActual - 1);
        if (historiaActual - 1 <= 0) {
            setButtonBack(false)
        }
        if (historiaActual + 1 !== 0) {
            setButtonNext(true)
        }
    };

    return (
        <>
        <NavBarBoostrap/>
        <div className="containerHistory">
            <History
                titulo={historias[historiaActual].titulo}
                imagen1={historias[historiaActual].imagen1}
                contenido1={historias[historiaActual].contenido1}
                imagen2={historias[historiaActual].imagen2}
                contenido2={historias[historiaActual].contenido2}
                siguiente={siguienteHistoria}
                anterior={anteriorHistoria}
                buttonBack={buttonBack}
                buttonNext={buttonNext}
            />
        </div>
        <ButtonBarBoostrap/>
        </>
    );
};

export default PaginadoHistories;