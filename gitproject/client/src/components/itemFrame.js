import React from "react";
import styled from "styled-components"
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {User} from "../index"
import { useContext } from "react";

export const Img = styled.img`
    width: 250px;
`
export const StyleFrame = styled.div`
    display: flex;
    overflow:hidden;
    flex-direction: column;
    padding: 4px;
    margin: 4px;
    width:250px;
    &:hover{
        cursor:pointer;
    }
`

export const Volume = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Span = styled.span`
    padding: 5px 3px;
    font-size: ${props => props.size};
    width: 100%;
    letter-spacing: ${props => props.spacing};
    font-weight: ${props => props.weight}
`

export const Heart = styled(FontAwesomeIcon)`
@keyframes rainbow {
    0% {
      color: orange;
      scale: 1.4;
    }
    10% {
      color: purple;
    }
    20% {
      color: red;
    }
    30% {
      color: CadetBlue;
    }
    40% {
      color: yellow;
    }
    50% {
      color: coral;
    }
    60% {
      color: green;
    }
    70% {
      color: cyan;
    }
    80% {
      color: DeepPink;
    }
    90% {
      color: DodgerBlue;
    }
    100% {
      color: orange;
    }
  }
    position: absolute;
    margin: 20px;
    scale: 1.3;
    color: grey;

    display:flex;
    justify-content: end;
    &:hover {
        cursor:pointer;
        animation: rainbow 5s infinite;
    }
`


export function ItemFrame({text,price,picture,options}){

    const pic = require(`../assets/${picture}`)
    const verified = useContext(User)

    function addToWishlist() { 
        if (verified){

        } 
    }

    return (
        <>
            <StyleFrame direction="column">
                <Img src={pic} alt={text} />
                <Span >{text}</Span>
                <Span size = "1em" spacing = "-2px" weight= "bold">${price}</Span>
                <Heart icon= {faHeart} onClick={addToWishlist}></Heart>
            </StyleFrame>
        </>
    )
}

export default ItemFrame