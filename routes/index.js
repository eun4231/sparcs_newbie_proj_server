var express = require('express');
//var mongoose = require('mongoose');
//var session = require('express-session');
const authRouter = require('./auth');
var router = express.Router();

/* GET home page. */
router.use('/auth', authRouter);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login-post', (req, res)=>{
  //use DB, middleware!!
  console.log(req.body.content)
  if(req.body.content === password)
    res.send("You Logged In!")
  else res.send("Fail To Login")
});


module.exports = router;