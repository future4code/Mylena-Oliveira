import React, {useState} from "react"
import Resetar from "./componentes/resetar"
import TelaMatches from "./componentes/TelaMatch"
import EscolherPerfis from "./componentes/escolherPerfis/index.js"

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
        irParaTelaMatches={irParaTelaMatches}
        />
      case 'telaMatches':
      return <TelaMatches    
      irParaEscolherPerfil={irParaEscolherPerfis}
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
