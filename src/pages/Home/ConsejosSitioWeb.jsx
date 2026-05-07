import wixPage from "../Home/imagenes/consejosWeb/wix.png";
import donWeb from "../Home/imagenes/consejosWeb/donWeb.png";
import tiendaNube from "../Home/imagenes/consejosWeb/tiendaNube.png";
import wordPress from "../Home/imagenes/consejosWeb/wordPress.png";
import mShops from "../Home/imagenes/consejosWeb/mShops.png";
import shopify from "../Home/imagenes/consejosWeb/shopify2.png";
//import { Helmet } from 'react-helmet';
import Swal from "sweetalert2";
import ButtonDonacion from "./ButtonDonacion";
import { getUserLogin } from "../../store/actions/actionUser";
import { auth } from "../../hooks/configFirebase";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WIX_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Wix.com_website_logo.svg/2560px-Wix.com_website_logo.svg.png";
const MSHOPS_IMG = "https://http2.mlstatic.com/frontend-assets/homes-palpatine/assets/mercado-shops.png";
const TIENDANUBE_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Tienda_Nube_logo.svg/2560px-Tienda_Nube_logo.svg.png";
const DONWEB_IMG = "https://www.donweb.com/wp-content/uploads/2021/03/DonWeb-Logo.png";
const SHOPIFY_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png";
const WORDPRESS_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png";

const ConsejosSitioWeb = () => {
  const [loginUser, setLoginUser] = useState();
  const dispatch = useDispatch();


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

  const alertHosting = () => {
    // alert('OPERAR EN CORTO: Es una operativa bursatil que consiste en apostar por la cai­da de un determinado valor. Las posiciones cortas suponen vender un activo con la idea deque el precio bajara para comprarlo despues a un nivel inferior')
    Swal.fire({
      title: "HOSTING",
      text: "El Hosting es fundamental para que tu sitio web esté en línea y sea accesible ya que es el espacio en donde se guardará tu sitio web, es decir, asegurará de que tu sitio esté disponible las 24 hrs para tus usuarios. Lo mantendrá seguro, lo protejerá de cualquier tipo de amenaza, además guardará todos tus archivos para garantizar de que tu sitio funcione correctamente, entre otros beneficios",
      imageUrl: "images/thumbs-up.jpg",
    });
  };

  const alertDireccion = () => {
    // alert('OPERAR EN CORTO: Es una operativa bursatil que consiste en apostar por la cai­da de un determinado valor. Las posiciones cortas suponen vender un activo con la idea deque el precio bajara para comprarlo despues a un nivel inferior')
    Swal.fire({
      title: "NOMBRE DE DOMINIO",
      text: "Es el nombre único que identifica un sitio web en internet. Por ejemplo www.peluqueriaPepito.com. Existen dominios gratuitos pero si quieres uno con ciertas características especiales, como por ejemplo, uno que sea fácil de recordar, debes comprar uno. A modo de ejemplo y suposición, yo como dueño de una agencia de remises o taxis, preferiría que el número de teléfono sea un 4393939 o algo similar, de manera de estar siempre en la mente del cliente",
      imageUrl: "images/thumbs-up.jpg",
    });
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

      {/* <ButtonDonacion /> */}
      <div className="min-h-screen bg-white text-gray-900 font-inter">

      {/* ── HERO ── */}
      <section className="relative bg-black text-white overflow-hidden min-h-[60vh] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black" />
        {/* Grid decorativo */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 pb-16 pt-32"
        >
          <p className="text-gray-400 text-[12px] tracking-[0.5em] uppercase mb-4">
            Tecnología · Negocios · Web
          </p>
          <h1 className="text-5xl sm:text-8xl font-black tracking-[-0.04em] leading-[0.85] mb-6">
            TU SITIO<br />WEB
          </h1>
          <div className="w-16 h-px bg-gray-500 mb-6" />
          <p className="text-gray-300 text-lg sm:text-xl font-light max-w-xl leading-relaxed">
            Una guía práctica para llevar tu negocio a internet
          </p>
        </motion.div>
      </section>

      {/* ── INTRODUCCIÓN ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">Introducción</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              Tu empresa,<br />
              <span className="text-gray-300 font-light italic">en internet</span>
            </h2>
            <div className="w-10 h-0.5 bg-black mb-8" />
            <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
              Cualquier empresa, sin importar su tamaño, debería contar con un sitio web. Es el medio mediante el cual personas de todo el mundo pueden acceder y conocer tu compañía. Tener presencia online no es difícil ni requiere grandes inversiones.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 pt-2"
          >
            {[
              { num: "01", label: "Hosting", desc: "El espacio donde se guardará tu sitio web. Garantiza que esté disponible las 24hs, seguro y protegido." },
              { num: "02", label: "Dominio", desc: "El nombre único que identifica tu sitio, como www.tumarca.com. Fácil de recordar para tus clientes." },
              { num: "03", label: "Desarrollo", desc: "El costo de construir el sitio. Hoy existen opciones gratuitas que no requieren programación." },
            ].map(({ num, label, desc }) => (
              <div key={num} className="flex gap-5 group">
                <span className="text-4xl font-black text-gray-300 shrink-0 leading-none">{num}</span>
                <div>
                  <p className="font-black text-gray-900 tracking-tight text-justify">{label}</p>
                  <p className="text-gray-500 text-base font-light leading-relaxed text-justify">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── DIVIDER NIVEL 1 ── */}
      <section className="bg-black text-white py-14 px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex items-center gap-8"
        >
          <span className="text-8xl sm:text-9xl font-black text-gray-800 leading-none shrink-0">N1</span>
          <div>
            <p className="text-gray-500 text-[15px] tracking-[0.4em] uppercase mb-2">Nivel 1</p>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
              Tarjeta de presentación digital
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-xl">
              Presupuesto bajo · Resultado profesional · Sin conocimientos técnicos. Si sólo necesitás mostrar tu negocio con fotos, ubicación y contacto, este nivel es para vos.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── WIX ── */}
      <section className="py-20 sm:py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">Opción gratuita</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              WIX<br />
              <span className="text-gray-300 font-light italic">sin código</span>
            </h2>
            <div className="w-10 h-0.5 bg-black mb-8" />
            <p className="text-gray-600 text-base leading-relaxed text-justify">
              Creá páginas web con calidad profesional sin conocer ningún lenguaje de programación, completamente gratis. Más de 800 plantillas personalizables. Sin hosting, sin dominio extra, sin contratar a nadie.
            </p>
            <a
              href="https://es.wix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 border border-black text-black text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 hover:bg-black hover:text-white transition-colors duration-300"
            >
              Visitar WIX →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border border-gray-200" />
            <div className="relative z-10 bg-gray-50 h-90 flex items-center justify-center p-10 border border-gray-100">
              <img src={wixPage} alt="WIX" className="max-h-100 object-contain" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── GOOGLE SITES highlight ── */}
      <section className="bg-gray-50 py-16 px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">— También gratuito —</p>
          <blockquote className="text-2xl sm:text-3xl font-light text-gray-800 leading-relaxed italic mb-6">
            "Con Google Sites, en solo 20 minutos tenés tu sitio con hosting y dominio incluido."
          </blockquote>
          <a
            href="https://marroquineria-baggi.negocio.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors underline"
          >
            Ver ejemplo real →
          </a>
        </motion.div>
      </section>

      {/* ── DIVIDER NIVEL 2 ── */}
      <section className="bg-black text-white py-14 px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex items-center gap-8"
        >
          <span className="text-8xl sm:text-9xl font-black text-gray-800 leading-none shrink-0">N2</span>
          <div>
            <p className="text-gray-500 text-[15px] tracking-[0.4em] uppercase mb-2">Nivel 2</p>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
              Tienda online completa
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-xl">
              Vendé tus productos, recibí pagos y gestioná inventario. Mayor presupuesto · Mayor expansión · Conocimientos básicos suficientes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── PLATAFORMAS NIVEL 2 ── */}
      {[
        {
          tag: "Integrado con Mercado Libre",
          title: "Mercado Shops",
          italic: "todo en uno",
          desc: "Administrás tu tienda desde el mismo lugar que tus ventas en ML. Se integra con todas las redes sociales y es completamente personalizable. Publicá en tu Shop, en Mercado Libre o en ambos canales.",
          img: mShops,
          imgBg: "bg-yellow-50",
          reverse: false,
        },
        {
          tag: "Para emprendimientos",
          title: "Tienda Nube",
          italic: "desde cero",
          desc: "Ideal para quienes empiezan desde cero o ya venden en otras plataformas digitales. Sin costos por transacción ni mantenimiento mensual. Planes premium según la necesidad de tu negocio.",
          img: tiendaNube,
          imgBg: "bg-blue-50",
          reverse: true,
        },
        {
          tag: "Hosting y dominio",
          title: "Don Web",
          italic: "latinoamérica",
          desc: "Hosting y dominio para toda Latinoamérica. Podés crear tu propia tienda virtual sin programación. Valores moderados con planes mensuales o anuales según el servicio que necesites.",
          img: donWeb,
          imgBg: "bg-orange-50",
          reverse: false,
        },
        {
          tag: "E-commerce avanzado",
          title: "Shopify",
          italic: "pymes y grandes",
          desc: "Ofrece herramientas para dueños de ecommerce: generador de logos, fotos de stock y punto de venta. Permite vender sin inventario propio mediante dropshipping con Oberlo.",
          img: shopify,
          imgBg: "bg-green-50",
          reverse: true,
        },
      ].map(({ tag, title, italic, desc, img, imgBg, reverse }, i) => (
        <section key={title} className="py-20 sm:py-24 px-6 sm:px-12 bg-white border-t border-gray-100">
          <div className={`max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center`}>
            <motion.div
              initial={{ opacity: 0, x: reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={reverse ? "order-1 lg:order-2" : ""}
            >
              <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">{tag}</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                {title}<br />
                <span className="text-gray-300 font-light italic">{italic}</span>
              </h2>
              <div className="w-10 h-0.5 bg-black mb-8" />
              <p className="text-gray-600 text-base leading-relaxed font-light">{desc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: reverse ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative ${reverse ? "order-2 lg:order-1" : ""}`}
            >
              <div className={`absolute ${reverse ? "-bottom-4 -right-4" : "-top-4 -left-4"} w-full h-full border border-gray-200`} />
              <div className={`relative z-10 ${imgBg} h-56 flex items-center justify-center p-10`}>
                <img src={img} alt={title} className="max-h-80 object-contain" />
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ── WORDPRESS ── */}
      <section className="py-20 sm:py-24 px-6 sm:px-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-4">Blogs y cursos</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              WordPress<br />
              <span className="text-gray-300 font-light italic">50.000 plugins</span>
            </h2>
            <div className="w-10 h-0.5 bg-black mb-8" />
            <p className="text-gray-600 text-base leading-relaxed font-light">
              Ideal si vendés cursos o dependés de suscriptores. Más de 50.000 plugins gratuitos para ampliar la funcionalidad de tu sitio. No requiere programación, pero sí cierta experiencia en la plataforma.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border border-gray-200" />
            <div className="relative z-10 bg-blue-50 h-56 flex items-center justify-center p-10">
              <img src={wordPress} alt="WordPress" className="max-h-80 object-contain" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DIVIDER NIVEL 3 ── */}
      <section className="bg-black text-white py-14 px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex items-center gap-8"
        >
          <span className="text-8xl sm:text-9xl font-black text-gray-800 leading-none shrink-0">N3</span>
          <div>
            <p className="text-gray-500 text-[15px] tracking-[0.4em] uppercase mb-2">Nivel 3</p>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
              Desarrollo a medida
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-xl">
              Alta complejidad · Presupuesto elevado · Equipo profesional dedicado. Para sitios que requieren lógica propia y no pueden resolverse con plataformas estándar.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── TEXTO NIVEL 3 ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-600 text-base leading-relaxed font-light mb-6 text-justify">
              Puede que la expansión del sitio no sea muy elevada, pero su complejidad sí lo sea. Esto implica presupuesto elevado y contratar uno o varios programadores.
            </p>
            <p className="text-gray-600 text-base leading-relaxed font-light text-justify">
              Sería muy complicado que el sitio de un banco sea realizado con WordPress o Wix. Sin embargo, eso no significa que vos como emprendedor tengas que recorrer el mismo camino.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-black text-white p-8"
          >
            <p className="text-gray-400 text-[10px] tracking-widest uppercase mb-4">Reflexión final</p>
            <p className="text-white text-lg font-light leading-relaxed italic text-justify">
              "Las opciones están. Solo depende de que evalúes cuál es la mejor alternativa para tu compañía, analizando PRO y CONTRAS, considerando tiempo, economía e ingresos."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      {/* <footer className="bg-black text-white py-10 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs tracking-[0.3em] uppercase font-light">PYMESYA</p>
          <p className="text-gray-600 text-xs tracking-widest uppercase">Tecnología · Negocios · Web</p>
        </div>
      </footer> */}

    </div>
      {/* <ButtonDonacion /> */}
    </>
  );
};

export default ConsejosSitioWeb;
