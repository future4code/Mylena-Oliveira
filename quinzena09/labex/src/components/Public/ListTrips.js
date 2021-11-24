import {useHistory,useEffect} from "react-router-dom"
import { BASE_URL } from "../constants/base_url";
import useRequestData from "../Reutilizavel/useRequestData";



export const ListTrips = ()=>{

 
  const [listTripsUniversal] = useRequestData(`${BASE_URL}/mylena-banu/trips`)

    
    const history = useHistory()

    const goToApplication = ()=>{
        history.push("/ApplicationForm")
    }
    const goBack = ()=>{
        history.goBack()
    }


    const AllListTrips = listTripsUniversal
    .map((trip)=>{
        return (
        <div 
            key={trip.id}> 
            <h3>{trip.name}</h3>
            <p>{trip.description}</p>
            <p>{trip.date}</p>
            <p>{trip.durationInDays}</p>
            <p>{trip.planet}</p>
        </div>
        )
    })

return (
<div>

<button onClick={goBack}>Voltar</button>
<button onClick={goToApplication}>Inscreva-se </button>

<div>
<h2>Lista de Viagens</h2>
 {AllListTrips}

</div>
</div>

);
};