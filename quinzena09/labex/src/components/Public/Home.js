import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Home = ()=>{
return (
<div>   
          <div>
             <button><Link to="/AdminHome">Administrativo</Link></button>
              <button><Link to="/ListTrips">Lista de Viagens</Link></button>
          
          </div>
        </div>

);
};