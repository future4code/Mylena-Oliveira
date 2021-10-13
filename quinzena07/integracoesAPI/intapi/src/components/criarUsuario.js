import React from 'react';
import axios from "axios";


const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "mylena-savala-banu"
  }
};
export default class CriarUsuario extends React.Component {
    state={
        nomeUsuario:"",
        emailUsuario:""
    };
        

    onChangeNome = (event) => {
        this.setState({nomeUsuario: event.target.value });
      };
    
      onChangeEmail = (event) => {
        this.setState({emailUsuario: event.target.value });
      };
      
      onClickCriarUsuario = () => {
        const body = {
          name: this.state.nomeUsuario,
          email:this.state.emailUsuario      
        };
        axios
        .post(url, body, headers)
        .then((res) => {
          console.log(res);
          this.setState({ nomeUsuario: "" });
          this.setState({ emailUsuario: "" });
        alert('Cadastro realizado com sucesso')
        })
        .catch((err) => alert(err.response.data.message));
      }

    render(){
        return(
            <div>
             <h1>Cadastro de usuários</h1>
            <input
            placeholder="Digite o nome"
            value={this.state.nomeUsuario}
            onChange={this.onChangeNome}
            />
            <input 
            placeholder="Digite o e-mail"
            value={this.state.emailUsuario}
            onChange={this.onChangeEmail}
            />
            <button onClick={this.onClickCriarUsuario}>Criar Usuário</button>
            <div>
            <button onClick={this.props.irParaLista}>Listar usuários criados</button>
            </div>
            </div>
        );
    }
    
}
