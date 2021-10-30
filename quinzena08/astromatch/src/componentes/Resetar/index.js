
import React, {useEffect, useState} from "react";
import axios from 'axios'


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
         alert('Sucesso, dados exclúidos com sucesso')
         console.log("eai")
        })
        .catch((err)=>{
            console.log(err)
            alert("Ocorreu um erro tente mais tarde", err)
        })
    }
    useEffect(() => {
      LimparDados()
  },[]);
     

   return <div>

 <button onClick={props.irParaEscolherPerfil}>Matchs</button>

   </div>
}


export default Resetar;