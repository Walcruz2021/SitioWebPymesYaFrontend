import "./New.css";
import { useSelector, useDispatch } from "react-redux";
import { getNewsPaper } from "../../store/actions/actionsNewsPaper";
import React, { useEffect, useState } from "react";
import ListNewsPaper from "../ListNewsPaper/ListNewsPaper";
import Ads from "../../pages/Home/Ads";
import NewHistory from "../../pages/Home/NewHistory";

const News = () => {
  const dispatch = useDispatch();
  const listNewsPaper = useSelector(
    (state) => state.reducerNewsPaper.listNewsPaper
  );

  let listFiltered = listNewsPaper.slice(0, 8);

  useEffect(() => {
    dispatch(getNewsPaper());
  }, []);

  return (
    <>
      <Ads />
      <NewHistory/>
      <ListNewsPaper />
    </>
  );
};

export default News;
