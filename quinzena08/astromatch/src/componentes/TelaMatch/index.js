
import React, {useEffect,useState} from "react";


import axios from 'axios'
import {
    UserPhoto,
    CardPerfil,
    Lista,
    Botoes
    
    
    
  } from "./styles";

const url='https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mylena-banu/matches'

const TelaMatches=(props)=> {

   const [perfilSelecionado, setPerfilSelecionado] = useState([])   

       const perfisSelecionados= ()=> {      
        axios.get(url,{
            headers:{
                Authorization:"mylena-banu"
            }
        }).then((res)=>{
           setPerfilSelecionado(res.data.matches)
        })
        .catch((err)=>{
            console.log(err)
            alert("Ocorreu um erro tente mais tarde", err)
        })
    }
    useEffect(() => {
        perfisSelecionados()
    },[]);

    const listarMatches = perfilSelecionado.map((match)=>{
        return (
        <CardPerfil 
            key={match.id}>
           
            <UserPhoto src={match.photo}></UserPhoto>
            {match.name}
         
        </CardPerfil>
        
        )
    })
   return <div>
     
   <Lista>
        <Botoes>
        <button onClick={props.irParaEscolherPerfil}>Matchs</button>
        <button onClick={props.irParaResetar}>Limpar</button>
        </Botoes>
       
        {listarMatches}
        
        </Lista>


   </div>
}


export default TelaMatches;
