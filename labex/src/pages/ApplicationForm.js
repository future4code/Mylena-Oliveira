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
    DivInputForm
  } from "./styles";
  

export const ApplicationForm = ()=>{

    const [name, setName]= useState("")
    const [age, setAge] = useState(0)
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")   

    const [nameTrips] = useRequestData(`${BASE_URL}/mylena-savala-banu/trips`)


    const optionsArray = nameTrips.map((item)=>{
        return(
       <option >{item.name}</option>
        )
    })
    

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    
    const onChangeAge= (e) => {
        setAge(e.target.value);
    }
    const onChangeApplicationText = (e) => {
        setApplicationText(e.target.value);
    }
    
    const onChangeProfession= (e) => {
        setProfession(e.target.value);
    }
    const onChangeCountry= (e) => {
        setCountry(e.target.value);
    }


    const history = useHistory()

    const goBack = ()=>{
        history.goBack()
    }
    const Submit = (event)=>{
      event.preventDefault()
      const body = {
      name,
        age,
        applicationText,
        profession,
        country
        
        }
        axios.post(`${BASE_URL}/mylena-banu/trips/${nameTrips.id}/apply`,body,{
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
 
return (

<Background>   
          <ContainerForm>
           
    <h1>Inscreva-se para uma viagem!<br/>Garanta sua vaga</h1>
            <DivInputForm>
            <select>
         {optionsArray}
    </select>

    <h4>Nome:</h4>
 <input 
 name="name"
 placeholder="Nome: "
 value={name}
 onChange={onChangeName}
/>
<h4>Idade: </h4>
<input 
 name="age"
 value={age}
 placeholder="Idade: "
 onChange={onChangeAge}
/>
 <h4>Texto de Candidatura: </h4>
<input 
 name="applicationText"
 value={applicationText}
 placeholder="Texto de Candidatura: "
 onChange={onChangeApplicationText}
/>

<h4>Profissão: </h4>
<input 
name="profession"
value={profession}
 placeholder="Profissão: "
 onChange={onChangeProfession}
 />
<h4>País: </h4>
<input 
 name="country"
 value={country}
 placeholder="Pais: "
 onChange={onChangeCountry}
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


