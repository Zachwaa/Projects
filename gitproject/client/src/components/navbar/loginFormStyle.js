import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Form = styled.form`
    padding: 0em 2em 2em 2em;
    &>* {
        padding: 0.5em 0em;
    }
`

export const Title = styled.div`
    font-size: 1.8em;
    font-weight: 600;
    padding: 7px 0px;
`

export const Section = styled.div`
    font-size: 0.9em;
    padding: 0.3em 0em;
`

export const Submit = styled.input.attrs({type:"submit"})`
    border-radius: 0px;
    background-color: #456990;
    color:white;
    padding: 7px 7px;
    &:hover {
        background-color:#F45B69;
        cursor:pointer;
        transition: 0.6s ease-out;
        
    }
`

export const Switch = styled.div`
    color:black;
    font-size: 0.8em
`

export const Sector = styled.div`
    padding: 0.2em 0em 1em 0em;
`

export const Header = styled.div`
    padding: 1em 0em 1.3em 0em;
`

export const Check = styled.input.attrs({type:"checkbox"})`
    &:hover {
        cursor:pointer;
    }
`

export const Input = styled.input`
    padding: ${props => props.type === 'password' | props.type === 'text' && "0.4em"}
`

export const Account = styled.span`
    text-decoration:underline;
    &:hover {
        cursor:pointer;
    }
`

export const Icon = styled(FontAwesomeIcon)`
    position:absolute;
    right: 3%;
    opacity: 55%;
    &:hover {
        cursor:pointer;
    }

`

export const Error = styled.span`
    color:red;
    font-size: 0.7em;

`