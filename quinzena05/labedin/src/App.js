import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-componentes';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
          <CardGrande 
          imagem="https://bit.ly/3jWaTTB" 
          nome="Mylena Savala Oliveira" 
          descricao="Oi, eu sou a Mylena. Sou estudante da LABENU e apaixonada por programação e tecnologia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
        titulo="E-mail"
        informacoes="mylena.savala@gmail.com"
        />
        </div>
        <div className="page-section-container">
        <CardPequeno
        titulo="Endereço"
        informacoes="Rua Labenu"
        />
        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Art It" 
          descricao="Cargo: Estagiária de TI
          Na área de Engenharia e Arquitetura de Soluções desempenhando entendimento de escopo e defesa, participação na elaboração de proposta técnica comercial, estimativas de projetos, participação na equipe de arquitetura para definição de tecnologia a ser aplicada no projeto e apoio na implementação do MPS BR.
          " 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Redsis Brasil LTDA." 
          descricao="Cargo: Auxiliar Técnico
          Atuação na área de manutenção de hardware desempenhando a alimentação de informações em sistemas, rotinas administrativas, controle de qualidade das peças consertadas, participação na bancada para manutenção e correção de equipamentos eletrônicos.
          ." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
