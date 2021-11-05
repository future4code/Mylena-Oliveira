import React, {useState} from "react"
import Resetar from "./componentes/Resetar/index.js"
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
      irParaResetar={irParaResetar}
      />

      case 'resetar':
        return  <Resetar
        irParaEscolherPerfil={irParaEscolherPerfis}
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
