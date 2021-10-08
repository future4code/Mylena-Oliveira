import React from 'react'
import './App.css';
import ListarUsuarios from './components/listarUsuarios'
import CriarUsuario from './components/criarUsuario';

export default class App extends React.Component {
  state={
  page:"createUser"
  }
  changePage = () => {
    if (this.state.page === "createUser") {
      this.setState({ page: "usersList" });
    } else if (this.state.page === "usersList") {
      this.setState({ page: "createUser" });
    }
  };

  renderPage = () => {
    switch (this.state.page) {
      case "createUser":
        return <CriarUsuario />;
      case "usersList":
        return <ListarUsuarios />;
      default:
        return <div></div>;
    }
  };
  
  render() {
  return (
    <div>
      <button onClick={this.changePage}>Listar usuários criados</button>
      {this.renderPage()}
    </div>
  );
}
}

