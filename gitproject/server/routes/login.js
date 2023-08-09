const express = require('express');
const router = express.Router();
const login = require('../services/login');

router.post("/api/login",(req,res,next) => {
        
    const {username,password} = req.body;
    login.login(username,password).then(response => {
        if (response.logged_in){
            req.session.admin = response.logged_in
            res.send("Logged In")
        } else {
            res.send("Invalid Credentials")

        }
        
    }).catch(err => console.log(`Error: ${err}`))
               
})

router.get("/api/login",(req,res,next) => {
    if (req.session.admin !== undefined){
        if (req.session.admin){
            res.json(req.session.admin)
        } else {
            res.send(false)
          //  res.status(401).json({ message: 'Not logged in' })
        }
    } else {
        res.send(false)
    }
})

module.exports = router;

