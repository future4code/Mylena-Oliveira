import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
height:642px; 
background-color:#ff9100;

`
const ContainerInput = styled.div`
margin-left: 1px;
font-size:32px;
display: flex;
  flex-direction: row;
align-items: center;
justify-content: center;
`

const Input = styled.input`
  display: block;
  width:32vh ;
  background-color: snow;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid black;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-left: 0%;
  }
  ::placeholder {
    color: black;
    margin-right: 5%;
     padding: 10px 10px 10px 10px;
  }
`

const Botoes = styled.button`
margin-top: 2px;
  width: 20vw;
  height: 6vh;
  background-color: #ff5400;
  color: white;
  border-radius: 20px;
  border: none;
  font-size: 15px;`

const ContainerBotoes = styled.div`
 display:flex;
 align-items: center;
 justify-content: center;
  `

export default class adicionarPlaylist extends React.Component{
    state={
        nomePlaylist:'',
    }

    onChangeCriarPlaylist =(event) =>{
        this.setState({nomePlaylist:event.target.value})

    }
    criarPlaylist =()=>{
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
        name:this.state.nomePlaylist
        }
        axios.post(url,body,{
            headers:{
                Authorization:"mylena-savala-banu"
            }
        }).then((res)=>{
            console.log(res)
            alert("Playlist adicionada com sucesso!")
            this.setState({nomePlaylist:""})

        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }
render(){
    return (
        <Container>

        {/* <h1>Adicione Playlist a sua Biblioteca</h1> */}
        <ContainerInput>
            <h5>Criar Nome da Playlist</h5>
           
        <Input 
        placeholder='Nome Playlist'
        value={this.state.nomePlaylist}
        onChange={this.onChangeCriarPlaylist}
        /> 
  </ContainerInput>
  <ContainerBotoes>
      <Botoes onClick={this.criarPlaylist}>Criar Playlist </Botoes>
        <Botoes onClick={this.props.irParaListarPlaylist}>Listar Playlist</Botoes>
        </ContainerBotoes>
        </Container>
    )
}
}