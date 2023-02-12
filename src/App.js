
import { useState } from "react";
import { BrowserRouter as Router,Route,Routes ,Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Home/Contact";
import DetailsCompany from "./pages/Home/DetailsCompany"
import OurCompany from "./pages/Home/OurCompany";
import Services from "./pages/Home/Services";

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

    </Switch>
 </Router>




    
    </>
  );
}

export default App;
