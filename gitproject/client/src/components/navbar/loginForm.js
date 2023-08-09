import React,{useState,useRef} from "react";
import { Link } from "react-router-dom";
import Overlay from "../overlay"
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Title,Section,Form,Submit,Switch,Header,Sector,Input,Account,Check,Icon,Error } from "./loginFormStyle";
import axios from "axios";

const Loginform = () => {

    const [termsConditions,tickTerms] = useState(""),
        [passwordWeak, passwordWeakChange] = useState(""),
        [emailMatch, emailMatching] = useState(""),
        [passwordMatch, passwordMatching] = useState(""),
        [detailsWrong,changeDetailsWrong] = useState(""),
        [show,setShow] = useState("password"),
        [CreateNewOpen, setCreate] = useState(false),
        [isOpen, setIsOpen] = useState(true),
        [eyeOpen, setEyeOpen] = useState(faEyeSlash),
        email = useRef(),
        conEmail = useRef(),
        conPassword = useRef(),
        Password = useRef(),
        user = useRef(),
        pass = useRef(),
        term = useRef()


    function toggleOverlay (e) {
        setIsOpen(!isOpen);
        document.body.style.overflow = "auto"
        
    };

    function createNewAccount() {setCreate(true);}

    function goToLogin(){setCreate(false)}
   
    function showText(){
        setShow(show === "password" ? "text" : "password")
        setEyeOpen(eyeOpen === faEye ? faEyeSlash : faEye)
    }

    function checkPasswordValidity(pass) {
        const password = pass;
        
        if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
            return true
        } else {
            return false
        }
    }

    async function logIn(e){
        e.preventDefault()
        
        const formData = {
            username: user.current.value,
            password: pass.current.value
        }
        try {
            const data = await axios.post("/api/login", formData,
                { 
                    "Content-Type": "application/json",
                    "withCredentials":true
                }
            )
            if (data.data !== "invalid Credentials"){
                toggleOverlay()
                window.location.reload(true)
           } else {
             changeDetailsWrong("Email or Password is incorrect")
           }

            
        } catch (err){
            console.log(err)
        }
        
    }

    function validateForm(email,password,conPassword,conEmail,terms){
        let validate = true;
        if (!(email===conEmail)){
            validate = false;
            emailMatching("Emails do not match")
        } else {emailMatching("")}
        if (!(password===conPassword)){
            passwordMatching("Password do not match")
            validate = false;
        } else {passwordMatching("")}
        if (!checkPasswordValidity(password)){
            passwordWeakChange("Password should have at least one special character, one number and be 6-16 characters");
            validate = false;
        } else { passwordWeakChange("");}
        if (!terms){
            tickTerms("Please agree to Terms and Conditions")
            validate = false
        } else {tickTerms("")}
        return (validate)

    }

    async function createNew(e){
        e.preventDefault()
        if (validateForm(email.current.value,Password.current.value,conPassword.current.value,conEmail.current.value,term.current.checked)){
            
            const Data = {
                username: email.current.value,
                password: Password.current.value,
            }
            fetch("/api/createNewAccount",{
                method:"POST",
                body:JSON.stringify(Data),
                headers: { "Content-Type": "application/json" }
            }).then(req => console.log(req))

            toggleOverlay();
        }         
    }

    return (
            <>
                <Overlay isOpen={isOpen} onClose= {toggleOverlay}>
                    {CreateNewOpen ? (
                        <Form onSubmit={createNew} key ="CreateNewAccount" method="post">
                            <Header>
                                <Title>Create New Account</Title>
                                <Switch>Got an Account?  <Account onClick={goToLogin}>Sign in</Account></Switch>
                            </Header>
                            <Sector>
                                <Section val="email" key = "email">
                                    <Input type ="text" name="email" placeholder="Email..." size="30" ref={email}/>
                                </Section >
                                <Section val="conEmail" key = "conEmail">
                                    <Input type ="text" name="email" placeholder="Confirm Email..." size="30" ref={conEmail}/>
                                    <Error>{emailMatch}</Error>
                                </Section>
                                <Section val="password" key ="password">
                                    <div style={{display:"flex",alignItems:"center",position:"relative"}}>
                                        <Input type={show} placeholder="Password..." name="password" size="30"ref={Password} />
                                    </div>
                                </Section>
                                <Error>{passwordWeak}</Error>
                                <Section val="conPass" key="conPassword">
                                    <Input type ="password" name="conPassword" placeholder="Confirm Password..." ref={conPassword} size="30"/>
                                </Section>
                                <Error>{passwordMatch}</Error>
                                <Section val="agree" key="agree">
                                    <Check type="checkbox" name="remember" ref={term}></Check>
                                    <label style={{fontSize:"0.75em"}}>I confirm that I have read the terms and conditions and the privacy notice</label>
                                </Section>
                                <Error>{termsConditions}</Error>
                            </Sector>
                            <Submit type="submit"></Submit>
                        </Form>
                    ) : 
                        <Form onSubmit={logIn} key="LogIn">
                            <Header>
                                <Title>Sign in</Title>
                                <Switch>New?  <Account onClick={createNewAccount}>Create an account</Account></Switch>
                            </Header>
                            <Sector>
                                <Section val="email" key="email">
                                    <Input type ="text" name="email" placeholder="Email..." size="30" ref={user}/>
                                </Section>
                                <Section val="password" key="password">
                                    <div style={{display:"flex",alignItems:"center",position:"relative"}}>
                                        <Input type={show} placeholder="Password..." name="password" size="30" ref={pass}/>
                                        <Icon icon={eyeOpen} onClick={showText}></Icon>
                                    </div>
                                </Section>
                                <Error>{detailsWrong}</Error>
                                <Section val="remember" key="remember">
                                <Check type="checkbox" name="remember"></Check>
                                    <label>Remember Me</label>
                                </Section>
                            </Sector>
                            <Submit type="submit"/>
                            <div>
                                <Link style={{fontSize:"0.7em",color:"black"}}>Forgotten Password</Link>
                            </div>
                        </Form>
                    }
                </Overlay>
            </>
            
          
    )
}

export default Loginform