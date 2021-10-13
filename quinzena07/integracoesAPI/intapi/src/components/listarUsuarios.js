import React from 'react';
import axios from "axios";


const url ='https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
    headers: {
      Authorization: "mylena-savala-banu"
    }
  };
  
export default class ListarUsuarios extends React.Component {
state={
  usuarios:[]
}
  componentDidMount(){
    this.pegarUsuarios()
  }
    pegarUsuarios = () => {
        axios
          .get(url,headers)
          .then((res) => {
            this.setState({ usuarios: res.data });
          })
          .catch((err) => console.log("Ocorreu um erro durante a exibição ",err.message));
      };
      
      deletarUsuarios =(id) =>{
        const urlDelete = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id} ` 
      axios.delete(urlDelete,headers)
      .then((res)=>{
        alert('Usuário deletado com sucesso')
        this.pegarUsuarios()
      })
      .catch((err)=>{
        console.log(err.response.data)
      })
      }
    render(){
       const listaUsuarios = this.state.usuarios.map((user) =>{
         return <div key={user.id}>{user.name}
         <button onClick={()=> this.deletarUsuarios(user.id)}>Deletar</button>
         </div>
       })
        return(
            <div>
            <button onClick={this.props.irParaCadastro}>Cadastrar usuários</button>
            <h1>Usuários Cadastrados</h1>
          {listaUsuarios}
            </div>
        );
    }
    
}
