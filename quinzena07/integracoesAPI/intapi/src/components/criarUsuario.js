import React from 'react';
import axios from "axios";
import ListarUsuarios from './listarUsuarios'

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "mylena-savala-banu"
  }
};
export default class CriarUsuario extends React.Component {
    state={
        cadastro:[],
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
        .catch((err) => console.log(err.message));
      }
      pegarCadastro = () => {

        console.log("oi")
        axios
          .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id',
            headers)
          .then((res) => {
            this.setState({ cadastro: res });
          })
          .catch((err) => console.log(err));
      };   
   
    render(){
      const listaCadastros = this.state.cadastro
      .map((cadastro) =>{
          return <li key={this.state.id}>{this.state.cadastro.name}</li>;
      });
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
            <ul>{listaCadastros}</ul>
            <button onClick={this.pegarCadastro}>Listar usuários criados</button>

            </div>
        );
    }
    
}
