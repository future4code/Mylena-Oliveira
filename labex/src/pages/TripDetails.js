import { useEffect } from 'react';
import { getTripDetails } from '../services/index';
import { useProtectedPage } from '../hooks/useProtectedPage'

export const TripDetails = () => {  
    alert("Welcome")

    useProtectedPage();

    useEffect(() => {
        const fetch = async () => {
            const token = localStorage.getItem("token");
            const response = await getTripDetails(token);
            console.log(response);
        }
        fetch();
    }, []);

    return (
        <>
            <h1>Detalhe da Viagem</h1>
            {/* <p>E-mail</p>
            <input value={email} onChange={onChangeEmail}/>
            <p>Senha</p>
            <input type="password" value={password} onChange={onChangePassword}/>
            <button onClick={onClickLogin}>Login</button> */}
        </>
      )
      }
      