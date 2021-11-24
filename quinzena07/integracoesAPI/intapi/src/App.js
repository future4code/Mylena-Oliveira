import React from 'react'
import ListarUsuarios from './components/listarUsuarios'
import CriarUsuario from './components/criarUsuario';

export default class App extends React.Component {
  state={
  page:"createUser"
  }

  irParaCadastro = ()=>{
    this.setState({page:"createUser"})
  }

  irParaLista = ()=>{
    this.setState({page:"usersList"})
  } 

  renderPage = () => {
    switch (this.state.page) {
      case "createUser":
        return <CriarUsuario irParaLista={this.irParaLista} />;
      case "usersList":
        return <ListarUsuarios  irParaCadastro={this.irParaCadastro} />;
      default:
        return <div>Página não encontrada</div>;
    }
  };

  render() {
  return (
    <div>
      {this.renderPage()}
    </div>
  );
}
}

