import React, {useState} from "react"
import Resetar from "./componentes/resetar"
import TelaMatches from "./componentes/telaMatches"
import EscolherPerfis from "./componentes/escolherPerfis"

function App() {
  const [telaAtual,setTelaAtual ] = useState("escolherPerfis")

 const  irParaEscolherPerfis =() =>{
    setTelaAtual('escolherPerfis')
  }
  const irParaTelaMatches =() =>{
    setTelaAtual('telaMatches')

  }
 const irParaResetar =() =>{
    setTelaAtual('resetar')
  }
  const escolheTela = ()=>{
    switch(telaAtual){
      case 'escolherPerfis':
        return <EscolherPerfis
        />
      case 'telaMatches':
      return <TelaMatches    
      />

      case 'resetar':
        return  <Resetar
        />
      
      default:
        return <div>Erro! Página não encontrada</div>
    }
  }
 
  return (
    <div >
    {escolheTela()}
    </div>
  );
}

export default App;
