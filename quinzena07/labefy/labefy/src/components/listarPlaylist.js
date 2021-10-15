import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import AdicionarMusica from './adicionarMusicas'
import ListarMusica from './listarMusicas.js'


const CardPlaylist = styled.div`
display:flex;
flex-direction: column;
border:1px solid black;
padding:2px 2px 2px 2px;
background-color:#ffe5d9;
width:100%;

`

const Botao = styled.button`
width:36px;
height: 36px;
font-size:25px;

` 
export default class ListarPlaylist extends React.Component{
    state={
        playlistCriadas:[],
        detalhesPlaylist:[]
    }


    componentDidMount(){
        this.listagemPlaylist()
    }
    listagemPlaylist =()=>{
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      
        axios.get(url,{
            headers:{
                Authorization:"mylena-savala-banu"
            }
        }).then((res)=>{
          
            this.setState({playlistCriadas:res.data.result.list})
        })
        .catch((err)=>{
            console.log(err)
            alert("Ocorreu um erro tente mais tarde")
        })
    
    }
    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "mylena-savala-banu"
            }
        })
            .then((res) => {
                alert("Playlist deletada com sucesso!")
                this.listagemPlaylist()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }
 
render(){
    
    const listandoPlaylist = this.state.playlistCriadas
    .map((playlist)=>{
        return (
        <CardPlaylist 
            key={playlist.id}>
            <h2>Playlist: {playlist.name}</h2>
            <Botao onClick={() => this.deletarPlaylist(playlist.id)}>X
            </Botao>
            {/* <button onClick={this.props.irParaListarMusica}>Visualizar Musicas</button> */}
            <AdicionarMusica 
            idPlaylist={playlist.id}
            />
            <ListarMusica
            idPlaylist={playlist.id}
            />
        </CardPlaylist>
        )
    })
    return (
        <div>
            {listandoPlaylist}
            <button onClick={this.props.irParaPlaylist}>Voltar </button>  
        </div>

    )
}
}

