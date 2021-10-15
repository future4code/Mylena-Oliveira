import React from 'react'
import ListarPlaylist from './components/listarPlaylist.js'
import AdicionarPlaylist from './components/adicionarPlaylist.js'
import AdicionarMusicas from './components/adicionarMusicas.js'
import ListarMusica from './components/listarMusicas.js'
import Header from './components/Header.js'

export default class App extends React.Component {
  state ={
    telaAtual:'playlist'
  }

  irParaPlaylist =() =>{
    this.setState({telaAtual:'playlist'})
  }
  irParaMusica =() =>{
    this.setState({telaAtual:'musica'})
  }
  irParaListarPlaylist =() =>{
    this.setState({telaAtual:'listar'})
  }
  irParaListarMusica =() =>{
    this.setState({telaAtual:'listaMusica'})
  }
  

escolheTela = ()=>{
  switch(this.state.telaAtual){
    case 'playlist':
      return <AdicionarPlaylist
       irParaMusica={this.irParaMusica}
       irParaListarPlaylist={this.irParaListarPlaylist}
       irParaListarMusica = {this.irParaListarMusica}

      />

    case 'musica':
    return <AdicionarMusicas
    irParaPlaylist ={this.irParaPlaylist}
    irParaListarMusica = {this.irParaListarMusica}
    irParaListarPlaylist={this.irParaListarPlaylist} 
    />
    case 'listaMusica':
      return  <ListarMusica
      irParaPlaylist ={this.irParaPlaylist}
      irParaMusica={this.irParaMusica}
      />
    case 'listar':
      return  <ListarPlaylist
      irParaPlaylist ={this.irParaPlaylist}
      irParaMusica={this.irParaMusica}
      irParaListarMusica = {this.irParaListarMusica}
      />
    
    default:
      return <div>Erro! Página não encontrada</div>
  }
}
  render()
  {
  return (
    <div>
      <Header />
    {this.escolheTela()}
      
    </div>
      
  )
}

}

