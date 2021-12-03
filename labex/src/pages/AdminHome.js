import React from 'react';
import {  
    Link
  } from "react-router-dom";

export const AdminHome = ()=>{
return (
<div>
    <h1>Página Administrador</h1>
<button>
<Link to="/TripDetails">Trip Details Page</Link>
</button>
<button>
<Link to="/CreateTrip">Create Trip Page</Link>
</button>
</div>

);
};



