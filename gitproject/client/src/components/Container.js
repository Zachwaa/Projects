import React from "react";
import styled from "styled-components"

export const ContainerStyle = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px 10px 0px;
    flex-direction: ${props => props.direction };
    background-color: ${props => props.color || "transparent"};
    color: ${props => props.textColor || "black"}
    
    

`

export function Container({direction,color,textColor,children}){

    return (
        <>
            <ContainerStyle direction={direction} color = {color} textColor={textColor}>
                {children}
            </ContainerStyle>
        </>
    )
}

export default Container