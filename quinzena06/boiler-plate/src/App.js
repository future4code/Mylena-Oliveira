import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
      id: Date.now(), 
      texto: 'Texto da tarefa',
      completa: false 
},{
	id: Date.now(), // Explicação abaixo
	texto: 'Texto da segunda tarefa',
	completa: true // Indica se a tarefa está completa (true ou false)
}],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    this.pegarDados();
  };

  pegarDados = () => {
    localStorage.setItem("Tarefas", JSON.stringify(this.state.tarefas))
    const tarefaLS = localStorage.getItem("Tarefa Digitada")
    this.setState({
    InputValue:tarefaLS
    });
    localStorage.setItem("Tarefas", JSON.stringify(this.state.tarefas))
    
  }


  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id:Date.now(),
      texto:this.state.inputValue
    }
    const novaListaTarefa = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas:novaListaTarefa})
  }

  selectTarefa = (id) => {
    const novaSelectTarefa = this.state.tarefas.map((selecao) =>{
      if(id ===selecao.id){
        const selecionarTarefa ={
          ...selecao,
          selecionado: !selecao.selecionado
        }
        return selecionarTarefa
      }else{
        return selecao
      }
    })
    this.setState({tarefas: novaSelectTarefa})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
