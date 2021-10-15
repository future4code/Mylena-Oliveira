import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
display:grid;
justify-items: center;
margin:0px 0px 0px 0px;
padding:0px 0px 0px 0px;
width:100%;
height:512px;
background-color:#ffe5d9;
`
const ContainerInput = styled.div`
width:100%;
height:512px;
background-color:#ffe5d9;
align-items: center;
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

        <h1>Adicione Playlist a sua Biblioteca</h1>
        <ContainerInput>
            <p>Insira o nome que deseja para a Playlist</p>
        <input 
        placeholder='Nome Playlist'
        value={this.state.nomePlaylist}
        onChange={this.onChangeCriarPlaylist}
        /> 
      <br/>
        <button onClick={this.criarPlaylist}>Criar Playlist</button>
        <button onClick={this.props.irParaListarPlaylist}>Listar Playlist</button>
        <button onClick={this.props.irParaListarMusica}>Visualizar Músicas</button>

        </ContainerInput>
        </Container>
    )
}
}