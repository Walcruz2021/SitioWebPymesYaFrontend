import { useState } from "react";
import { BrowserRouter as Router,Route,Routes,Link,HashRouter,Switch,Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Home/Contact";
import ContactPubli from "./pages/Home/ContactPubli";
import DetailsCompany from "./pages/Home/DetailsCompany"
import OurCompany from "./pages/Home/OurCompany";
import Services from "./pages/Home/Services";
import ServiceProf from "./pages/Home/ServiceProf";
//import EmpleosProf from "./pages/Home/EmpleosProf";
import ListNotes from "./components/ListNotes/listNotes";
import Finanzas from "./pages/Home/Finanzas"
import VariacionesBolsa from "./pages/Home/VariacionesBolsa"
import WinnerPrime from "./pages/Home/CardWinner"
import PaginadoWinnersPrime from "./pages/Home/PaginadoWinnersPrime"
import InversionBolsa from "./pages/Home/InversionBolsa";
import InversionBolsa2 from "./pages/Home/InversionBolsa2";
import ConsejosSitioWeb from "./pages/Home/ConsejosSitioWeb";
import Leliqs from "./pages/Home/Leliqs"
import LoginFirebase from "./pages/Home/LoginFirebase";
//import LoginGoogle from "./pages/Home/LoginGoogle";
import CardAddEditService from "./pages/Home/CardAddEditService"
// import FormServices from "./pages/Home/FormServices";
import CrisisTequila from "./pages/Home/CrisisTequila"
import FormEditService from "./forms/FormEditService"
import FormAddService from "./forms/FormAddService"
import CardEditServices from "./pages/Home/CardEditServices"
import Error404 from "./pages/Home/Error404";
import SistemaGestionTurnos from "./pages/Home/SistemaGestionTurnos"
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

//EN MI PACKAGE JSON SE ESTA UTILIZANDO EL REACT-ROUTER-DOM V5
//Por lo tanto, debe usar Switch Y no Routes, Routes es solo parareact-router-dom v6
//   Se utiliza switch y no 
//<Routes>
//   <Switch>
//     <Route path="/" element={<App />} />
//     <Route path="*" element={<Whoops404 />} />
//   </Switch>
// </Routes>

  const [show, setShow] = useState(false);
  return (
    <>
  
 <Router>
   <Switch >
        <Route exact path="/"><Home/></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/ourCompany"><OurCompany /></Route>
        <Route path="/services"><Services /></Route>
        <Route path="/detailsCompany/:id"><DetailsCompany /></Route>
        <Route path="/contactPubli"><ContactPubli /></Route>
        <Route path="/servicios"><ServiceProf/></Route>
        {/* <Route path="/empleos"><EmpleosProf/></Route> */}
        <Route path="/histories"><ListNotes/></Route>
        <Route path="/finanzas"><Finanzas/></Route>
        <Route path="/variaciones"><VariacionesBolsa/></Route>
        <Route path="/winnersPrime"><PaginadoWinnersPrime/></Route>
        <Route path="/inversionBolsa"><InversionBolsa/></Route>
        <Route path="/inversionBolsaP2"><InversionBolsa2/></Route>
        <Route path="/leliqs"><Leliqs/></Route>
        <Route path="/crisisMexico"><CrisisTequila/></Route>
        <Route path="/tecnologias/sitioWeb"><ConsejosSitioWeb/></Route>
        {/* <Route path="/tecnologias/sitioWeb"><ConsejosSitioWeb/></Route> */}
        <Route path="/editService/:idServ"><FormEditService/></Route>
        <Route path="/editServices"><CardEditServices/></Route>
        <Route path="/addService"><FormAddService/></Route>
        <Route path="/addEditService"><CardAddEditService/></Route>
        <Route path="/login"><LoginFirebase/></Route>
        <Route path="/tecnologias/sistemaGestionTurnos"><SistemaGestionTurnos/></Route>
        <Route path="*"><Error404 /></Route>
        <Redirect to="/" />
        {/* <Route path="/formServices"><FormServices/></Route> */}
    </Switch>
 </Router>
    </>
  );
}

export default App;