import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import { BASE_URL } from "../constants/base_url";
import useRequestData from "../Reutilizavel/useRequestData";
import useRequestPost from "../Reutilizavel/useRequestPost";



export const ApplicationForm = ()=>{

    const [form, setForm]= useState({name:"", age:0, applicationText:"", profession:"", country:""})

    const [nameTrips] = useRequestData(`${BASE_URL}/mylena-banu/trips`)

    // const [sendForm] = useRequestPost(`${BASE_URL}/mylena-banu/trips/${nameTrips.id}/apply`, form.id,form.name,form.age,form.applicationText,form.profession,form.country,form.local)

    const optionsArray = nameTrips.map((item)=>{
        return(
       <option >{item.name}</option>
        )
    })
    

    const onChange =(event) =>{
        const{name, value}=event.target
        setForm({...form,[name]:value})
    }

    const history = useHistory()

    const goBack = ()=>{
        history.goBack()
    }
    const Submit = (event)=>{
      event.preventDefault()
    //   const body = {
    //     name,
    //     age,
    //     applicationText,
    //     profession,
    //     country
    //     }
    //     axios.post(`${BASE_URL}/mylena-banu/trips/${nameTrips.id}/apply`,body,{
    //         headers:{
    //             Authorization:"mylena-banu"
    //         }
    //     }).then((res)=>{
    //         alert("Formulário enviado com sucesso",res)
 
          
    //     })
    //     .catch((err)=>{
    //         console.log(err)
          
    //     })
}
 
return (
<div>
    <h1>Inscreva-se para uma viagem! Garanta sua vaga</h1>
  
    <form onSubmit={Submit}>
    <select
     value={form.id}
     >
         {optionsArray}
    </select>


 <input 
 name="name"
 placeholder="Nome: "
 value={form.name}
 onChange={onChange}
 required/>

<input 
 name="age"
 value={form.age}
 placeholder="Idade: "
 onChange={onChange}
 required/>
 
<input 
 name="applicationText"
 value={form.applicationText}
 placeholder="Texto de Candidatura: "
 onChange={onChange}
 required/>
 
<input 
name="profession"
value={form.profession}
 placeholder="Profissão: "
 onChange={onChange}
 required/>

<input 
 name="country"
 value={form.country}
 placeholder="Pais: "
 onChange={onChange}
 required/>
<button onClick={goBack}>Voltar</button>
<button>Enviar Formulário</button>
</form>
</div>

);
};