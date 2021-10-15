import React from 'react';
import axios from "axios";
import CriarUsuario from './criarUsuario';

const url ='https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id'

const headers = {
    headers: {
      Authorization: "mylena-savala-banu"
    }
  };
export default class ListarUsuarios extends React.Component {

    pegarPlaylists = () => {
        console.log("oi")
        axios
          .get(url,headers)
          .then((res) => {
            this.setState({ cadastro: res });
          })
          .catch((err) => console.log(err));
      };   
    render(){
        const listaCadastros = this.props.cadastro
        .map((cadastro) =>{
            return <li key={cadastro.id}>{cadastro.name}</li>;
        });
        return(
            <div>
            <h1>Usuários Cadastrados</h1>
            <ul>{listaCadastros}</ul>
            <button>Deletar</button>
            </div>
        );
    }
    
}
