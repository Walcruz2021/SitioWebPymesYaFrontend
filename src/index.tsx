// import ReactDOM from 'react-dom';
// import AppEcommerce from './AppEcommerce';
// import Home from './pages/Home/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );


// import React from 'react';
// import {Provider} from "react-redux"
// import { createRoot } from 'react-dom/client';
// import { store } from './store'
// import Home from './pages/Home/Home';
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
// const root = createRoot(document.getElementById('root') as HTMLDivElement);

// root.render(
//   <React.StrictMode>

//       <Home />

//   </React.StrictMode>
// );


// root.render(
//   <React.StrictMode>
// <BrowserRouter>
//       <Home />
// </BrowserRouter>

//   </React.StrictMode>
// );

// ReactDOM.render((
//   <BrowserRouter>
//       <App/>
//   </BrowserRouter>
// ), document.getElementById('root')); 

// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App"


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);