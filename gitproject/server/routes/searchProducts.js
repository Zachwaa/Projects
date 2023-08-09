const express = require('express');
const router = express.Router();
const retrieve = require("../services/retreiveProducts")

router.get("/api/productList",(req,res,next) => {
    let cat = req.query.category
    //let description = req.query.search
    retrieve.retrieveProducts(cat)
    .then((response) => {
       
        res.send(response)
    })
    

})

module.exports = router