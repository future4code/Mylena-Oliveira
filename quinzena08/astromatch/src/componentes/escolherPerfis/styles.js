import styled from "styled-components"

export const CardPerfil = styled.div `

    height: 70vh;
  width: 24vw;
  padding: 0px 0px 50px 0px;
  box-shadow: 1px 1px 5px #9b2226;
  border-radius: 9px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
 
`

export const UserPhoto = styled.img`
    height: 50vh;
    width: 24vh;
    margin-right: 10px;
    border-radius: 5%;
`

export const PostPhoto = styled.img`
    width: 100%;
`

export const ContainerDescricao = styled.div`
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
   
`

export const ButtonSelecao = styled.div`
    margin-left: 10px;
`
export const ButtonEstilizaçãoMatch = styled.button`
    margin-left: 10px;
    color:snow;
    background-color: #38b000;
    border-radius: 8px;
    border: none;
    width:8vh;
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
    margin-left: 10px;
    color:snow;
    background-color: #9b2226;
    border-radius: 8px;
    border: none;
    width:8vh;
    height:6vh;
    transition: all 0.3s ease;
    overflow: hidden;
    :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`

export const ContainerHeader = styled.div `
    height: 4vh;
  width: 100%;
  padding: 0px 0px 20px 0px;
  background-color: #9b2226;
  margin-top: 60px;
  margin-bottom: 10px;
  color:snow;  
  display: flex;
  justify-content: space-evenly;
  justify-items: stretch;
  text-align: center;
  align-items: center;
`
