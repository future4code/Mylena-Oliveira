import React from 'react';
import {  
    Link
  } from "react-router-dom";

  import {
    Background,
    ButtonEstilizacao,
    Container,

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