var express = require('express');
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

//11/27 added
router.get('/create', function(req,res){
  console.log("Create Access");
  const 
})

module.exports = router;