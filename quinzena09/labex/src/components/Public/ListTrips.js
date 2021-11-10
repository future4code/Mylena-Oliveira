import React from 'react';
import axios from 'axios'
import {useHistory} from "react-router-dom"

export const ListTrips = ()=>{
    const history = useHistory()

    const goToApplication = ()=>{
        history.push("/ApplicationForm")
    }
    const goBack = ()=>{
        history.goBack()
    }
return (
<div>
<button onClick={goToApplication}>Inscrever para uma viagem</button>
<button onClick={goBack}>Voltar</button>

</div>

);
};