import axios from 'axios'
import React, {useEffect,useState} from "react";

export default function useRequestPost(url,name, age, applicationText,profession,country) {
    const [listTripsInscriptions] = useState([])

    useEffect(() => {
        const body = {
        name,
        age,
        applicationText,
        profession,
        country
        }
        axios.post(url,body,{
            headers:{
                Authorization:"mylena-banu"
            }
        }).then((res)=>{
            alert("Formulário enviado com sucesso",res)
 
          
        })
        .catch((err)=>{
            console.log(err)
          
        }) }, [url])
        return [listTripsInscriptions]
        }
    


    
    
