
import React, {useEffect, useState} from "react";
import axios from 'axios'

import {
  ButtonEstilizacao,
  Lista,
  Botoes
  
} from "./styles";

const url ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mylena-banu/clear"

const Resetar=(props)=> {

   const [limparDados, setLimparDados] = useState([])   

       const LimparDados= ()=> {     
         const headers ={
            headers:{
                "Content-Type":"Application/json"
            }
        }
 
        axios.put(url,headers)
        .then((res)=>{
         setLimparDados(res.data.message)
         alert('Sucesso, matchs exclúidos com sucesso')
        })
        .catch((err)=>{
            console.log(err)
            alert("Ocorreu um erro tente mais tarde", err)
        })
    }
    useEffect(() => {
      LimparDados()
  },[]);
     

   return <Lista>
      <Botoes>
        <ButtonEstilizacao onClick={props.irParaEscolherPerfil}>Voltar</ButtonEstilizacao>
        </Botoes>
       
   </Lista>
}


export default Resetar;