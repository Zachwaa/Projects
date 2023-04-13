const express = require('express');
const router = express.Router();
const create = require('../services/create');

router.post("/api/createNewAccount",(req,res,next) => {
        const {username,password} = req.body;
        if (username && password){
    
            create.create(username,password).then(response => {
                console.log(response)
            
            }).catch(err => console.log(`Error: ${err}`))
        }
})

module.exports = router;