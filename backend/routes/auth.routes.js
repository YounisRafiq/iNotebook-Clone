const express = require('express');
const router = express.Router();

router.get('/' , (req , res) => {
    res.json({
        role : "Full Stack Developer",
        Stack : "MERN Stack"
    })
});

module.exports = router;