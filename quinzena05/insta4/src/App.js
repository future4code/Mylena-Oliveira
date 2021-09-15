import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
        nomeUsuario={'Sheila'}
        fotoUsuario={'https://bit.ly/3hyTXkx'}
        fotoPost={'https://bit.ly/2VEGqjF'}
        />
        <Post
        nomeUsuario={'Chiquinho'}
        fotoUsuario={'https://br.web.img3.acsta.net/pictures/15/11/20/14/53/049755.jpg'}
        fotoPost={'https://bit.ly/3lhiRGw'}
        />
   </MainContainer>
    );
  }
}


export default App;
