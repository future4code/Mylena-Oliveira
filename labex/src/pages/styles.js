import styled from "styled-components"

export const Background = styled.div `
background: url("https://eskipaper.com/images/star-wallpaper-5.jpg");
    height: 600px;
    width: 100%;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    display:flex;
    justify-content:center;
    align-items: center;
`


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
    width:18vh;
    height:6vh;
    transition: all 0.3s ease;
    overflow: hidden;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`


export const Container = styled.div`
  height: 260px;
  width: 568px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: snow;
  box-shadow: 1px 1px 10px snow;
  padding:0px 0px 20px 00px;
`
export const ContainerListTrip = styled.div`
  height: 40vw;
  width: 86vw;
  display:flex;
  flex-direction: column;
  background-color: snow;
  box-shadow: 1px 1px 10px snow;
  padding:0px 0px 20px 00px;
`

export const ListTrip = styled.div`
  background-color: snow;
  box-shadow: 1px 1px 10px blueviolet;

`

export const DivTrip = styled.div`
 height: 232px;
  width: 864px;
  display:flex;
  background-color: snow;
  box-shadow: 1px 1px 10px blueviolet;
`

export const ContainerBotoes = styled.div`
display:flex;
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
