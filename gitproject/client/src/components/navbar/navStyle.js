import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Box = styled.div`
    top: 0;
    color:white;
    width:100%;
    position:fixed;
    z-index: 2;
    background-Color: #114B5F; 
` 
export const Navigation = styled.nav`
    display:flex;
    flex-direction: row;

` 
export const Logo = styled.div`
    padding-inline: 20px;
    &:hover {
        cursor:pointer;
    }

` 
export const Nav = styled.div`
    padding:0.4em;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
` 

export const Styledlink = styled(Link)`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-size:0.8em;
    text-decoration:none;
    padding-inline:10px;
    &>* {
        color:white;
        font-size:1.7em;
        padding-inline: 4px;
        &:hover {
            color:#F45B69;
        }
    }

`

export const Navsearch = styled.div`
    padding: 3px;
    display:flex;
    flex-direction:row;
    align-items:center;
`

export const Searchoptions = styled.div`
    background-color:#114B5F;
    padding:0.6em 1em;
`

export const Option = styled(Link)`
    font-size: 0.7em;
    padding-inline:14px;
    color:white;
    text-decoration:none;

`

export const Gender = styled.div`
    display:flex;
    flex-direction: row;

`

export const Genderoption = styled.a`
    height:100%;
    display:flex;
    justify-content: center;
    align-items:center;
    padding-inline:12px;
    &:hover {
        text-decoration:underline;
        color:#F45B69;
    }

`

export const Header = styled.div`
   

    background-color:#456990;
    display:flex;
    justify-content: center;
    font-size: 0.8em;
    padding: 4px;
    &>* {
        padding-inline:6px;
    }

`

export const Popup = styled.div`
    width: 100%;
    @keyframes trans {
        from {left:-10%; }
        to {left:110% }
    }
    position: relative;
    animation: trans 10s infinite cubic-bezier(.29,.67,.9,-0.05);

`

export const Margin = styled.div`
    position: absolute;
    width:100%;
    height: ${props => props.height}px;

`