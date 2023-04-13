import React,{useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Navsearch } from "./navStyle";

const Searchbar = () => {
    const action = useRef();
    function search(e) {
        

    }
    return (
        <Navsearch>
            <input type ="text" placeholder="Search..." size={35} style={{padding:"5px", borderRadius:"15px"}} ref={action}/>
            <button onClick={search} style={{backgroundColor:"transparent",border:"none"}}><FontAwesomeIcon icon ={faMagnifyingGlass} style= {{fontSize:"1.2em",color:"white"}}></FontAwesomeIcon></button>
        </Navsearch>
    )
}

export default Searchbar