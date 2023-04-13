import React from "react";
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const OverlayDiv = styled.div`
height:100vh;
width:100vw;
z-index: 3;
display:flex; 
position:fixed;
justify-content:center;
align-items:center;

`

const Bg = styled.div`
background: rgba(0, 0, 0, 0.5);
width:100%;
height:100%;
position:fixed;
`

const Cform = styled.div`
z-index: 4;
background-color: #E4FDE1;
border-radius: 8px;
width: 300px;
`
const cross = {
display:"flex",
justifyContent:"flex-end",
}

const Button = styled.button`
    font-size: 1.4em;
    background-color:transparent;
    border:none;

`

export function Overlay({isOpen,onClose,children}){

    return (
        <>
            {isOpen && (

                <OverlayDiv>
                    <Bg onClick={onClose}></Bg>
                    <Cform>
                        <div style={cross}>
                            <Button onClick={onClose} ><FontAwesomeIcon icon={faXmark}/></Button>
                        </div>
                        {children}
                    </Cform>
                </OverlayDiv>

            )}
        </>
    )
}

export default Overlay