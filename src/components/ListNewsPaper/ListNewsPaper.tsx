import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useFetchVip from '../../hooks/useFetchVip';
import { getNewsPaper } from '../../store/actions/actionsNewsPaper';
import NewPaper from "../ListNewsPaper/NewPaper/NewPaper"


import "./ListNewsPaper.css"
interface RootState {
  reducerNewsPaper: {
    listNewsPaper: any[];
  };
}

const ListNewsPaper = (codigo:any) => {
const dispatch=useDispatch()
const listNewsPaper = useSelector(
    (state: RootState) => state.reducerNewsPaper.listNewsPaper
  );


    return (
        <>
        <div className="ContainerListNewPaper">
            {
                listNewsPaper && listNewsPaper.map(newpaper => (
                    <div>
                        <Link style={{ textDecoration: 'none'}}  to={`/detailsNewPaper/${newpaper._id}`} state={{ newpaper }}>
                       
                            <NewPaper
                                key={newpaper._id}
                                newpaper={newpaper}
                            />

                    
                        </Link>
                    </div>
                ))
            }

        </div> 

        </>
    )
}

export default ListNewsPaper;