import  {useEffect,useState} from "react";
import axios from 'axios'

export default function useRequestDelete(url) {

    const [deleteTrip, setDeleteTrip] = useState("")

 
    useEffect(() => {
        DeleteTrip()
        }
          , [url])

          const DeleteTrip=()=>{
            axios.delete(url,{
                headers:{
                    Authorization:"mylena-savala-banu"
                }
            }).then(()=>{
   
        alert("Viagem excluída com sucesso")  
            })
            .catch((err)=>{
                console.log(err)
                alert("Ocorreu um erro tente mais tarde", err)
            })
        }
return deleteTrip 
}

