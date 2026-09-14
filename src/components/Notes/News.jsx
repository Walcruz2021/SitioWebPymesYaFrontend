import "./New.css";
import { useSelector, useDispatch } from "react-redux";
import { getNewsPaper } from "../../store/actions/actionsNewsPaper";
import React, { useEffect, useState } from "react";
import ListNewsPaper from "../ListNewsPaper/ListNewsPaper";

import NewHistory from "../../pages/Home/NewHistory";

const News = () => {
  const dispatch = useDispatch();
  const listNewsPaper = useSelector(
    (state) => state.reducerNewsPaper.listNewsPaper
  );

  useEffect(() => {
    dispatch(getNewsPaper());
  }, [dispatch]);

  return (
    <>
     
     {/* newHistory es la card que se muestra en la parte inferior derecha de la pantalla, con un efecto de animación y un botón para cerrarla. */}
      <NewHistory/> 

      {/* listado de las noticias que se muestran en la parte central de la pantalla, con un efecto de animación y un botón para cerrarlas. */}
      <ListNewsPaper />
      
    </>
  );
};

export default News;
