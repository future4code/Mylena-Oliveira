import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ListarPlaylist from './listarPlaylist'

const ContainerPrincipal = styled.div`
display:flex;
flex-direction:column
`


export default class adicionarMusica extends React.Component{
    state={
        dadosMusica:[],
        nomeMusica:'',
        artista:'',
        url:'',
    }

    onChangeMusica =(event) =>{
        this.setState({nomeMusica:event.target.value})
    }
    onChangeArtista =(event) =>{
        this.setState({artista:event.target.value})
    }
    onChangeUrl =(event) =>{
        this.setState({url:event.target.value})
    }
  
    adicionarMusicanaPlaylist =()=>{
        
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`
        const body = {
        name:this.state.nomeMusica,
        artist:this.state.artista,
        url:this.state.url
        }
        axios.post(url,body,{
            headers:{
                Authorization:"mylena-savala-banu"
            }
        }).then((res)=>{
            alert("Música adicionada com sucesso!")
            console.log(res)
            this.setState({nomeMusica:'',artista:'', url:''})
          
        })
        .catch((err)=>{
            alert("ERRO",err)
          
        })

    }
render(){   
 
    
    return (
        <ContainerPrincipal>
        <h3>Adicione músicas em sua playlist</h3>
        <p>Nome Música:</p>
        <input 
        placeholder='Nome Musica'
        value={this.state.nomeMusica}
        onChange={this.onChangeMusica}

        /> 
       <p>Nome Artista:</p>
         <input 
        placeholder='Nome Artista'
        value={this.state.artista}
        onChange={this.onChangeArtista}
        /> 
        <p>Url Música:</p>

         <input 
        placeholder='Url'
        value={this.state.url}
        onChange={this.onChangeUrl}
        />           
        <button onClick={()=> this.adicionarMusicanaPlaylist(this.props.idPlaylist)}>Adicionar Música</button>
        
        </ContainerPrincipal>
    )
}

}