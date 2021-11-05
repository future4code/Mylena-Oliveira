import styled from "styled-components"


export const  UserPhoto = styled.img`
    height: 48px;
    width: 13vh;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 5%;
    transition: all 0.3s ease;
  overflow: hidden;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`

export const ButtonEstilizacao = styled.button`
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


export const Lista = styled.div`
  height: 560px;
  width: 348px;
  padding: 0px 0px 50px 0px;
  box-shadow: 1px 1px 5px #9b2226;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin:0px 0px 5px 520px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
    margin:0px 0px 0px 0px ;
  }
`

export const Botoes = styled.div `
   height: 45px;
  width: 348px;
  margin-top: 1px;
  margin-bottom: 5px;
  box-shadow: 1px 1px 5px #9b2226;
  border-radius: 9px;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #9b2226;
  color:snow; 
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
  }
`

