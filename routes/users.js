var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var userid = '';

router.post('/add', (req, res)=>{
  const todo = new Todo({
    id: last_id,
    content: req.body.content
  });
  await todo.save();
});

router.get('/todos', (req, res)=>{
  todo.findbyId(userid, function(err, user){

  } )
})

router.post('/update', (req, res)=>{
  findByIdAndUpdate()
  await todo.save();
});

router.post('/delete', (req, res)=>{
  findByIdAndRemove()
  await todo.save();
});

module.exports = router;
