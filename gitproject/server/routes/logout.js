const express = require('express');
const router = express.Router();

router.post("/api/logout",(req,res,next) => {
    req.session.destroy();
        
})

module.exports = router;