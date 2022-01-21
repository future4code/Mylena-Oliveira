import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import { BASE_URL } from "../constants/base_url";
import axios from 'axios';
import { useProtectedPage } from '../hooks/useProtectedPage'
import {
    Background,
    ButtonEstilizacao,
    ContainerForm,
    ContainerBotoes,
    DivInputForm
  } from "./styles";
  

export const CreateTrip = ()=>{

    useProtectedPage()

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
                
                Authorization: localStorage.getItem("token")

            }
        }).then((response)=>{
            
if(response.token) {
    alert("Viagem inscrita com sucesso")

} else {
    alert(response.error.data.message);
}
        })
        .catch((err)=>{
            console.log(err)
          
        })
}



 
return (

<Background>   
          <ContainerForm>
           
          <h1>Criar Nova Viagem!</h1>        
 <DivInputForm>
   

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
type="date"
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







