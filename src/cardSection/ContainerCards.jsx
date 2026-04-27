import { Gem, Shield, Zap } from "lucide-react";
import HeroSection from "./HeroSection";
import CardsSection from "./CardsSection";
import videoPublicidad from "../icons/finalPublicidad.mp4"
import Footer from "./Footer";
import "./ContainerCards.css";

import responsiveIcon from "../icons/responsiveIcon.png";
import designSample from "../icons/desingSample.png";
import installSample from "../icons/installSample.png";

const CARDS = [
  {
    icon: Gem,
    title: "Multiplataforma",
    subtitle: "Accedé desde cualquier lugar, en cualquier momento",
    description: "Tu negocio no se detiene, y tu sistema tampoco. Accedé desde celular, tablet o computadora sin perder información.",
    detail: "Trabajá con total libertad, estés donde estés. Nuestro sistema se adapta automáticamente a cualquier dispositivo, permitiéndote gestionar turnos, clientes o ventas en tiempo real. Ya no dependés de una oficina ni de un equipo específico: toda tu información está siempre disponible, sincronizada y segura.",
    image: "https://media.base44.com/images/public/69e69deaacc080e2495df610/8c7a45002_generated_23c459f0.png",
  },
  {
    icon: Shield,
    title: "Sin Instalación",
    subtitle: "Empezá a usarlo en segundos, sin configuracion innecesarias",
    description: "Todo está listo para que empieces a trabajar desde el primer momento, sin perder tiempo ni depender de ayuda técnica.",
    detail: "Accedé directamente desde tu navegador y empezá a trabajar al instante. No necesitás conocimientos técnicos ni perder tiempo configurando nada. Además, siempre vas a tener la última versión disponible, sin actualizaciones manuales ni interrupciones en tu trabajo.",
    image: "https://media.base44.com/images/public/69e69deaacc080e2495df610/92c6a3d08_generated_2d6c2877.png",
  },
  {
    icon: Zap,
    title: "Fácil de Usar",
    subtitle: "Diseñado para que cualquiera persona pueda usarlo",
    description: "Una interfaz simple, clara e intuitiva pensada para vos, para que puedas usar el sistema desde el primer momento sin necesidad de conocimientos técnicos.",
    detail: "No necesitás ser experto en tecnología. Cada funcionalidad está diseñada para que la entiendas desde el primer momento. Navegación fluida, acciones rápidas y una experiencia pensada para ahorrarte tiempo. Menos estrés, más productividad",
    image: "https://media.base44.com/images/public/69e69deaacc080e2495df610/205aa7aa7_generated_d9f3f2bd.png",
  },
];

export default function ContainerCards() {
  return (
    <div className="min-h-screen bg-background selection:bg-foreground/10 containerCards">
      <HeroSection />
      <CardsSection cards={CARDS} />
      <div className="containerOurServ">
        <div className="containerVideo">
          <video
            src={videoPublicidad}
            loop
            controls
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        {/* <div className="containerVideo">
          <iframe
            width="100%"
            height="500"
            src="https://player.vimeo.com/video/1001972160?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="instalacion SistPY"
          ></iframe>
        </div> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}