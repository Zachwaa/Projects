import {Link} from "react-router-dom"
import styled from 'styled-components';

export const Box = styled.div`
    background-color: #114B5F;
    bottom: 0;
    position: absolute;
    width:100%;
    display: flex;
    flex-direction: column; 
`
export const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding:30px 180px;
`

export const Row = styled.div`
    flex:1;
    color:white;
    display:flex;
    line-height: 20px;
    flex-direction:column;
    align-items: center;
    justify-content:center;
`

export const List = styled.div`
    display:flex;
    font-size: 0.8em;
    flex-direction:column;
`

export const Topic = styled.div`
    font-size: 1.4em;
    padding:0.3em 0em;
`


export const NewsLetter = styled.div`
    padding: 20px;
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    background-color:#028090;
`

export const Styledlink = styled(Link)`
    color:white;
    text-decoration:none;


`