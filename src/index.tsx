// import ReactDOM from 'react-dom';
// import AppEcommerce from './AppEcommerce';
// import Home from './pages/Home/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );


import React from 'react';
import {Provider} from "react-redux"
import { createRoot } from 'react-dom/client';
import { store } from './store'
import Home from './pages/Home/Home';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <React.StrictMode>

      <Home />

  </React.StrictMode>
);
