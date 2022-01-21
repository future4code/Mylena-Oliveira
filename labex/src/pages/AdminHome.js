import {useHistory} from "react-router-dom";
import { useContext } from "react";
import { BASE_URL } from "../constants/base_url";
import axios from 'axios'
import {
    ListTrip,
  } from "./styles";
import GlobalState from "../context";
import { useProtectedPage } from '../hooks/useProtectedPage'



export const AdminHome = ()=>{
  useProtectedPage()
  const listTrips  = useContext(GlobalState);

    const history = useHistory()

    const goToApplication = ()=>{
        history.push("/TripDetails")
    }
    const goToNewTrip = ()=>{
      history.push("/CreateTrip")
  }

    const DeleteTrip =(id) =>{
      const url = `${BASE_URL}/mylena-savala-banu/trips/${id}`

      axios.delete(url,{
        headers:{
            Authorization:"mylena-savala-banu"
        }
    }).then(()=>{

    })
    .catch((err)=>{
        console.log(err)
        alert("Ocorreu um erro tente mais tarde é aqui", err)
    })

    } 
    // const AllListTrips = listTrips
    // .map((trip)=>{
    //     return (
    //         <ListTrip
    //         key={trip.id}> 
    //         <h4>{trip.name}</h4>
    //         <button onClick={goToApplication}>
    //           Detalhes
    //         </button>
  
    //         <button onClick={()=>DeleteTrip(trip.id)} >Deletar</button>
    //         </ListTrip>
    //     )
    // })
console.log(listTrips)
return (

<div>
    <h1>Página Administrador</h1>
    {/* {AllListTrips} */}
 
{listTrips}
<button onClick={goToNewTrip}>Nova Viagem</button>
</div>

);
};



