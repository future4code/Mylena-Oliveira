import React from 'react';
import {  
    Link
  } from "react-router-dom";

  import {
    Background,
    ButtonEstilizacao,
    Container,
    ContainerBotoes
  } from "./styles";

 

export const Home = ()=>{
return (
 

<Background>   
          <Container>
            <h1>Labex - Space Around</h1>
            <ContainerBotoes>
             <ButtonEstilizacao><Link to="/Login">Administrativo</Link></ButtonEstilizacao>
              <ButtonEstilizacao><Link to="/ListTrips">Lista de Viagens</Link></ButtonEstilizacao>
              </ContainerBotoes>
          </Container>
 </Background>

);
};