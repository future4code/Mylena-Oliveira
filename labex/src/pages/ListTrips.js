import {useHistory} from "react-router-dom"
import { BASE_URL } from "../constants/base_url";
import useRequestData from "../Reutilizavel/useRequestData";
import {
    Background,
    ButtonEstilizacao,
    ContainerListTrip,
    ContainerBotoes,
    ListTrip,
    DivTrip
  } from "./styles";

export const ListTrips = ()=>{

 
  const [listTripsUniversal] = useRequestData(`${BASE_URL}/mylena-savala-banu/trips`)

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
            <ListTrip
            key={trip.id}> 
            <h4>{trip.name}</h4>
            <h4>{trip.description}</h4>
            <p><strong>Data:</strong>{trip.date}</p>
            <p><strong>Duração em dias:</strong>{trip.durationInDays}</p>
            <p><strong>Planeta:</strong>{trip.planet}</p>
            </ListTrip>
        )
    })

return (

<Background>   
          <ContainerListTrip>
            <h1>Viagens Disponiveis</h1>
            
              <DivTrip>
              {AllListTrips}
              </DivTrip>
        
          <ContainerBotoes>
             <ButtonEstilizacao onClick={goBack}>Voltar</ButtonEstilizacao>
              <ButtonEstilizacao onClick={goToApplication}>inscreva-se</ButtonEstilizacao>
              </ContainerBotoes>
              </ContainerListTrip>
 </Background >

);
};




