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
     
      <NewHistory/>
      <ListNewsPaper />
      
    </>
  );
};

export default News;
