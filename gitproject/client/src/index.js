
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/layout"
import Home from "./views/home"
import "./styleReset.css"
import Shoppingbasket from './views/shoppingBasket';
import Wishlist from "./views/wishlist"
import { createContext, useContext, useEffect,useState } from "react";

export const User = createContext()

export default function App(){

  const [loggedIn,setLoggedIn] = useState(false)
 // const [user,setUser]= useState()

  useEffect(() => {
    
    fetch("/api/login",{
        method:"GET",
        headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(data => {setLoggedIn(data.message)})
    .catch((err)=> {console.log(err)})
    },[]);

  function handleSubmit(users){
    console.log(loggedIn)
    setLoggedIn(users)
   // alert (loggedIn)
  //  setUser(users)
  }

  return (
    <User.Provider value = {loggedIn}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout handleSubmit={handleSubmit}/>}>
            <Route index element={<Home/>} path="home" ></Route>
            <Route element={<Shoppingbasket />} path={ (loggedIn) ? "ShoppingBasket": "admin/ShoppingBasket"}></Route>
            <Route element={<Wishlist />} path="Wishlist"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </User.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
