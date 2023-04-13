import React, {useRef,useState,memo} from "react";
import {Box, Container, Row,List,Topic,NewsLetter,Styledlink} from "./footerStyle";
const Footer = () => {

    const action = useRef();
    const [shown,show] = useState("none")
    const links = [
        {notes:["Sustainability","Report a Damaged Item","Sign up"], header:"Explore"},
        {notes:["Track your Parcel","Contact us","FAQ"],header:"Help and Contact"},
        {notes:["Company Policy","Warantee","Return Damaged Item"],header:"Q&A"},
        {notes:["Terms and Conditions", "Money Back Garauntee","Privacy Policy","Cookies Notice"],header:"Our Values"}
    ]

    const sendEmail = (e) => {
        const email = action.current.value;
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test(email)) {
            action.current.value = '';
            show("block");
        }
    }   

    return (
        <Box>
            <NewsLetter>
                <span style={{color:"white",fontSize: "1.2em"}}>Want to know more about new deals and events! Sign up to the News Letter</span>
                <div style={{padding: "1em"}}>
                    <input type="text" style={{padding: "0.3em"}} placeholder="Email Address..." ref={action}/>
                    <button style={{padding: "0.3em"}} onClick={sendEmail}> Subscribe</button>
                </div>
                <div style={{color:"white",display: shown} }>You will be notified of our upcoming sales!</div>
            </NewsLetter>
            <Container>
          
                {links.map((group) => 
               
                    <Row key={group.header}>
                        <List>
                            <Topic>{group.header}</Topic>
                            {group.notes.map((link) => <Styledlink key={link.trim()}>{link}</Styledlink>)}
                        </List>
                    </Row>
                    )
                }
            </Container>
        </Box>
    )
}

export default memo(Footer)