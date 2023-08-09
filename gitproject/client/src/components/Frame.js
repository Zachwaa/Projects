import React from "react";
import styled from "styled-components"


export const Framestyle = styled.div`
    outline: solid 1px black;
    display: flex;
    background-color:white;
    flex-direction: column;
    padding: ${(props => props.dimensions)}px;
    margin: 4px;
    &:hover{
        cursor:pointer;
    }
 
`

export const TextArea = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 6px 3px;
`

export function Frame({Text,Picture,Width}){

    return (
        
        <Framestyle dimensions={parseInt(Width)/50}>
            <img src={Picture} alt = {Text} width={Width}/>
            <TextArea>{Text}</TextArea>
        </Framestyle>
    
    )
}

export default Frame