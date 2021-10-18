import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import AdicionarMusica from './adicionarMusicas'
import ListarMusica from './listarMusicas.js'

const ContainerPlaylist =styled.div`
display:flex;
justify-content: start;
background-color:#f58549;
width: 60%;

`
const CardPlaylist = styled.div`
display:flex;
flex-direction: column;
border-top:5px  black;
justify-content: center;
align-items: left;
background-color: #f58549;
border: 1px solid black;

`
const Botao = styled.button`
width:36px;
height: 22px;
font-size:15px;

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
    <ListarMusica 
    idPlaylist ={this.state.playlistCriadas}
    />
    const listandoPlaylist = this.state.playlistCriadas
    
    .map((playlist)=>{
        return (
        <CardPlaylist 
            key={playlist.id}>
            <h2>Playlist: {playlist.name}</h2>
            <Botao onClick={() => this.deletarPlaylist(playlist.id)}>X
            </Botao>
            <ContainerPlaylist>

            <ListarMusica 
            idPlaylist ={playlist.id}
            />
            <AdicionarMusica 
            idPlaylist={playlist.id}
            />
         </ContainerPlaylist>

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

