var express = require('express');
const authMiddleware = require('../middlewares/auth');
var router = express.Router();

/* GET home page. */
router.use('/', authMiddleware);

//post방식써야댐
router.get('login', (req,res)=>{
  res.send("You Logged In!");
});

module.exports = router;
