import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import { BASE_URL } from "../constants/base_url";
import useRequestData from "../Reutilizavel/useRequestData";
import axios from 'axios';
import {
    Background,
    ButtonEstilizacao,
    ContainerForm,
    ContainerBotoes,
    DivInputForm,
    ContainerListTrip
  } from "./styles";
  

export const ApplicationForm = ()=>{

    const [form,setForm]=useState({
        name:'',
        age:0,
        applicationText:'',
        profession:'',
        country:'',
        trip:''    
        

    })

    const [nameTrips] = useRequestData(`${BASE_URL}/mylena-savala-banu/trips`)

    // const optionsArray = nameTrips.map((item)=>{
    //     return(
    //    <option >{item.name}</option>
    //     )
    // })
    

    const onChangeInput = (e) => {
        const newValue=(e.target.value);
        const fieldName=e.target.name

        setForm({...form, [fieldName]: newValue})
    }

    const history = useHistory()

    const goBack = ()=>{
        history.goBack()
    }
    const Submit = (event)=>{
      event.preventDefault()
    //   const body = {
    // //   form.name,
    //     age,
    //     applicationText,
    //     profession,
    //     country,
    //     trip       
    //     }
        axios.post(`${BASE_URL}/mylena-savala-banu/trips/${nameTrips.id}/apply`,form,{
            headers:{
                Authorization:"mylena-savala-banu"
            }
        }).then((res)=>{
            alert("Formulário enviado com sucesso",res)
          
        })
        .catch((err)=>{
            console.log(err)
          
        })
}
 
const nameTripsSelect = nameTrips
    .map((trip)=>{
        return (
            <div
            key={trip.id}> 
            <h4>{trip.name}</h4>
            </div>
        )
    })

return (

<Background>   
 <ContainerForm> 
    <h1>Inscreva-se para uma viagem!<br/>Garanta sua vaga</h1>
            <DivInputForm>

            <h4>Viagens Disponiveis</h4>
            <select 
            onChange={onChangeInput}
            >
            {nameTripsSelect}
        </select>

    <h4>Nome:</h4>
 <input 

 placeholder="Nome: "
 name={'name'}
 value={form['name']}
 onChange={onChangeInput}
/>
<h4>Idade: </h4>
<input 
 name={"age"}
 value={form['age']}
 placeholder="Idade: "
 onChange={onChangeInput}
/>
 <h4>Texto de Candidatura: </h4>
<input 
 name={"applicationText"}
 value={form['applicationText']}
 placeholder="Texto de Candidatura: "
 onChange={onChangeInput}
/>

<h4>Profissão: </h4>
<input 
name={"profession"}
value={form['profession']}
 placeholder="Profissão: "
 onChange={onChangeInput}
 />
<h4>País: </h4>
<input 
 name={"country"}
 value={form['country']}
 placeholder="Pais: "
 onChange={onChangeInput}
/>
<br/>
      </DivInputForm>
            <ContainerBotoes>
              <ButtonEstilizacao onClick={goBack}>Voltar</ButtonEstilizacao>
              <ButtonEstilizacao onClick={Submit}>Enviar Formulário</ButtonEstilizacao>
              </ContainerBotoes>
          </ContainerForm>
 
</Background>

);
};


