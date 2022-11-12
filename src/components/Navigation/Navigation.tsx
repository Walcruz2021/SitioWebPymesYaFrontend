import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import NavBar from '../NavBar/NavBar'

type Props = {
    handleOpen: (state: boolean) => void;
}

const Navigation = ({ handleOpen }: Props) => {
    return (
        <>
           
            <Switch>
                <Route exact path='/' component={Home} />
             
            </Switch>
        </>
    )
}

export default Navigation;
