import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import {
    Background,
    UserPhoto,
    ButtonEstilizacao,
    Container,
    Botoes
  } from "./styles";


export const Home = ()=>{
return (
<Background>   
          <Container>
            
             <ButtonEstilizacao><Link to="/Login">Administrativo</Link></ButtonEstilizacao>
              <ButtonEstilizacao><Link to="/ListTrips">Lista de Viagens</Link></ButtonEstilizacao>
          </Container>
 </Background>

);
};