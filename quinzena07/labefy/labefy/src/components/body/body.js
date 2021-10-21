import React from 'react'
import styled from 'styled-components'

const BodyContainer = styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin:0px 0px 0px 0px;
padding:0px 0px 0px 0px;
width:100%;
height:70%;
background-color:seagreen;
`

export default class Body extends React.Component{
  
render(){
    return (
        <BodyContainer>
          <h2>Infinito de possibilidades</h2>
            </BodyContainer>
    )
}
}