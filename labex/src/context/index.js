import { BASE_URL } from "../constants/base_url";
import useRequestData from "../Reutilizavel/useRequestData";
import GlobalStateContext from "./GlobalStateContext";

 const GlobalState = (props)=>{
  const [listTripsUniversal] = useRequestData(`${BASE_URL}/mylena-savala-banu/trips`)  

  
    const data = {
        listTripsUniversal
    };
    return (
      <GlobalStateContext.Provider value={data}>
        {props.children}
      </GlobalStateContext.Provider>
    );
  };
  
  export default GlobalState;


