const express = require('express');
const router = express.Router();

router.post("/api/logout",(req,res,next) => {
    req.session.destroy();
    res.clearCookie('connect.sid'); 
    //req.session.admin = false;
    res.sendStatus(200);

})

module.exports = router;