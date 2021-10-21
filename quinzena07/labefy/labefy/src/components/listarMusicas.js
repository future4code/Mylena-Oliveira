import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardMusicas = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: row;
border-radius:1px solid black;
padding:2px 2px 2px 2px;
color:snow;
background-color: #f58549;
width:70%;

border-bottom: 1px solid #ff4800;

`
export default class ListarMusica extends React.Component{
    state={
        detalhesMusicas:[]
    }
     
    componentDidMount(){
        this.listagemMusica(this.props.idPlaylist)
    }
   
    listagemMusica =()=>{
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`
      
        axios.get(url,{
            headers:{
                Authorization:"mylena-savala-banu"
            }
        }).then((res)=>{
            this.setState({detalhesMusicas:res.data.result.tracks})

        })
        .catch((err)=>{
            alert("Ocorreu um erro tente mais tarde",err)
        })
    
    }
    deletarMusica= () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks/${this.state.detalhesMusicas.trackId}`
        axios.delete(url, {
            headers: {
                Authorization: "mylena-savala-banu"
            }
        })
            .then((res) => {
                alert("Música deletada com sucesso!")
                this.listagemMúsica(this.props.idPlaylist)
            })
            .catch((err) => {
                console.log("Ocorreu um erro, tente novamente",err)
            })
    }


render(){

    const listarMusica = this.state.detalhesMusicas.map((musica)=>{
        return (
        <CardMusicas key={musica.id}>
            <h3>{musica.name}</h3>   
            <h4>{musica.artist}</h4>
            <audio controls src={musica.url}/>
            {this.listarMusica}
            <button onClick={() => this.deletarMusica(this.props.idPlaylist,musica.id)}>X</button>
        </CardMusicas>

        )
    })
    return (
        <div>
           {listarMusica}
        </div>

    )
}
}

