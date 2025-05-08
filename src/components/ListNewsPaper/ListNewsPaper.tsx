import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NewPaper from "../ListNewsPaper/NewPaper/NewPaper";
import "./ListNewsPaper.css";

interface RootState {
  reducerNewsPaper: {
    listNewsPaper: any[];
  };
}

const ListNewsPaper = (codigo: any) => {
  const dispatch = useDispatch();
  const listNewsPaper = useSelector(
    (state: RootState) => state.reducerNewsPaper.listNewsPaper
  );

  return (
    <>
      <div className="ContainerListNewPaper">
        {listNewsPaper &&
          listNewsPaper.map((newpaper) => (
            <div>
              <Link
                style={{ textDecoration: "none",color: "#707b7c" }}
                to={`/detailsNewPaper/${newpaper._id}`}
                state={{ newpaper }}
              >
                <NewPaper key={newpaper._id} newpaper={newpaper} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default ListNewsPaper;
