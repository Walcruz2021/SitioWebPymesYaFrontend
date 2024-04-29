import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {

  setTimeout(() => {
    window.location.href = '/';
  }, 2000);

  return (
    <div className='containerGlobalWeb'>
      <h1>404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      {/* <Link to="/">Volver al inicio</Link> */}
    </div>
  );
};

export default Error404;