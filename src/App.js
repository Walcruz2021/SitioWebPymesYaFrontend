import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Home/Contact";
import ContactPubli from "./pages/Home/ContactPubli";
import DetailsCompany from "./pages/Home/DetailsCompany";
import DetailsNewPaper from "./components/ListNewsPaper/NewPaper/DetailsNewPaper"
import OurCompany from "./pages/Home/OurCompany";
import Services from "./pages/Home/Services";
import ServiceProf from "./pages/Home/ServiceProf";
//import EmpleosProf from "./pages/Home/EmpleosProf";
import ListNotes from "./components/ListNotes/listNotes";
import Finanzas from "./pages/Home/Finanzas";
import VariacionesBolsa from "./pages/Home/VariacionesBolsa";
import WinnerPrime from "./pages/Home/CardWinner";
import PaginadoWinnersPrime from "./pages/Home/PaginadoWinnersPrime";
import InversionBolsa from "./pages/Home/InversionBolsa";
import InversionBolsa2 from "./pages/Home/InversionBolsa2";
import ConsejosSitioWeb from "./pages/Home/ConsejosSitioWeb";
import Leliqs from "./pages/Home/Leliqs";
import LoginFirebase from "./pages/Home/LoginFirebase";
//import LoginGoogle from "./pages/Home/LoginGoogle";
import CardAddEditService from "./pages/Home/CardAddEditService";
// import FormServices from "./pages/Home/FormServices";
import CrisisTequila from "./pages/Home/CrisisTequila";
import FormEditService from "./forms/FormEditService";
import FormAddService from "./forms/FormAddService";
import CardEditServices from "./pages/Home/CardEditServices";
import Error404 from "./pages/Home/Error404";
import SistemaGestionTurnos from "./pages/Home/SistemaGestionTurnos";
import FormsRegister from "../src/forms/FormsRegister";
import NavBarBoostrapLogin from "./components/NavBar/NavBarBoostrapLogin";
import ButtonBarBoostrap from "./components/ButtonBar/ButtonBarBoostrap";
import { getUserLogin } from "./store/actions/actions";
import CardAddService from "./pages/Home/CardAddService";
import Negocios from "./pages/Home/Negocios";
import News from "./components/Notes/News";
import "./App.css";

//React Router es la librería que nos permite navegar entre rutas en una aplicación en React. Para instalarla ejecutamos lo siguiente en t
//terminal:
//npm install react-router-dom

//************ESTRUCTURA DEL ROUTER******** */
//Para poder utilizar React Router tenemos que meter en nuestra aplicación lo siguiente:

//Componente <Router></Router>, nos permite tener rutas dentro de una aplicación y navegar entre ellas.
//Componente <Switch></Switch>, es un contenedor que indíca al router dónde tiene que meter el contenido de las rutas.
//Componente <Route></Route>, que contendrá el contenido propio de cada ruta y a qué ruta pertenece.
//Componente <Link></Link>, que nos permite navegar entre rutas sin salirnos de la SPA.

const App = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.userDataEmail); // Esto depende de cómo manejes la autenticación en Redux
  //console.log(isAuthenticated, "---->");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getUserLogin());
  }, [dispatch]);

  useEffect(() => {
    // Simula la verificación de autenticación, por ejemplo, esperando por el token de Firebase
    const checkAuth = async () => {
      // Aquí va tu lógica para verificar si el usuario está autenticado o no.
      // Puedes usar Firebase auth, JWT, etc.
      setLoading(false); // Una vez que la verificación termina, deja de cargar
    };
    checkAuth();
  }, []);

  if (loading) {
    // Muestra un spinner o mensaje de "Cargando..." mientras verificas la autenticación
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <NavBarBoostrapLogin />
      <Routes>
        <Route exact path="/" element={<News/>} />
        <Route path="/negocios" element={<Negocios />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourCompany" element={<OurCompany />} />

        <Route path="/services" element={<Services />} />

        <Route path="/detailsCompany/:id" element={<DetailsCompany />} />
        <Route path="/detailSNewPaper/:id" element={<DetailsNewPaper />} />

        <Route path="/contactPubli" element={<ContactPubli />} />

        <Route path="/servicios" element={<ServiceProf />} />

        {/* <Route path="/empleos"><EmpleosProf/></Route> */}
        <Route path="/histories" element={<ListNotes />} />

        <Route path="/finanzas/bolsaValores" element={<Finanzas />} />

        <Route path="/variaciones" element={<VariacionesBolsa />} />

        <Route path="/winnersPrime" element={<PaginadoWinnersPrime />} />

        <Route path="/inversionBolsa" element={<InversionBolsa />} />

        <Route path="/inversionBolsaP2" element={<InversionBolsa2 />} />

        <Route path="/leliqs" element={<Leliqs />} />

        <Route path="/crisisMexico" element={<CrisisTequila />} />

        <Route path="/tecnologias/sitioWeb" element={<ConsejosSitioWeb />} />

        {/* <Route path="/tecnologias/sitioWeb"><ConsejosSitioWeb/></Route> */}
        <Route path="/editService/:idServ" element={<FormEditService />} />
        <Route path="/editService" element={<CardEditServices />} />
        
        {/* Rutas protegidas solo accesibles si estás autenticado */}
        {isAuthenticated ? (
          <Route path="/addService" element={<CardAddService />} />
          
        ) : (
          <Route path="/login" element={<LoginFirebase />} />
        )}
        
        {/* 
        <Route path="/addService" element={<FormAddService />} />
        <Route path="/login" element={<LoginFirebase />} /> */}

        <Route path="/addEditService" element={<CardAddEditService />} />

        <Route
          path="/tecnologias/sistemaGestionTurnos"
          element={<SistemaGestionTurnos />}
        />
        {/* 
        <Route path="*" element={<Error404 />} /> */}

        <Route path="/register" element={<FormsRegister />} />
        
        {/* Redirecciona a login si intentan acceder a rutas protegidas sin autenticación */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
        />
      </Routes>
      <ButtonBarBoostrap/>
    </BrowserRouter>
  );
};

export default App;
