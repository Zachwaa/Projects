import React,{memo,useContext,useRef,useState} from "react"
import { Navigation,Logo,Box,Nav,Styledlink,Searchoptions,Genderoption,Gender,Option,Header,Popup } from "./navStyle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faUser,faShoppingBasket,faTruck,faHouse,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Searchbar from "./searchBar"
import Loginform from "./loginForm" 
import {User} from "../../index"
import axios from "axios"

const Navbar = () => {

    const [show,showForm] = useState([]);
    const search = ["New In","Shorts","Shoes","Hoodies","T-Shirts","Jewerly & Accessories"];
    const logInForm = e => {
        document.body.style.overflow = "hidden"
        showForm(show.concat(<Loginform/>))
    } 
    const ref = useRef(null);
    const verified = useContext(User)
 
   async function logOut (){
        try {
            await axios.post("/api/logout")
            window.location.reload(true)
        
        } catch (err){
            console.log(err)
 }
   } 

    return (
        <>
            <Box ref={ref}>
                <Header>
                    <Popup><FontAwesomeIcon icon={faTruck}/>New Deal! 50% off</Popup> 
                </Header>
                <Nav>
                    <Gender>
                        <Logo><img src="./logo.png" alt="logo" height={45} /></Logo>
                        <Genderoption>Men</Genderoption>
                        <Genderoption>Women</Genderoption>
                        <Genderoption>Kids</Genderoption>
                    </Gender>
                    <Searchbar />
                    <Navigation>
                        <Styledlink to="/home" ><FontAwesomeIcon icon={faHouse}/></Styledlink>
                        {verified ?     <Styledlink onClick={logOut}><FontAwesomeIcon icon={faRightFromBracket}/></Styledlink>
                        : (
                            <Styledlink  onClick={logInForm}><FontAwesomeIcon icon={faUser} as="div"/>Sign In/Register</Styledlink>
                         ) 
                        
                        }
                        <Styledlink to="/wishlist" ><FontAwesomeIcon icon={faHeart}/></Styledlink>
                        <Styledlink to="/shoppingBasket"><FontAwesomeIcon icon={faShoppingBasket} /></Styledlink>
                    </Navigation>
                </Nav>
                <Searchoptions>
                    {search.map((opt) => <Option key={opt} to={`/shop`} >{opt}</Option>)}
                </Searchoptions>
            </Box>
            {show}

        </>

    )
}

export default memo(Navbar)