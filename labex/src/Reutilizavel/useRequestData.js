import {useEffect,useState} from "react";
import axios from 'axios'

export default function useRequestData(url) {
    const [listTripsUniversal, setListTripsUniversal] = useState([])



    useEffect(() => {
        axios.get(url,{
        headers:{
            Authorization:"mylena-savala-banu"
        }
    }).then((res)=>{

        setListTripsUniversal(res.data.trips)
  
    })
    .catch((err)=>{
        console.log(err)
        alert("Ocorreu um erro tente mais tarde é aqui", err)
    })
}  , [url])


return [listTripsUniversal]

}

