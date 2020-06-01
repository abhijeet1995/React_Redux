import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Menu from './core/Menu'
import Login from './users/Login'
import Register from './users/Register'
const Routes = () => {
  return (
    <BrowserRouter>
    <Menu/>
      <Switch>
        <Route path='/signup' exact   component={Register} />
        <Route path='/signin' exact component={Login}/>
      </Switch>
    </BrowserRouter>    
  );
};

export default Routes;
