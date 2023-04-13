const express = require('express');
const router = express.Router();
const login = require('../services/login');

router.post("/api/login",(req,res,next) => {
        
        const {username,password} = req.body;
        login.login(username,password).then(response => {
        
            req.session.user = username
            req.session.admin = response.logged_in
            res.send(req.session)
            
        }).catch(err => console.log(`Error: ${err}`))
               
})

router.get("/api/login",(req,res,next) => {
    try {
        res.send({"message":req.session.admin})
    } catch(err){
        console.log(err)
    }
})

module.exports = router;

