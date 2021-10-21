import React from 'react'
import styled from 'styled-components'

const Headers = styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin:0px 0px 0px 0px;
padding:0px 0px 0px 0px;
width:100%;
height:12vh;
color:snow;
background-color: #344e41;
`

export default class Header extends React.Component{
  
render(){
    return (
        <Headers>
            <h1>Labefy - Ouça onde estiver</h1>
        </Headers>
    )
}
}