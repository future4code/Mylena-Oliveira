import styled from "styled-components"

export const CardPerfil = styled.div `

  height: 560px;
  width: 348px;
  padding: 0px 0px 50px 0px;
  box-shadow: 1px 1px 5px #9b2226;
  border-radius: 9px;
  /* margin-top: 40px;
  margin-bottom: 40px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin:0px 0px 5px 520px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
    margin:0px 0px 0px 0px;

  }
 
`

export const Botoes = styled.div `
  height: 45px;
  width: 345px;
  margin-top: 1px;
  margin-bottom: 5px;
  display:flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px #9b2226;
  border-radius: 9px;
  background-color: #9b2226;
  color:snow; 
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
  }
`

export const iconeMatch = styled.button`
  max-height: 305px;
    max-width: 5px;
    background-color: green;
  
`
export const UserPhoto = styled.img`
    height: 50vh;
    width: 42vh;
    margin-right: 10px;
    border-radius: 5%;
    transition: all 0.3s ease;
  overflow: hidden;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 60vw;
    margin-right:0px;
  }
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`

export const PostPhoto = styled.img`
    width: 100%;
    transition: all 0.3s ease;
    overflow: hidden;
`

export const ContainerDescricao = styled.div`
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
   
`

export const ButtonSelecao = styled.div`
display:flex;
@media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 60vw;
    margin-right:0px;
  }

`

export const ButtonEstilizaçãoMatch = styled.button`
    margin-left: 10px;
    color:snow;
    background-color: #38b000;
    border-radius: 8px;
    border: none;
    width:13vh;
    height:6vh;
    transition: all 0.3s ease;
  overflow: hidden;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`

export const ButtonEstilizaçãoRecusar = styled.button`
    color:snow;
    background-color: #9b2226;
    border-radius: 8px;
    border: none;
    width:13vh;
    height:6vh;
    transition: all 0.3s ease;
    overflow: hidden;
    :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  `

  export const ButtonEstilizaçãoMeusMatchs = styled.button`
      margin-left: 10px;

    color:snow;
    background-color: #0077b6;
    border-radius: 8px;
    border: none;
    width:13vh;
    height:6vh;
    transition: all 0.3s ease;
    overflow: hidden;
    :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`


