import axios from 'axios'

export const login = async ({ email, password }) => {

    let error;
    let response;
    
    try {
        response = await axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/mylena-savala-banu/login', 
        { email, password });
    } catch (e) {
        console.log(e.response)
        error = e.response;
    }

    return { 
        token: response && response.data.token, //AND se o primeiro for false, retorna o primeiro. Se o primeiro for true, retorna o segundo
        error
    }
}


export const getTripDetails = async (token, id) => {
    
    let error;
    let response;

    try {
        response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/mylena-savala-banu/trip/${id}`,
            {
                headers: {
                    auth: token
                }
            }
        );
    } catch (e) {
        error = e.response;
    }

    return {
        response,
        error
    }
}