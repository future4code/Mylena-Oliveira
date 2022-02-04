import {useHistory} from "react-router-dom";
import { useContext } from "react";
import { BASE_URL } from "../constants/base_url";
import axios from 'axios'
import {Button} from '@material-ui/core'

import {
  BackgroundAdmin,
  ListTrip,
} from "./styles";
import { useProtectedPage } from '../hooks/useProtectedPage'
import useRequestData from "../Reutilizavel/useRequestData";


export const AdminHome = ()=>{
  useProtectedPage()
  

    const history = useHistory()

    const goToApplication = ()=>{
        history.push("/TripDetails")
    }
    const goToNewTrip = ()=>{
      history.push("/CreateTrip")
  }
  const goBack = ()=>{
    history.goBack()
}

  const [listTripsUniversal] = useRequestData(`${BASE_URL}/mylena-savala-banu/trips`)


  const AllListTrips = listTripsUniversal
  .map((trip)=>{
      return (
          <ListTrip
          key={trip.id}> 
          <h4>{trip.name}</h4>
          </ListTrip>
      )
  })

return (
  
<BackgroundAdmin>   
    <h1>Viagens em Aberto</h1> 

    <Button variant="outlined" href="#outlined-buttons"  onClick={goToNewTrip} >
    Criar Viagem
</Button>
            <div button>
            {AllListTrips}
            </div>
      
</BackgroundAdmin >

);
};








