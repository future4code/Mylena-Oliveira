import React, {useEffect,useState} from "react";
import Header from "./Header"

import axios from 'axios'
import {
    UserPhoto,
    CardPerfil,
    ButtonSelecao,
    ButtonEstilizaçãoMatch,
    ButtonEstilizaçãoRecusar,
    ContainerDescricao
    
  } from "./styles";


const EscolherPerfis=(props)=> {

   const [selecaoPerfil, setSelecaoPerfil] = useState([])
   const [perfilSelecionado, setPerfilSelecionado] = useState([])

  
       const selecionarPerfil= ()=> {  
        const url='https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mylena-banu/person'
        axios.get(url,{
            headers:{
                Authorization:"mylena-banu"
            }
        }).then((res)=>{
           setSelecaoPerfil(res.data.profile)
        })
        .catch((err)=>{
            console.log(err)
            alert("Ocorreu um erro tente mais tarde é aqui", err)
        })
    }
    useEffect(() => {
        selecionarPerfil()
    },[]);
       
    const onClickMatch =()=>{
        const headers ={
            headers:{
                "Content-Type":"Application/json"
            }
        }

        const body = {
            "id":`${selecaoPerfil.id}`,
            "choice": true
        }
        const urlMatch='https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mylena-banu/choose-person'
        axios.post(urlMatch,body, headers)
        
       .then((res)=>{
             setPerfilSelecionado(res.data)    
        })
        .catch((err)=>{
            console.log(err)
            alert("Ocorreu um erro tente mais tarde", err)
        })
        selecionarPerfil()
    }
    const onClickRecusar=()=>{
        selecionarPerfil()
    }
    console.log(perfilSelecionado)
   return <div>
    
    <CardPerfil>
    <Header />
    <button onClick={props.irParaTelaMatches}>Matchs</button>

    <UserPhoto src={selecaoPerfil.photo}></UserPhoto>
   <ContainerDescricao>
   <h2>{selecaoPerfil.name}, {selecaoPerfil.age}</h2> 
   <h4> {selecaoPerfil.bio}</h4>  
 </ContainerDescricao>
    <ButtonSelecao>
    <ButtonEstilizaçãoRecusar onClick={onClickRecusar}> Não Curti</ButtonEstilizaçãoRecusar>
    <ButtonEstilizaçãoMatch onClick={onClickMatch}>Dar Match</ButtonEstilizaçãoMatch>
    </ButtonSelecao>
    </CardPerfil>

   </div>
}


export default EscolherPerfis;