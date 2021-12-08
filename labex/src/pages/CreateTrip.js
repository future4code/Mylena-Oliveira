import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import { BASE_URL } from "../constants/base_url";
import useRequestData from "../Reutilizavel/useRequestData";
import axios from 'axios'

export const CreateTrip = ()=>{

    const [name, setName]= useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("") 
    const [durationInDays, setDurationInDays] = useState(0)   
 
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    
    const onChangePlanet= (e) => {
        setPlanet(e.target.value);
    }
    const onChangeDate = (e) => {
        setDate(e.target.value);
    }
    
    const onChangeDescription= (e) => {
        setDescription(e.target.value);
    }
    const onChangeDurationInDays= (e) => {
        setDurationInDays(e.target.value);
    }
    const history = useHistory()

    const goBack = ()=>{
        history.goBack()
    }
    const Submit = (event)=>{
      event.preventDefault()
      const body = {
      name,
        planet,
        date,
        description,
        durationInDays        
        }
        axios.post(`${BASE_URL}/mylena-savala-banu/trips/`,body,{
            headers:{
                Authorization:"mylena-savala-banu"
            }
        }).then((res)=>{

            alert("Viagem inscrita com sucesso",res)
        })
        .catch((err)=>{
            console.log(err)
          
        })
}
 
return (
<div>
    <h1>Criar Nova Viagem!</h1>

    <h4>Nome da viagem:</h4>
 <input 
 name="name"
 value={name}
 onChange={onChangeName}
/>

 <h4>Planeta: </h4>
<input 
 name="planet"
 value={planet}
 onChange={onChangePlanet}
/>
<h4>Data: </h4>

<input 
name="date"
value={date}
 onChange={onChangeDate}
 />

<h4>Descrição: </h4>
<input 
 name="description"
 value={description}
 placeholder="Insira a descrição: "
 onChange={onChangeDescription}
/>

<h4>Duração em dias </h4>

<input 
 name="durationInDays"
 value={durationInDays}
 onChange={onChangeDurationInDays}
/>
<button onClick={goBack}>Voltar</button>
<button onClick={Submit}>Enviar Formulário</button>

</div>

);
};